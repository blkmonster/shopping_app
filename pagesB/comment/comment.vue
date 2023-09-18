<template>
	<view class="container">
		<!-- 商品评价部分 -->
		<view class="goods-evaluate">
			<!-- 循环展示每个商品 -->
			<view v-for="(good, index) in goods" :key="index" class="good-item">
				<!-- 商品图片和名称 -->
				<view class="good-info">
					<image :src="good.picUrl" class="good-image"></image>
					<view>
						<view>
							<text class="good-name">{{ good.goodsName }}</text>
						</view>
						<u-rate :count="5" v-model="star[index]" active-color="#ffff7f" size="22"></u-rate>
					</view>
				</view>
				<!-- 关键词评价 -->
				<view class="keyword-evaluate">
					<view v-for="(word, idx) in words" :key="idx" @click="toggleKeyword(index, word)" class="keyword">
						<text :class="hasWord(index,word) ? 'active' : 'active2'">{{ word.keyword }}</text>
					</view>
				</view>
				<!-- 文本评价 -->
				<view class="text-evaluate">
					<text class="title">评价：</text>
					<textarea v-model="content[index]" maxlength="200" class="textarea"></textarea>
				</view>
				<!-- 图片评价 -->
				<view class="image-evaluate" @click="setIndex(index)">
					<text class="title">上传图片：</text>
					<view >
						<u-upload
						:fileList="picUrls[index]"
						@afterRead="afterRead"
						@delete="deletePic"
						name="1"
						multiple
						:maxCount="10"
						></u-upload>
					</view>
				</view>
			</view>
		</view>

		<!-- 提交评价按钮 -->
		<view class="bottom-btn">
			<view class="r" @tap="submit" >提交评价</view>
		</view>
		
	</view>
</template>

<script>
	const api = require('@/utils/api.js')
	const req = require('@/utils/request.js')
	const utils = require('@/utils/utils.js')
	export default {
		data() {
			return {
				orderId: 0,
				goods: [],
				goodsLen: 0,
				index: 0,
				// 固定的关键词选项
				words: [],
				// 每个商品的图片评价
				star: [],
				keywords: [[]],
				content: [],
				hasPicture: [],
				picUrls: [[]],

			}

		},
		onLoad(options) {
			this.orderId = options.id
			this.getOrderDetail()
			this.getSearchKeyword()
		},
		onReachBottom() {
			
		},
		onShow: function() {
			
		},
		methods: {
			getOrderDetail() {
				uni.showLoading({
					title: '加载中'
				});
				setTimeout(function() {
					uni.hideLoading();
				}, 2000);
				let that = this;
				var params ={
					id: that.orderId
				}
				req.request(api.OrderDetail, params).then(res=> {
					if (res.errno === 200) {
						console.log("订单详情返回成功结果",res.data);
						that.goods = res.data.orderGoodsList
						that.goodsLen = res.data.orderGoodsList.length
					}else{
						console.log("订单详情",res);
					}
					uni.hideLoading();
				}).catch(err=>{
					console.log("订单详情",err);
				});
			},
			getSearchKeyword() {
				var that = this
				req.request(api.KeywordList,{value: 2}).then(res => {
					// console.log("关键字",res)
					that.words = res.data.list
				}).catch(err => {
					console.log("数据接收失败", err)
				})
			},
			// 上传图片
			async afterRead(event) {
				// 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				// 循环上传图片到后端
				for (let i = 0; i < lists.length; i++) {
					await this.uploadFilePromise(lists[i].url).then(res => {
						res = JSON.parse(res)
						if (res.errno === 200) {
							if (this.picUrls[this.index] === undefined) {
							  this.picUrls[this.index] = [];
							}
							this.picUrls[this.index].push(res.data.url);
							console.log(res.data.url)
							this.$forceUpdate();
						}else{
							console.log("上传失败",res);
						}
					});
				}
			},
			uploadFilePromise: function(url) {
				return new Promise(function(resolve, reject) {
					uni.uploadFile({
						url: api.StorageAdd,
						filePath: url,
						name: 'file',
						header: {
							'Content-Type': 'multipart/form-data',
							'ZX-Shopping-Token': uni.getStorageSync('token')
						},
						success: function(res) {
							resolve(res.data)
						}
					});
				})
			},
			setIndex(index){
				this.index = index
				console.log("index:",index)
			},
			
			// 关键词，有则删除，无则添加
			toggleKeyword: function(index, word) {
				if(this.keywords[index] === undefined){
					this.keywords[index] = []
				}
				const wordIndex = this.keywords[index].indexOf(word)
				if(wordIndex === -1) {
					// 当keywords中不包含该word时，添加word
					this.keywords[index].push(word)
				} else {
					// 当keywords中包含该word时，移除该word
					this.keywords[index].splice(wordIndex, 1)
				}
				this.$forceUpdate();
			},
			// 判断是否有该关键词
			hasWord(index,word){
				if(this.keywords[index] === undefined){
					this.keywords[index] = []
				}
				const wordIndex = this.keywords[index].indexOf(word)
				if(wordIndex === -1) {
					return false
				} else {
					return true
				}
			},
			// 删除图片
			async deletePic(event) {
				console.log('删除',event)
				for (let i = 0;i<this.goodsLen;i++){
					if(event.file == this.picUrls[i][event.index]){
						this.picUrls[i].splice(event.index, 1)
						this.$forceUpdate();
						const index = event.file.indexOf('fetch/');
						const result = event.file.substring(index + 'fetch/'.length);
						console.log(result);
						req.request(api.StorageDelete,{key:result},'POST')
						return ;
					}
				}
				
				
			},
					
			// 提交评价
			async submit() {
				const that = this
				if (that.isAllEvaluateCompleted()) {
					uni.showModal({
					    title: '提示',
					    content: '是否提交评价？',
						async success (res) {
							if (res.confirm) {
								for (let i = 0; i < that.goodsLen; i++) {
									const comment = {
										goodsSn: that.goods[i].goodsSn,
										userId: uni.getStorageSync("userId"),
										star: that.star[i],
										keywords: that.keywords[i].toString(),
										content: that.content[i],
										hasPicture: 0,
										picUrls: []
									}
									if (comment.content == undefined) {
										comment.content = ''
									}
									if (that.picUrls[i] !== undefined && that.picUrls[i].length > 0) {
										comment.hasPicture = 1
										comment.picUrls = that.picUrls[i]
									}
									await that.addComment(comment);
									
								}
								//修改订单状态，返回订单页面
								req.request(api.OrderOver, {id: that.orderId},'POST')
								uni.navigateBack({
								  delta: 1
								});
							}
						}
					});
				} else {
					// 有未填写的评价
					uni.showToast({
						title: '部分商品未评分',
						icon: 'none'
					});
				}
			},
			// 检查是否填写了所有评价
			isAllEvaluateCompleted() {
				console.log('star:',this.star)
				for (let i = 0, len = this.goods.length; i < len; i++) {
					if (this.star[i] <= 0 || this.star[i] === undefined) {
						// 如果有一个商品的评价没填写，则返回false
						return false;
					}
				}
				// 所有商品的评价都填写了，则返回true
				return true;
			},
			
			async addComment(comment) {
				try {
					const res = await req.request(api.CommentAdd, comment,'POST')
					console.log('comment',comment)
					if (res.errno === 200) {
						// 提交成功，返回订单页面
					}else{
						
					}
				} catch(e){
					
				}
				
			},
			
		}
	}
</script>

<style>
	@import 'comment.css';
</style>
