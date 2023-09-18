<template>
	<page-meta :page-style="spanStyle">
	<view class="container">

		<template>
			<u-sticky>
				<u-subsection :list="tablist" :current="order.curNow" @change="sectionChange" fontSize="15">
				</u-subsection>
			</u-sticky>
		</template>

		<view class="solo">

		</view>
		<view class="no-order" v-if="orderList.length <= 0">
			<view class="c">
				<text>您还没有这类订单</text>
			</view>
		</view>
		<!-- 订单列表 -->
		<view class="orders">
			<view v-for="(item, index) in orderList" :key="item.id" >
				<view class="solo2" @click="godetail(item.id)">
					<view class="title_coll">
						<text class="coll_txt1">
							订单编号:{{item.orderSn}}
						</text>
						<text class="coll_txt2">{{getOrderStatus(item.orderStatus)}}</text>
					</view>
				</view>
				<view @click="godetail(item.id)" class="goodsPic">
					<view class="goods" v-for="(gitem, index1) in item.orderGoodsList" :key="gitem.id">
						<view class="img">
							<image :src="gitem.picUrl" background-size="contain"></image>
						</view>
					</view>
				</view>
				<view class="b">
					<view class="l_m">
						<view class="l">下单时间:{{item.orderTime}}</view>
						<view class="m" v-if="item.orderStatus == 301">预计送达时间：{{item.appointTime}}</view>
					</view>
					<view class="c">
						<view class="r">
							共件<text>{{item.num}}</text>商品,合计：<text>￥{{ item.orderPrice }}</text>
						</view>
						<view class="k">
							<view class="btn">
								<u-button v-if="item.orderStatus == 301" color="#122047" @click="confirm(item.id)"
									size="small" text="确认收货">
								</u-button>
								<u-button class="pay" v-if="item.orderStatus == 101" color="#122047" plain="true"  @click="showPayPopup(item.id)"
										size="small" text="去支付">
								</u-button>
								<u-button class="pay" v-if="item.orderStatus == 101" color="#122047" plain="true"  @click="deleteOrder(item.id)"
										size="small" text="取消订单">
								</u-button>
								<u-button v-if="item.orderStatus == 401 || item.orderStatus == 402 || item.orderStatus == 501" color="#122047" plain="true"  @click="evaluate(item.id)"
										size="small" text="评价一下">
								</u-button>
							</view>
							</u-row>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 支付方式弹窗 -->
		<view>
		    <u-popup :show="payPopup">
				<view>
					<view v-for="(item, index) in payList" :key="index">
						<view style="margin-top: 20rpx;">
							<text @click="selectPay(index)">{{ item }}</text>
							<u-line />
						</view>
					</view>
				</view>
		    </u-popup>
		</view>
		
	</view>
	</page-meta>
</template>

<script>
	const api = require('@/utils/api.js')
	const req = require('@/utils/request.js')
	const util = require('@/utils/utils.js')
	export default {
		data() {
			return {
				orderList: [],
				tablist: ["全部", "待支付", "待收货","待评价"],
				spanStyle:"overflow:auto",//动态设置是否能滚动
				order: {
					userId: uni.getStorageSync("userId"),
					curNow: 0
				},
				payPopup: false,
				payOrderId: 0,
				payList: [
					'微信支付',
					'支付宝支付',
					'花呗支付',
					'取消支付（支付失败）'
				],
			}

		},
		onLoad(options) {
			
		},
		onReachBottom() {
			uni.showToast({
				title: '没有更多订单了',
				icon: 'none',
				duration: 2000
			});
			return false;
		},
		onShow: function() {
			// console.log("订单列表onShow");
			// 页面显示
			this.getHistory();
		},
		methods: {
			getHistory() {
				var that = this
				uni.showLoading({
					title: '查询中....',
					mask: true
				})
				req.request(api.OrderList,that.order).then(res => {
					console.log("获取订单列表", res)
					uni.hideLoading()
					if (res.errno == 200) {
						that.orderList = res.data.list
					}else {
						util.showErrorToast(res.errmsg,'none')
					}
				}).catch(err => {
					console.log("获取订单列表失败", err)
					uni.hideLoading()
				})
			},
			// 确认收货
			confirm(id) {
				var that = this
				uni.showModal({
				    title: '提示',
				    content: '是否确认收货？',
				    success: function (res) {
						if (res.confirm) {
							req.request(api.OrderConfirm, {id: id},'POST').then(function(res) {
								if (res.errno === 200) {
									util.showErrorToast('已确认收货','none');
									that.getHistory();
								}else {
									util.showErrorToast(res.errmsg,'none')
								}
							});
						}
				    }
				});
			},
			// 取消订单
			deleteOrder(id){
				var that = this
				uni.showModal({
				    title: '提示',
				    content: '是否取消订单？',
				    success: function (res) {
						if (res.confirm) {
							req.request(api.OrderDelete, {id: id},'POST').then(function(res) {
								if (res.errno === 200) {
									util.showErrorToast('已取消','none');
									that.getHistory();
								}else {
									util.showErrorToast(res.errmsg,'none')
								}
							});
						}
				    }
				});
			},
			// 去评价，跳转评价页面
			evaluate(id){
				uni.navigateTo({
					url: '/pagesB/comment/comment?id=' + id
				})
			},
			// 立即支付
			selectPay(index){
				var that = this
				that.payPopup = false
				if(index == 3){
					util.showErrorToast('支付失败！','none');
					return ;
				}
				req.request(api.OrderPay, {id: that.payOrderId},'POST').then(function(res) {
					if (res.errno === 200) {
						util.showErrorToast('支付成功！','none');
						that.getHistory();
					}else {
						util.showErrorToast(res.errmsg,'none')
					}
				});
			},
			showPayPopup(id){
				this.payOrderId = id
				this.payPopup = true
			},
			godetail(id) {
				uni.navigateTo({
					url: '/pagesB/orderDetail/orderDetail?id=' + id
				})
			},
			// 切换标题
			sectionChange(index) {
				var that = this
				// console.log("tab切换",index)
				that.order.curNow = index
				that.getHistory()
			},
			getOrderStatus(e){
				switch (e) {
				    case 101:
						return "待支付";
				    case 102:
						return "已取消";
				    case 103:
						return "商家取消";
				    case 201:
						return "待发货";
				    case 202:
						return "申请退款中";
				    case 203:
						return "退款成功";
				    case 301:
						return "已发货";
				    case 401:
						return "已收货";
				    case 402:
						return "系统收货";
				    case 501:
						return "待评价";
					case 502:
						return "已完成";
				    default:
						return "订单错误";
				}
			},
		}
	}
</script>

<style>
	@import 'history.css';
</style>
