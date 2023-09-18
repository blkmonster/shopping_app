<template>
	<view>
		<u-sticky>
			<view class="keyword-container">
				<view v-for="(item, index) in keyWords" class="keyword-item" :class="[keywordIndex==index ? 'keyword-item1' : '']" @click="selectKeyword(index)">{{item.keyword}}</view>
			</view>
		</u-sticky>
		
		<view v-if="commentList.length <= 0">暂时没有评论</view>

		<view v-for="(comment, index) in commentList" :key="index" style="margin: 20rpx;">
			<u-row>
				<u-col span="2">
					<image :src="userInfos[index].avatar" style="width: 100rpx; height: 100rpx;border-radius: 50%;"/>
				</u-col>
				<u-col span="6">
					<view>{{ userInfos[index].nickName }}</view>
					<u-rate :count="5" v-model="comment.star" active-color="#ffff7f" size="15"></u-rate>
				</u-col>
				<u-col span="4">
					<view style="display: flex;justify-content: flex-end">{{changeTime(comment.addTime)}}</view>
				</u-col>
			</u-row>
			<view style="margin-top: 20rpx;margin-bottom: 20rpx;">{{ comment.content }}</view>
			<view v-if="comment.hasPicture == 1">
				<image v-for="(image, i) in comment.picUrls" :key="i" :src="image" style="width: 250rpx; height: 250rpx;"/>
			</view>
			<u-line></u-line>
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
				keyWords:[],
				commentList: [],
				userInfos: [],
				goodsSn: '',
				page: 1,
				limit: 10,
				keywordIndex: 5,
				isAdd: false,
			}
		},
		onLoad(option) {
			// console.log("传递goodsSn值", option.goodsSn)
			var that = this
			that.goodsSn = option.goodsSn
			that.getComments()
			that.getKeyword()
		},
		onReachBottom() {
			this.page = this.page + 1
			this.isAdd = true
			this.getComments();
		},
		methods: {
			getComments(params){
				var that = this
				if (params == undefined){
					var params = {
						goodsSn: that.goodsSn,
						page: that.page,
						limit: that.limit
					}
				}
				req.request(api.CommentList, params).then(res => {
					if (res.errno == 200) {
						if (res.data.list.length == 0){
							uni.showToast({
								title: '没有更多评价了',
								icon: 'none',
								duration: 2000
							});
						} else {
							if (that.isAdd){
								that.commentList = that.commentList.concat(res.data.list)
								that.getUserInfo()
								that.isAdd = false
							}else {
								that.commentList = res.data.list
								that.getUserInfo()
							}
							
						}
					}
				}).catch(err => {
					console.log("商品详情信息返回错误", err)
				})
			},
			getKeyword() {
				var that = this
				req.request(api.KeywordList,{value: 3}).then(res => {
					console.log("关键字",res)
					that.keyWords = res.data.list
				}).catch(err => {
					console.log("数据接收失败", err)
				})
			},
			async getUserInfo(){
				let that = this
				that.userInfos = []
				for (let i = 0; i < that.commentList.length; i++) {
					const params = {
						userId: that.commentList[i].userId
					}
					await req.request(api.UserInfo, params).then(res => {
						console.log("UserInfo", res)
						if (res.errno == 200) {
							that.userInfos.push(res.data)
						}
					}).catch(err => {
						console.log("商品详情信息返回错误", err)
					})
				}
			},
			changeTime(value){
				return (value.split("T")[0])
			},
			selectKeyword(index){
				this.keywordIndex = index
				this.page = 1
				this.limit = 10
				switch (index) {
				    case 0:
						var params = {
							goodsSn: this.goodsSn,
							hasPicture: 1,
							page: 1,
							limit: 10
						};
						break;
				    case 1:
						break;
				    case 2:
						var params = {
							goodsSn: this.goodsSn,
							star: 5,
							page: 1,
							limit: 10
						};
						break;
				    case 3:
						var params = {
							goodsSn: this.goodsSn,
							star: 1,
							page: 1,
							limit: 10
						};
						break;
				    default:
						;
				}
				this.commentList = []
				this.getComments(params)
			}
		}
	}
</script>

<style>
	@import './commentDetail.css';
</style>