<template>
	<view class="container">
		<u-sticky>
			<view class="search_bg">
				<u-search placeholder="请输入搜索内容" disabled="false" @click="gosearch" bgColor="#ffffff" height="40"
					v-model="keyword"></u-search>
			</view>
		</u-sticky>
	
		<!-- 类目横向列表 -->	
		<view class="container1">
			<u-row>
				<u-col span="11">
					<u-scroll-list :indicator="false">
						<view class="category-grid">
							<view v-for="(item, index) in categoryL1" :key="index" @click="getCategoryL2(item.id,index)" class="categoryL1"
							:class="[categoryIndexL1==index ? 'categoryL1-active' : '']">
								<image :src="item.iconUrl" class="category-img"></image>
								<text class="category-name">{{item.name}}</text>
							</view>
						</view>
					</u-scroll-list>
				</u-col>
				<u-col @click="viewList">
					<view style="margin-left: 10rpx;">
						<text style="writing-mode: vertical-rl;color: #00f100;">全  部</text>
						<u-icon name="list-dot"></u-icon>
					</view>
				</u-col>
			</u-row>
		</view>
		
		<view class="u-menu-wrap">
			<!-- 二级类目 -->
			<view class="lb"></view>
			<scroll-view scroll-y  class="u-tab-view menu-scroll-view">
				<view v-for="(item,index) in categoryL2" :key="index" class="u-tab-item"
					:class="[categoryIndexL2==index ? 'u-tab-item-active' : '']" 
					:data-current="index" @tap.stop="getGoodsByCategory(item.id,index)">
					<view class="tag">
						<text class="line-1">{{item.name}}</text>
					</view>
				</view>
			</scroll-view>
			<!-- 商品展示 -->
			<block>
				<scroll-view scroll-y class="right-box" @scrolltolower="addpage" @scrolltoupper="reducepage">
					<view class="page-view">
						<!-- 有商品数据 -->
						<view class="class-item" v-if="goodsTotal > 0">
							<view v-if="item.num > 0" class="thumb-box" v-for="(item, index) in shopList" :key="index">
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
						</view>
						<!-- 无商品数据 -->
						<view class="txt2">
							<text v-if="goodsTotal == 0">该商品分类下暂无数据</text>
						</view>
					</view>
				</scroll-view>
			</block>
		</view>
		
		<!-- popup弹出层 -->
		<view>
			<u-popup :show="showPop" mode="top" closeable @close="closePop">
				<view>
					<view style="margin-top: 20rpx;">全部分类</view>
					<u-grid :border="false" col="5">
						<u-grid-item v-for="(item,index) in categoryL1" :key="index" @click="getCategoryL2(item.id,index)">
							<image :src="item.iconUrl" class="category-img" style="margin-top: 30rpx;"></image>
							<text class="category-name">{{item.name}}</text>
						</u-grid-item>
					</u-grid>
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
				categoryList: [],
				shopList:[],
				categoryL1: [],
				categoryL2: [],
				L1Total: 0,
				L2Total: 0,
				goodsTotal: 0,
				showPop: false,
				categoryIndexL1: 0,
				categoryIndexL2: 0,
			};
		},
		onLoad: function(options) {
			
		},
		onShow: function(options) {
			this.getCategoryL1();
			this.getCategoryL2(utils.id,utils.index);
		},
		onUnload: function() {
			// 页面关闭
			// console.log("页面关闭")
		},
		onHide: function() {
			// 页面隐藏
			console.log("页面隐藏")
			utils.id = 1
			utils.index = 0
		},
		methods: {
			//获取一级类目
			getCategoryL1: function() {
				let that = this;
				req.request(api.CategoryL1).then(function(res) {
					if (res.errno === 200) {
						console.log("商品一级类目信息", res)
						that.categoryL1 = res.data.list,
						that.L1Total = res.data.total
					}
				});
			},
			//根据一级类目id获取二级类目
			getCategoryL2: function(id,index) {
				let that = this;
				that.categoryIndexL1 = index
				that.categoryIndexL2 = 0
				var params = {
					pid: id
				}
				req.request(api.CategoryL2,params).then(function(res) {
					if (res.errno === 200) {
						// console.log("商品二级类目信息", res)
						that.categoryL2 = res.data.list,
						that.L2Total = res.data.total
						if(that.categoryL2.length != 0){
							that.getGoodsByCategory(that.categoryL2[0].id,0);
						}else{
							that.getGoodsByCategory(0,0);
						}
					}
				});
				that.showPop = false
			},
			//展开目录列表
			viewList(){
				this.showPop = true
			},
			closePop(){
				this.showPop = false
			},
			//根据类目获取商品
			getGoodsByCategory: function(id,index) {
				let that = this;
				that.categoryIndexL2 = index
				if(id != 0 && id != undefined){
					var params = {
						pid: id
					}
					req.request(api.GoodsListByCategory,params).then(function(res) {
						if (res.errno === 200) {
							// console.log("商品信息", res)
							that.shopList = res.data.list,
							that.goodsTotal = res.data.total
						}
					});
				} else{
					that.shopList = []
					that.goodsTotal = 0
				}
				
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
			//滚到底部
			addpage(){
				if(this.categoryIndexL2 == this.categoryL2.length-1){
					uni.showToast({
						title: '已到最底部！',
						icon: 'none',
					});
				} else {
					this.categoryIndexL2 = this.categoryIndexL2 + 1
					this.getGoodsByCategory(this.categoryL2[this.categoryIndexL2].id,this.categoryIndexL2);
				}
			},
			//滚到顶部
			reducepage(){
				if(this.categoryIndexL2 == 0){
					uni.showToast({
						title: '已到最顶部！',
						icon: 'none',
					});
				} else {
					this.categoryIndexL2 = this.categoryIndexL2 - 1
					this.getGoodsByCategory(this.categoryL2[this.categoryIndexL2].id,this.categoryIndexL2);
				}
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
		}
	};
</script>
<style>
	@import './category.css';
</style>
