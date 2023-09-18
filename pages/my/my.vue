<template>
	<view>
		<view class="no-login" v-if="!hasLogin">
			<view class="c">
				<view class="imagesize logo">
					<!-- <image class="in-image" :src="gapLogoPicUrl"></image> -->
				</view>
				<view class="imagesize">
					<image class="in-image" :src="noLoginPicUrl"></image>
				</view>
				<text>未登录</text>
				<text class="tip">登录后访问个人信息!</text>
				<button @tap="goLogin">去登录</button>
			</view>
		</view>
		<view v-else class="login">
			<view class="info">
				<view class="s">
					<u-row>
						<u-col span="3">
							<image :src="avatarUrl"></image>
						</u-col>
						<u-col>
							<view class="storeInfo">
								<view>
									<text>{{nickName}}</text>
								</view>
							</view>
						</u-col>
					</u-row>
				</view>
			</view>
			<view class="click">
				<view class="c">
					<u-cell-group :border="false">
						<view class="cel">
							<u-cell @click="history" :border="false" :isLink="true" arrow-direction="left" title="历史订单" />
						</view>
						<view class="solo"></view>
						<view class="cel">
							<u-cell @click="address" :border="false" :isLink="true" arrow-direction="left" title="收货地址" />
						</view>
						<view class="solo"></view>
						<view class="cel">
							<u-cell @click="collect" :border="false" :isLink="true" arrow-direction="left" title="我的收藏" />
						</view>
						<view class="solo"></view>
						<view class="cel">
							<u-cell @click="loginout" :border="false" :isLink="true" arrow-direction="left" title="退出登录" />
						</view>
					</u-cell-group>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	const api = require('@/utils/api.js')
	const req = require('@/utils/request.js')
	const util = require('@/utils/utils.js')
	const app = getApp();
	export default {
		data() {
			return {
				// storeInfo: null,
				hasLogin: false,
				noLoginPicUrl: '/static/image/noLogin.jpg',
				gapLogoPicUrl: '/static/image/logo.png',
				Show:false,
				vae: '',
				vae2: '',
				seteye: true,
				seteye2: true,
				eye_modle: 'eye-off',
				eye_modle2: 'eye-off',
				nickName: '',
				avatarUrl: '',
			}
		},
		onLoad() {
			this.hasLogin = uni.getStorageSync("loginstatus")
		},
		onShow() {
			var that = this
			that.hasLogin = uni.getStorageSync("loginstatus")
			// that.storeInfo = uni.getStorageSync("storeInfo")
			// console.log("店铺相关信息", that.storeInfo)
			if(true){
				that.nickName = uni.getStorageSync("nickName")
				that.avatarUrl = uni.getStorageSync("avatarUrl")
			}
		},
		methods: {
			goLogin() {
				uni.navigateTo({
					url: '/pagesB/accountLogin/accountLogin'
				});
			},
			history() {
				uni.navigateTo({
					url: '/pagesB/history/history'
				})
			},
			address() {
				uni.navigateTo({
					url: '/pagesB/address/address'
				})
			},
			collect() {
				uni.navigateTo({
					url: '/pagesB/collect/collect'
				})
			},
			loginout() {
				var that = this;
				uni.showModal({
					title: '',
					confirmColor: '#b4282d',
					content: '退出登录？',
					success: function(res) {
						if (!res.confirm) {
							return;
						}

						req.request(api.AuthLogout, {}, 'POST');
						app.globalData.hasLogin = false;
						uni.setStorageSync('loginstatus', false);
						uni.removeStorageSync('token');
						uni.removeStorageSync('userInfo');
						// 清空手机号码的本地存储
						uni.removeStorageSync("userTelephone");
						uni.removeStorageSync('userId');
						uni.removeStorageSync('nickName');
						uni.removeStorageSync('avatarUrl');
						that.storeInfo = null;
						uni.reLaunch({
							url: '/pages/home/home'
						});
					}
				});
			},
			cance() {
				this.Show = false
				this.vae = ''
				this.vae2 = ''
			},
		}
	}
</script>

<style>
	@import './my.css';
</style>
