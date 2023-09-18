<template>
	<view>
		<view class="form-box">
			<view class="imagesize logo">
				<!-- <image class="in-image" :src="gapLogoPicUrl"></image> -->
			</view>
			<view class="bg_user">
				<view class="form-item">
					<image class="frontImg" src="/static/image/user.png" />
					<input class="username" :value="username" @input="bindUsernameInput" placeholder="请输入账号" />
					<image src="/static/image/bdelete.jpg" v-if="username.length > 0" id="clear-username" class="clear"
						@tap.native.stop.prevent="clearInput" />
				</view>

				<view class="form-item">
					<image class="frontImg" src="/static/image/pass.png" />
					<input class="password" :value="password" password @input="bindPasswordInput" placeholder="请输入密码" />
					<image src="/static/image/bdelete.jpg" v-if="password.length > 0" id="clear-password" class="clear"
						@tap.native.stop.prevent="clearInput" />
				</view>
				<button type="primary" class="login-btn" @tap="accountLogin">登录</button>
				<!-- <button type="primary" class="login-btn" @tap="wxLogin">微信登录</button> -->
				<view style="margin-top: 100rpx;margin-left: 35vw;">
					<u-icon name="weixin-fill" color="#00d800" size="50" @click="wxLogin"></u-icon>
				</view>
				
			</view>




			<!-- <view class="form-item-text">
                <navigator url="/pages/auth/register/register" class="register">注册账号</navigator>
                <navigator url="/pages/auth/reset/reset" class="reset">忘记密码</navigator>
            </view> -->
		</view>
	</view>
</template>

<script>
	const api = require('@/utils/api.js')
	const req = require('@/utils/request.js')
	const utils = require('@/utils/utils.js')
	var app = getApp();
	export default {
		data() {
			return {
				username: '',
				password: '',
				loginErrorCount: 0,
				gapLogoPicUrl: '/static/image/logo.png',
				code:'',
			};
		},
		onLoad: function(options) {
			// 页面初始化 options为页面跳转所带来的参数
			// 页面渲染完成
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

			bindUsernameInput: function(e) {
				this.username = e.detail.value
				// console.log("用户名", this.username)
			},

			bindPasswordInput: function(e) {
				this.password = e.detail.value
				// console.log("密码", this.password)
			},

			clearInput: function(e) {
				switch (e.currentTarget.id) {
					case 'clear-username':
						this.username = ''
						break;

					case 'clear-password':
						this.password = ''
						break;

				}
			},
			// 账号密码登录
			accountLogin() {
				var that = this
				var params = {
					username: that.username,
					password: that.password
				}
				// console.log("账户信息",that.username.length)
				if (that.password.length < 1 || that.username.length == '') {
					uni.showModal({
						title: '错误信息',
						content: '请输入正确的账号和密码',
						showCancel: false
					});
					return false;
				}
				req.request(api.AuthLoginByAccount, params, "POST").then(res => {
					console.log("登录返回成功", res)
					if (res.errno == 200) {
						app.globalData.hasLogin = true;
						that.loginErrorCount = 0
						uni.setStorageSync('loginstatus', true)
						uni.setStorage({
							key: 'userInfo',
							data: res.data.userInfo
						})
						uni.setStorage({
							key: 'username',
							data: params.username
						})
						uni.setStorage({
							key: 'token',
							data: res.data.token,
							success: function() {
								uni.switchTab({
									url: '/pages/home/home'
								})
							}
						});

					} else {

						that.loginErrorCount = that.loginErrorCount + 1
						app.globalData.hasLogin = false;
						utils.showErrorToast('账户登录失败', 'none');
					}
				}).catch(err => {
					console.log("登录返回失败", err)
				})

			},
			//微信登录
			wxLogin() {
				let that = this;
				//弹出微信登录框
				uni.getUserProfile({
					desc: '用于完善用户资料', //声明获取用户信息的用途
					success(userRes) {
						console.log("userRes",userRes);
						uni.showLoading({
							title: '正在登录...',
						})
						//获取登录code
						uni.login({
							provider: 'weixin', //使用微信登录
							success: function (loginRes) {
								console.log("loginRes",loginRes);
								that.code = loginRes.code
								
								var params = {
									code: that.code,
									nickName: userRes.userInfo.nickName,
									avatarUrl: userRes.userInfo.avatarUrl
								}
								//通过code和用户信息登录
								req.request(api.LoginByWx, params, "POST").then(res => {
									console.log("参数", params)
									console.log("登录返回成功", res)
									if (res.errno == 200) {
										uni.showToast({
											icon:'success',
											title: '登录成功！',
										});
										app.globalData.hasLogin = true;
										that.loginErrorCount = 0
										uni.setStorageSync('loginstatus', true)
										uni.setStorage({
											key: 'userId',
											data: res.data.userId
										})
										uni.setStorage({
											key: 'nickName',
											data: params.nickName
										})
										uni.setStorage({
											key: 'avatarUrl',
											data: params.avatarUrl
										})
										uni.setStorage({
											key: 'token',
											data: res.data.token,
											success: function() {
												uni.switchTab({
													url: '/pages/home/home'
												})
											}
										});
									} else {
								
										that.loginErrorCount = that.loginErrorCount + 1
										app.globalData.hasLogin = false;
										utils.showErrorToast('微信登录失败', 'none');
									}
								}).catch(err => {
									console.log("登录返回失败", err)
								})
							},
							fail(){
								console.log("获取code失败");
								uni.showToast({
									icon:'error',
									title: '获取code失败！',
									duration: 2000
								});
							}
						});
						
					},
					fail() {
						uni.showModal({
							title: '警告通知',
							content: '您点击了拒绝授权,将无法正常显示个人信息,点击确定重新获取授权。',
						});
					}
				})
			},

		}
	};
</script>
<style>
	@import './accountLogin.css';
</style>
