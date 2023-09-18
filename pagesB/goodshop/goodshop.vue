<template>
	<view>
		<view>
			<swiper class="goodsimgs" :indicator-dots="true" :autoplay="true" interval="3000" duration="500">
				<!-- 从商品规格里取 -->
				<swiper-item v-for="(item, index) in goods.gallery" :key="index">
					<image :src="item" class="imgsrc" mode="aspectFit"></image>
				</swiper-item>
			</swiper>
			<u-line />
			<view class="goodsInfo">
				<view class="txt5">
					<!-- <text class="txt1">VIP:￥{{goods.vipPrice}}&ensp;/{{goods.unit}}</text> -->
					<text class="txt2">￥{{goods.price}}</text>
				</view>
				<view class="txt1"><text>{{goods.name}}</text></view>
				<view class="txt4"><text>库存：{{goods.num}}</text></view>
				<view class="txt4"><text>{{goods.brief}}</text></view>
			</view>
		</view>
		<u-line />
		
		<!-- 评价 -->
		<view @click="gowu()" class="comment">
			<view class="left">
				<text class="title">评价</text>
			</view>
			<view class="right">
				<!-- <text class="title">好评率</text> -->
				<u-icon name="arrow-right"></u-icon>
			</view>
		</view>
		<u-line />
		
		<!-- 详情 -->
		<view style="font-size: 40rpx;font-weight: 1000;margin: 20rpx;">详情</view>
		<view style="margin-bottom: 200rpx;">
			<u-parse :content="goods.detail"></u-parse>
		</view>

		<view class="bottom-btn">
			<view class="l l-cart">
				<view class="box">
					<view class="u-page__tag-item">
						<u-badge numberType="overflow" max="99" :value="cartGoodsCount"></u-badge>
					</view>
					<image class="customerPic" src="/static/image/cartImg.png" background-size="cover"
						@tap="openCartPage" />
				</view>
			</view>
			<view class="icon-heart">
				<view class="box">
					<u-icon v-if="!heart" name="heart" size="28" @click="collect"></u-icon>
					<u-icon v-if="heart" name="heart-fill" size="28" color="#ff5500" @click="collect"></u-icon>
				</view>
			</view>
			<view class="r" @tap="docart" v-if="!soldout">加入购物车</view>
			<view class="n" v-if="soldout">商品已售空</view>
		</view>
		
		<!-- 推荐商品弹窗弹框 -->
		<view>
			<u-popup :show="recommendShow" @close="close">
				<view class="grid-container">
					<view class="recommend-title">相似商品</view>
					<u-scroll-list :indicator="false">
						<view v-for="(item, index) in recommendList" :key="index" class="grid-item" @tap="goGoods(item.goodsSn)">
							<image class="goods-img" :src="item.picUrl"></image>
							<view class="goods-info">
								<view class="goods-name">{{ item.name }}</view>
								<view class="goods-desc">{{ item.keywords }}</view>
								<u-row>
									<u-col span="9">
										<view class="goods-price">￥{{ item.price }}</view>
									</u-col>
									<u-col span="3" @tap.stop="addCart(item)">
										<u-icon name="shopping-cart" color="#00ff7f" size="28"></u-icon>
									</u-col>
								</u-row>
							</view>
						</view>
					</u-scroll-list>
				</view>
			</u-popup>
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
				soldout: false,
				heart: false,
				goodsSn: '',
				goods: [],
				unit: '',
				cartGoodsCount:0,
				recommendShow: false,
				recommendList: [],
			}
		},
		onLoad(option) {
			console.log("传递goodsSn值", option.goodsSn)
			var that = this
			that.goodsSn = option.goodsSn
			that.GoodsDetail(option.goodsSn)
		},
		methods: {
			// 获取商品详情
			GoodsDetail(goodsSn) {
				var that = this
				var params = {
					goodsSn: goodsSn
				}
				req.request(api.GoodsDetail, params).then(res => {
					// console.log("商品详情信息", res)
					that.goods = res.data
					// console.log("that.content", that.content)
					if (res.data.num <= 0) {
						uni.showToast({
							title: "没有库存",
							icon: 'none'
						});
						that.soldout = true
					} else {
						that.soldout = false
					}
				}).catch(err => {
					console.log("商品详情信息返回错误", err)
				})
				var params1 = {
					userId: uni.getStorageSync("userId"),
					goodsSn: goodsSn
				}
				req.request(api.CartCount, params1).then(res => {
					if (res.errno === 200) {
						// console.log("购物车数量", res)
						that.cartGoodsCount = res.data
					}
				}).catch(err => {
					
				})
				req.request(api.CollectIs, params1).then(res => {
					if (res.errno === 200) {
						// console.log("是否收藏", res)
						that.heart = res.data
					}
				}).catch(err => {
					
				})
			},
			// 加入购物车
			docart() {
				var that = this
				var params = {
					userId: uni.getStorageSync("userId"),
					goodsSn: that.goods.goodsSn,
					goodsName: that.goods.name,
					price: that.goods.price,
					unit: that.goods.unit,
					picUrl: that.goods.picUrl,
				}
				console.log("加入购物车参数：", params);
				req.request(api.CartAdd, params, 'POST').then(res => {
					console.log("加入购物车返回的值：", res);
					if(res.errno ==200){
						utils.showErrorToast('加入购物车成功','none')
						that.cartGoodsCount = that.cartGoodsCount + 1
						//打开推荐商品弹窗
						that.getGoodsByCategory();
						that.recommendShow = true
					}
				}).catch(err => {
					console.log("加入购物车返回失败值：", err);
				})
			},
			openCartPage: function() {
				uni.switchTab({
					url: '/pages/cart/cart'
				});
			},
			gowu() {
				console.log("跳转评论")
				uni.navigateTo({
					url: '/pagesB/commentDetail/commentDetail?goodsSn=' + this.goodsSn
				})
			},
			goGoods(goodsSn) {
				uni.navigateTo({
					url: '/pagesB/goodshop/goodshop?goodsSn=' + goodsSn
				})
			},
			//点击收藏按钮
			collect(){
				let that = this
				if (that.heart){//取消收藏
					req.request(api.CollectDelete, {goodsSn: that.goodsSn}, 'POST').then(res => {
						if(res.errno ==200){
							that.heart = false
						}
					}).catch(err => {
						
					})
				} else {//添加收藏
					var params = {
						userId: uni.getStorageSync("userId"),
						goodsSn: that.goodsSn
					}
					req.request(api.CollectAdd, params, 'POST').then(res => {
						if(res.errno ==200){
							utils.showErrorToast('添加收藏成功！','none')
							that.heart = true
						}
					}).catch(err => {
						
					})
				}
			},
			close() {
				this.recommendShow = false
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
			//根据类目获取商品
			getGoodsByCategory: function() {
				let that = this;
				if(that.goods.categoryId != 0 && that.goods.categoryId != undefined){
					var params = {
						pid: that.goods.categoryId,
						limit: 5
					}
					req.request(api.GoodsListByCategory,params).then(function(res) {
						if (res.errno === 200) {
							// console.log("商品信息", res)
							that.recommendList = res.data.list

							const targetId = that.goods.id
							const index = that.recommendList.findIndex(item => item.id === targetId);
							if (index !== -1) {
								that.recommendList.splice(index, 1);
							}
						}
					});
				}
			},

		}
	}
</script>

<style>
	@import './goods.css';
</style>
