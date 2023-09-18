<template>
	<view class="container">

		<view class="u-menu-wrap">
			<!-- 商品展示 -->
			<view class="page-view">
				<!-- 有商品数据 -->
				<view class="class-item" v-if="goodsTotal > 0">
					<u-swipe-action>
						<u-swipe-action-item
							:options="options1"
							v-for="(item, index) in shopList"
							:key="item.id"
							:name="item.goodsSn"
							@click = "deleteCollect"
						>
							<view class="thumb-box">
								<view @click="gowu(item.goodsSn)">
									<u-row>
										<u-col span="4">
											<image class="item-menu-image" :src="item.picUrl"></image>
										</u-col>
										<u-col span="7" offset="1">
											<view class="line-2">{{item.name}}</view>
											<view class="line-3">{{item.keywords}}</view>
											<u-row>
												<u-col span="9">
													<!-- <view class="line-5">V￥{{item.vipPrice}}/{{item.unit}}</view> -->
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
						</u-swipe-action-item>
					</u-swipe-action>
				</view>
				<!-- 无商品数据 -->
				<view class="txt2">
					<text v-if="goodsTotal == 0">没有收藏的商品</text>
				</view>
			</view>
				
			
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
				shopList:[],
				goodsTotal: 0,
				options1: [{
					text: '删除',
					style: {
						backgroundColor: '#f56c6c'
					}
				}],
				page: 1,
				limit: 10,
				isAdd: false,
			};
		},
		onLoad: function(options) {
			
		},
		onShow: function(options) {
			this.getGoodsByCollect();
		},
		onUnload: function() {
			// 页面关闭
			// console.log("页面关闭")
		},
		onHide: function() {
			// 页面隐藏
		},
		onReachBottom() {
			this.page = this.page + 1
			this.isAdd = true
			this.getGoodsByCollect();
		},
		methods: {
			//获取商品
			getGoodsByCollect: function() {
				let that = this;
				var params = {
					page: that.page,
					limit: that.limit,
					userId: uni.getStorageSync("userId")
				}
				req.request(api.CollectList,params).then(function(res) {
					if (res.errno === 200) {
						console.log("收藏商品信息", res)
						if (res.data.list.length <= 0){
							uni.showToast({
								title: '没有更多商品了',
								icon: 'none',
								duration: 2000
							});
						} else {
							if (that.isAdd){
								that.shopList = that.shopList.concat(res.data.list)
								that.isAdd = false
							}else {
								that.shopList = res.data.list
								that.goodsTotal = res.data.total
							}
							
						}	
					}
				});
			},
			gowu(goodsSn) {
				uni.navigateTo({
					url: '/pagesB/goodshop/goodshop?goodsSn=' + goodsSn
				})
			},
			//添加购物车
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
				// console.log("加入购物车参数：", params);
				req.request(api.CartAdd, params, 'POST').then(res => {
					console.log("加入购物车返回的值：", res);
					if(res.errno ==200){
						utils.showErrorToast('加入购物车成功','none')
					}
				}).catch(err => {
					console.log("加入购物车返回失败值：", err);
				})
			},
			deleteCollect(e){
				let that = this
				//确认删除
				uni.showModal({
				    title: '提示',
				    content: '是否删除该收藏商品？',
				    success: function (res) {
						if (res.confirm) {
							// console.log(e)
							req.request(api.CollectDelete,{goodsSn:e.name},'POST').then(res => {
								console.log("res:", res)
								if (res.errno == 200) {
									utils.showErrorToast("删除成功！");
									that.page = 1
									that.getGoodsByCollect();
								} else {
									utils.showErrorToast(res.errmsg, 'none');
								}
							}).catch(err => {
								console.log("请求失败", err)
							})
						} 
					}
				});
			},
		}
	};
</script>
<style>
	@import './collect.css';
</style>
