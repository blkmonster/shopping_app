<template>
	<view class="container">
		<!-- 未登录 -->
		<view class="no-login" v-if="!hasLogin">
			<view class="c">
				<view class="imagesize logo">
					<!-- <image class="in-image" :src="gapLogoPicUrl"></image> -->
				</view>
				<view class="imagesize">
					<image class="in-image" :src="noLoginPicUrl"></image>
				</view>
				<text>未登录</text>
				<text class="tip">登录后继续浏览购物车商品!</text>
				<button @tap="goLogin">去登录</button>
			</view>
		</view>
		<view class="login" v-else>
			<!-- 购物车为空 -->
			<view class="no-cart" v-if="cartGoods.length <= 0">
				<view class="c">
					<view class="imagesize">
						<image class="in-image" :src="noProductPicUrl"></image>
					</view>
					<text>购物车为空</text>
					<navigator class="btn" url="/pages/home/home" open-type="switchTab">前去购物</navigator>
				</view>
			</view>
			<!-- 购物车不为空 -->
			<view class="cart-view" v-else>
				<view class="checkAll">
					<checkbox-group @change="checkedAll">
						<checkbox :value="all" :checked="checkedAllStatus">
							<span class="checkAllSpan">全选</span>
							<span class="checkAllNum">（共{{ cartTotal.checkedGoodsCount }}件）</span>
						</checkbox>
					</checkbox-group>
				</view>
				<!-- 商品列表 -->
				<view class="list">
					<scroll-view :scroll-y="true" class="scrl">
						<view class="group-item">
							<view class="goods">
								<view class="item" v-for="(item, index) in cartGoods" :key="item.id">
									<u-row>
										<u-col span="1">
											<view class="u_check">
												<checkbox-group @change="checkedItem(item)">
													<checkbox :value="index" :data-item-index="index"
														:checked="item.checked" class="check"></checkbox>
												</checkbox-group>
											</view>
										</u-col>
										<u-col offset="1">
											<view class="cart-goods" @click="goGoodsShop(item.goodsSn)">
												<image class="img" :src="item.picUrl" background-size="contain"/>
												<view class="info">
													<view class="name">
														<text>{{ item.goodsName }}</text>
													</view>
													<view class="b">
														<text class="price">￥{{ item.price }}</text>
														<view class="selnum">
															<view class="cut" @tap.stop="cutNumber" :data-item-index="index">
																-</view>
															<input :value="item.number" class="number" :disabled="true" type="number" />
															<view class="add" @tap.stop="addNumber" :data-item-index="index">
																+</view>
														</view>
													</view>
												</view>
											</view>
										</u-col>
									</u-row>
									<u-line />
								</view>
							</view>
						</view>
					</scroll-view>
				</view>
				<view class="cart-bottom">
					<view class="solo">

					</view>
					<view class="total">{{ '总计：￥' + cartTotal.checkedGoodsAmount }}</view>
					<view class="action_btn_area">
						<view class="checkout" @tap="checkoutOrder">去结算({{ cartTotal.checkedGoodsCount }}件)</view>
						<!-- </view> -->
					</view>
				</view>
			</view>
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
				cartGoods: [],
				cartTotal: {
					checkedGoodsCount: 0,//选中数量
					checkedGoodsAmount: 0//选中金额
				},
				checkedAllStatus: true,
				hasLogin: false,
				noLoginPicUrl: '/static/image/noLogin.jpg',
				// gapLogoPicUrl: '/static/image/logo.png',
				noProductPicUrl: '/static/image/noCart.png',
				managePicUrl: '/static/image/manage.png',
				donePicUrl: '/static/image/done.png'
			};
		},
		onLoad: function(options) {
			// 页面初始化 options为页面跳转所带来的参数
			// console.log("登录状态",app.globalData.hasLogin)

			this.hasLogin = uni.getStorageSync("loginstatus")
		},
		onPullDownRefresh() {
			uni.showNavigationBarLoading(); //在标题栏中显示加载

			this.getCartList();
			uni.hideNavigationBarLoading(); //完成停止加载

			uni.stopPullDownRefresh(); //停止下拉刷新
		},
		onShow: function() {
			this.hasLogin = uni.getStorageSync("loginstatus")
			if (this.hasLogin) {
				this.getCartList();
			}
			// this.hasLogin = app.globalData.hasLogin

		},
		onHide: function() {
			// 页面隐藏
		},
		onUnload: function() {
			// 页面关闭
		},
		methods: {
			goLogin() {
				uni.navigateTo({
					url: '/pagesB/accountLogin/accountLogin'
				});
			},

			getCartList: function() {
				let that = this;
				var params = {
					userId: uni.getStorageSync("userId")
				}
				req.request(api.CartList,params).then(function(res) {
					if (res.errno === 200) {
						console.log("购物车信息", res)
						that.cartGoods = res.data.list,
						that.checkedAllStatus = that.isCheckedAll()
						that.getCheckedGoodsCount();
					}
				});
			},

			//判断购物车商品是否全选
			isCheckedAll: function() {
				return this.cartGoods.every(function(element, index, array) {
					if (element.checked == 1) {
						return true;
					} else {
						return false;
					}
				});
			},
			// 勾选
			checkedItem: function(item) {
				let that = this;
				req.request(
					api.CartChecked, {
						userId:uni.getStorageSync("userId"),
						checked: item.checked == 1 ? 0 : 1,
						id: item.id
					},
					'POST'
				).then(function(res) {
					if (res.errno === 200) {
						that.getCartList();
					}
				});
			},
			// 获取已选数量和金额
			getCheckedGoodsCount: function() {
				let checkedGoodsCount = 0;
				let checkedGoodsAmount = 0;
				this.cartGoods.forEach(function(v) {
					if (v.checked === 1) {
						checkedGoodsCount += v.number;
						checkedGoodsAmount += v.price * v.number;
					}
				});
				this.cartTotal.checkedGoodsCount = checkedGoodsCount;
				this.cartTotal.checkedGoodsAmount = checkedGoodsAmount;
			},
			// 全选或取消全选
			checkedAll: function() {
				let that = this;
				req.request(
					api.CartChecked, {
						checked: that.isCheckedAll() ? 0 : 1,
						userId:uni.getStorageSync("userId")
					},
					'POST'
				).then(function(res) {
					console.log("全选",res)
					if (res.errno === 200) {
						that.getCartList();
					}
				});
			},

			updateCart: function(goodsSn, number, originNumber, itemIndex) {
				let that = this;
				var params = {
					userId: uni.getStorageSync("userId"),
					goodsSn: goodsSn,
					number: number,
				}
				req.request(api.CartUpdate,params,'POST').then(function(res) {
					// console.log("更新数量返回结果：", res);
					if (res.errno == 200) {
						// 更新成功的场合，设置新的数量
						that.getCartList();
					} else {
						that.cartGoods[itemIndex].number = originNumber;
						utils.showErrorToast(res.errmsg);
						// console.log("更新失败后商品数量：" + originNumber);
					}

				});
			},

			cutNumber: function(event) {
				let itemIndex = event.target.dataset.itemIndex;
				let cartItem = this.cartGoods[itemIndex];
				let originNumber = cartItem.number;
				let number = 0
				if(cartItem.number > 1){
					this.updateCart(cartItem.goodsSn, number, originNumber,itemIndex);
				}else {
					this.deleteCart(cartItem.id);
				}
				
			},

			addNumber: function(event) {
				let itemIndex = event.target.dataset.itemIndex;
				let cartItem = this.cartGoods[itemIndex];
				let originNumber = cartItem.number;
				let number = 1
				this.updateCart(cartItem.goodsSn, number, originNumber,itemIndex);
			},

			// 去结算
			checkoutOrder: function() {
				try {
					uni.navigateTo({
						url: '/pagesB/checkout/checkout?'
					});
				} catch (e) {}
			},

			deleteCart(id) {
				let that = this;
				uni.showModal({
				    title: '提示',
				    content: '是否删除该商品？',
				    success: function (res) {
						if (res.confirm) {
							console.log(id)
							req.request(api.CartDelete, {id: id},'POST').then(function(res) {
								if (res.errno === 200) {
									utils.showErrorToast('删除成功','none');
									that.getCartList();
								}
								// that.checkedAllStatus = that.isCheckedAll()
							});
						} else if (res.cancel) {

						}
				    }
				});
			},
			goGoodsShop(goodsSn) {
				uni.navigateTo({
					url: '/pagesB/goodshop/goodshop?goodsSn=' + goodsSn
				})
			},
		}
	};
</script>
<style>
	@import './cart.css';
</style>
