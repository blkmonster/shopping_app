<template>
	<view class="container">
		<view class="pay-result">
			<view class="success">
				<view class="result-v">
					<!-- <image class="result-img" src="/static/image/success.png" background-size="contain"></image> -->
					<u-icon v-if="status" name="checkmark-circle-fill" color="#00e16d" size="40"></u-icon>
					<u-icon v-else name="close-circle-fill" color="#e70000" size="40"></u-icon>
				</view>
				<view v-if="status" class="msg">付款成功</view>
				<view v-else class="msg">付款失败</view>
				<view class="btns">
					<view class="btn" @click="goshoplist">查看订单</view>
					<view class="btn" @click="gohome">返回首页</view>
				</view>

			</view>
		</view>


	</view>
</template>

<script>
	const api = require('@/utils/api.js')
	const req = require('@/utils/request.js')

	var app = getApp();
	export default {
		data() {
			return {
				status: false,
			};
		},
		onLoad: function(options) {
			// 页面初始化 options为页面跳转所带来的参数
			this.status = options.sucess === '1' ? true : false
		},
		onReady: function() {},
		onShow: function() {
			// 页面显示
		},
		onHide: function() {
			// 页面隐藏
		},
		onUnload: function() {
			// 页面关闭
		},
		methods: {
			goshoplist() {
				uni.redirectTo({
					url:'/pagesB/history/history'
				})
			},
			gohome(){
				uni.switchTab({
					url:'/pages/home/home'
				})
			}

		}
	};
</script>
<style>
	@import './payResult.css';
</style>
