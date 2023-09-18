<template>
	<view>
		<!-- 搜索框 -->
		<u-sticky>
			<view class="search_bg">
				<u-search placeholder="请输入搜索内容" disabled="false" @click="gosearch" bgColor="#ffffff" height="40"
					v-model="keyword"></u-search>
			</view>
		</u-sticky>
		
		<!-- 推荐轮播图 -->
		<u-swiper :list="recommendList" indicator circular></u-swiper>
		
		<!-- 商品类目 -->
		<view class="container1">
			<u-scroll-list :indicator="false" class="u-scroll-list">
				<template v-for="(item, index) in categoryList">
					<view class="categoryL1 category-grid" v-show="(index % 2) === 0">
						<navigator class="category-item" :key="item.name"
							url="/pages/category/category" open-type="switchTab" @click="setUtils(item.id,index)">
							<image class="category-img" :src="item.iconUrl"></image>
							<text class="category-name">{{item.name}}</text>
						</navigator>
						<navigator class="category-item" v-if="categoryList[index + 1]" :key="categoryList[index + 1].name" 
							url="/pages/category/category" open-type="switchTab" @click="setUtils(categoryList[index + 1].id,index+1)">
							<image class="category-img" :src="categoryList[index + 1].iconUrl"></image>
							<text class="category-name">{{categoryList[index + 1].name}}</text>
						</navigator>
					</view>
				</template>
			</u-scroll-list>
		</view>

		<!-- 商品展示 -->
		<view class="container">
			<view class="grid-container">
				<view v-for="(item, index) in goodsList" :key="index" class="grid-item" @tap="gowu(item.goodsSn)">
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
			</view>
		</view>
		
	</view>
</template>

<script>
	const api = require('@/utils/api.js')
	const req = require('@/utils/request.js')
	const util = require('@/utils/utils.js')
	export default {
		data() {
			return {
				keyword: '',
				goodsList: [],
				categoryList: [],
				recommendList: [],
				page: 1,
				limit: 10,
				isAdd: false
			
			}
		},
		onLoad() {
		
		},
		onShow() {
			this.page = 1
			this.goodsList = []
			this.getAdList();
			this.getCategoryL1();
			this.getGoodsByCategory();
		},
		onReachBottom() {
			this.page = this.page + 1
			this.isAdd = true
			this.getGoodsByCategory();
		},
		methods: {
			//获取轮播图广告
			getAdList() {
				var that = this
				req.request(api.AdList,{position: 1}).then(res => {
					console.log("广告",res)
					that.recommendList = res.data.list
				}).catch(err => {
					console.log("数据接收失败", err)
				})
			},
			//获取商品类目类目
			getCategoryL1: function() {
				let that = this;
				req.request(api.CategoryL1).then(function(res) {
					if (res.errno === 200) {
						// console.log("商品一级类目信息", res)
						that.categoryList = res.data.list
					}
				});
			},
			//获取商品
			getGoodsByCategory: function() {
				let that = this;
				uni.showLoading({
					title: '加载中....',
					mask: true
				})
				var params = {
					userId: uni.getStorageSync("userId"),
					page: that.page,
					limit: that.limit
				}
				req.request(api.GoodsList,params).then(function(res) {
					console.log("商品信息", res)
					if (res.errno === 200) {
						if (res.data.list == null){
							uni.showToast({
								title: '没有更多商品了',
								icon: 'none',
								duration: 2000
							});
						} else {
							if (that.isAdd){
								that.goodsList = that.goodsList.concat(res.data.list)
								that.isAdd = false
							}else {
								that.goodsList = res.data.list
							}
							
						}	
					}
				});
				uni.hideLoading()
			},
			gowu(goodsSn) {
				uni.navigateTo({
					url: '/pagesB/goodshop/goodshop?goodsSn=' + goodsSn
				})
			},
			gosearch() {
				uni.navigateTo({
					url: '/pagesB/search/search'
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
			setUtils(id,index){
				util.id = id
				util.index = index
			}

		}
	}
</script>

<style>
	@import'home.css';
</style>
