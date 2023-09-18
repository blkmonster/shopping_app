<template>
	<view>
		<u-navbar @leftClick="back">
			<view class="u-nav-slot nvbg" slot="center">
				<u-search placeholder="请输入搜索内容" bgColor="#ffffff" v-model="keyword" @search="searchValue"
					@focus="getipnut" @blur="lost" :showAction="false" :clearabled="true"></u-search>
			</view>
		</u-navbar>
		<!-- 搜索历史 -->
		<view class="history-search">
			<view class="history-line">
				<view class="title">历史搜索</view>
				<view class="icon"><u-icon name="trash" size="22" @click="deleteHistory"></u-icon></view>
			</view>
			<view class="content">
				<view v-for="(item, index) in searchHistory" class="item" :key="index" @click="clickword(item)">
					{{ item }}
				</view>
			</view>
		</view>
		<view class="keyword-search">
			<view class="history-line">
				<view class="title">搜索推荐</view>
			</view>
			<u-grid :border="false" col="4">
				<u-grid-item v-for="(item,index) in hotKeywordList" :key="index">
					<view class="grid">
						<u-button size="small" :hairline="true" :plain="true" :text="item.keyword"
							@click="clickword(item.keyword)" />
					</view>
				</u-grid-item>
			</u-grid>
		</view>
		<block>
			<scroll-view scroll-y class="right-box">
				<view class="page-view" v-if="pageflag">
					<!-- 有商品数据 -->
					<view class="class-item" v-if="shopflag">
						<view class="item-container">
							<view class="thumb-box" v-for="(item, index1) in goodsList" :key="index1">
								<view @click="gowu(item.goodsSn)">
									<u-row>
										<u-col span="4">
											<image class="item-menu-image" :src="item.picUrl"></image>
										</u-col>
										<u-col span="7" offset="1">
											<view class="line-2">{{item.name}}</view>
											<view class="line-3">{{item.keywords}}</view>
											<view class="line-3">库存：{{item.num}}</view>
											<u-row>
												<u-col span="9">
													<view v-if="vip" class="line-5">会员特价：￥{{item.vipPrice}}/{{item.unit}}</view>
													<view class="line-4">￥{{item.price}}/{{item.unit}}</view>
												</u-col>
												<u-col span="3" @tap.stop="addCart(item)">
													<u-icon name="shopping-cart" color="#00ff7f" size="28"></u-icon>
												</u-col>
											</u-row>
										</u-col>
									</u-row>
								</view>
							</view>
						</view>
					</view>
					<!-- 无商品数据 -->
					<view class="txt2" v-if="!shopflag">
						<text>搜索商品结果为空</text>
					</view>
				</view>
			</scroll-view>
		</block>
	</view>
</template>

<script>
	const api = require('@/utils/api.js')
	const req = require('@/utils/request.js')
	export default {
		data() {
			return {
				keyword: '',
				iskeyword: false,
				hotKeywordList: [],
				goodsList: [],
				shopflag: true,
				pageflag:false,
				searchHistory: [],
			}
		},
		onLoad() {
			// this.getSearchKeyword();
		},
		onShow() {
			this.getSearchKeyword();
			// 读取历史搜索记录
			let searchHistory = uni.getStorageSync('searchHistory');
			this.searchHistory = searchHistory ? searchHistory : [];
		},
		methods: {
			getSearchKeyword() {
				var that = this
				req.request(api.KeywordList,{value: 1}).then(res => {
					console.log("关键字",res)
					that.hotKeywordList = res.data.list
				}).catch(err => {
					console.log("数据接收失败", err)
				})
			},
			back() {
				uni.switchTab({
					url: "/pages/home/home"
				})
			},
			getipnut() {
				var that = this
				that.iskeyword = true
			},
			lost() {
				var that = this
				that.iskeyword = false
			},
			searchValue(value) { //点击搜索
				if (value != '') {
					console.log("搜索", value)
					this.dosearch(value, false)
					var params = {
						keyword: value,
						userId: uni.getStorageSync("userId")
					};
					req.request(api.AddHistory, params, 'POST')
					if (!this.searchHistory.includes(this.keyword)) {
						// 保存搜索结果到本地
						this.searchHistory.push(this.keyword);
						uni.setStorageSync('searchHistory', this.searchHistory);
					}
				}
			},
			clickword(keyword) { //关键字点击触发搜索
				var that = this
				that.keyword = keyword
				that.dosearch(keyword, true)
			},
			dosearch(value, flag) { //开始搜索
				// console.log("验证是否为关键字",value)
				var that = this
				var params = {
					keyword: value
				};
				if(value!=''){
					req.request(api.GoodsListByKeyword, params).then(res => {
						console.log("搜索返回结果", res)
						if (res.errno == 200) {
							that.goodsList = res.data.list
							// console.log(that.goodsList.length)
							if (that.goodsList.length > 0) {
								that.shopflag = true
								that.pageflag = true
							} else {
								that.shopflag = false
								that.pageflag = true
							}
						}
						// console.log(that.shopflag)
					}).catch(err => {
						console.log("搜索返回失败", err)
					})
				}
			},
			gowu(goodsSn) {
				uni.navigateTo({
					url: '/pagesB/goodshop/goodshop?goodsSn=' + goodsSn
				})
			},
			addCart(goods){
				var that = this
				var params = {
					userId: uni.getStorageSync("userId"),
					goodsSn: goods.goodsSn,
					goodsName: goods.name,
					price: goods.price,
					unit: goods.unit,
					picUrl: goods.picUrl,
				}
				console.log("加入购物车参数：", params);
				req.request(api.CartAdd, params, 'POST').then(res => {
					console.log("加入购物车返回的值：", res);
					if(res.errno ==200){
						utils.showErrorToast('加入购物车成功','none')
					}
				}).catch(err => {
					console.log("加入购物车返回失败值：", err);
				})
			},
			deleteHistory() {
				this.searchHistory = []
				uni.setStorageSync('searchHistory', this.searchHistory);
			},

		}
	}
</script>

<style>
	@import './search.css';
</style>
