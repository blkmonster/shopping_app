<template>
	<page-meta :page-style="spanStyle">
		<view class="container">
			<!-- 收货地址 -->
			<view class="address-item" @tap="selectAddress()">
				<view class="address-info">
					<view style="display:flex;">
						<text>{{address.addressDetail}}</text>
						<view v-if="address.isDefault == 1" class="address-tag">
							<u-tag text="默认" size="mini" type="warning"></u-tag>
						</view>
					</view>
					<view class="address-text">{{address.areaCode}}</view>
					<view class="address-text">{{address.name}}{{address.sex == 1 ? '先生' : '女士'}} {{address.tel}}</view>
				</view>
				<view>
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
			<u-line />

			<!-- 订单商品数据 -->
			<view class="goodsTitle">共{{ orderInfo.num }}件商品</view>
			<view class="goods-items">
				<view class="item" v-for="(item, index) in checkedGoodsList" :key="item.id">
					<view class="img">
						<image :src="item.picUrl" background-size="contain"></image>
					</view>

					<view class="info">
						<view class="t">
							<text class="name">{{ item.goodsName }}</text>
							<text class="number">x{{ item.number }}</text>
						</view>
						<view class="b">
							<text :class="item.number > item.maxNumber ? 'number2' : 'number'">
								x{{ item.number }}</text>
							<text class="price">￥{{ item.price }}</text>
						</view>
					</view>
				</view>
			</view>

			<!-- 订单金额数据 -->
			<view class="order-box">
				<view class="order-item">
					<view class="l">
						<text class="name bigWord">应付金额</text>
					</view>
					<view class="r">
						<text class="txt bigWord">￥{{ orderInfo.orderPrice }}</text>
					</view>
				</view>
				<view :class="openOrderFlg ? 'order-item' : 'openOrCloseHiden'" style="height: auto">
					<view class="orderDetail">
						<view class="l">
							<text class="name">商品金额</text>
						</view>
						<view class="r">
							<text class="txt">￥{{ orderInfo.goodsPrice }}</text>
						</view>
					</view>
				</view>
				<view :class="openOrderFlg ? 'order-item' : 'openOrCloseHiden'" style="height: auto; padding-top: 0rpx">
					<view class="orderDetail">
						<view class="l">
							<text class="name">优惠金额</text>
						</view>
						<view class="r">
							<text class="txt">￥{{ orderInfo.couponPrice }}</text>
						</view>
					</view>
				</view>
				<view :class="openOrderFlg ? 'order-item' : 'openOrCloseHiden'" style="height: auto; padding-top: 0rpx">
					<view class="orderDetail">
						<view class="l">
							<text class="name">配送费用</text>
						</view>
						<view class="r">
							<text class="txt">￥{{ orderInfo.freightPrice }}</text>
						</view>
					</view>
				</view>
				<view class="openOrClose" @tap="doOpenOrClose">
					<span class="openOrCloseSign">{{ openOrderFlg ? '-' : '+' }}</span>
					<span class="openOrCloseWord">{{ openOrderFlg ? '收起明细' : '展开更多明细' }}</span>
				</view>

			</view>

			<view class="subsect" @click="showPopup = true">
				<text class="name bigWord">送达时间</text>
				<text class="name bigWord">{{orderInfo.appointTime}}</text>
				<view style="margin-left: auto;">
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
			<!-- 选择时间弹窗 -->
			<view>
			    <u-popup :show="showPopup" @close="close">
			      <view>
			        <view v-for="(item, index) in timeList" :key="index">
						<view style="margin-top: 50rpx;">
							<text style="margin-left: 100rpx;" @click="selectTime(item)">{{ item }}</text>
							<view style="margin-top: 50rpx;margin-bottom: 50rpx;"></view>
							<u-line />
						</view>
			        </view>
			      </view>
			    </u-popup>
			</view>

			<view class="subsect">
				<text class="name bigWord">备注：</text>
				<u--input placeholder="请输入备注需求" border="surround" clearable :value = "orderInfo.message" @change="change"/>
			</view>

			<!-- 底部支付 -->
			<view class="order-total">
				<view class="orderTxt">待支付：</view>
				<view class="l">￥{{ orderInfo.orderPrice }}</view>
				<view class="r" @tap="doSubmitOrder">去下单</view>
			</view>
			<!-- 支付方式弹窗 -->
			<view>
			    <u-popup :show="payPopup" mode="center" @close="close">
					<view>
						<view v-for="(item, index) in payList" :key="index">
							<view style="margin-top: 50rpx;">
								<text style="margin-left: 100rpx;" @click="selectPay(index)">{{ item }}</text>
								<view style="margin-top: 50rpx;margin-bottom: 50rpx;"></view>
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
	const utils = require('@/utils/utils.js')

	export default {
		data() {
			return {
				checkedGoodsList: [],
				checked: false,
				openOrderFlg: false, //默认订单明细不显示
				spanStyle: "overflow:auto", //动态设置是否能滚动
				address: [],
				addressDetailId: 0,
				showPopup: false,
				payPopup: false,
				timeList: [],
				payList: [
					'微信支付',
					'支付宝支付',
					'花呗支付',
					'取消支付（支付失败）'
				],
				orderInfo:{
					userId: uni.getStorageSync("userId"),
					orderStatus: 0,
					userName: '',
					mobile: '',
					address: '',
					message: '',
					appointTime: '',
					num: 0,
					goodsPrice: 0,
					freightPrice: 0,
					couponPrice: 0,
					orderPrice: 0
				}
			};
		},
		onLoad: function(options) {

		},
		onReady: function() {
			// 页面渲染完成
		},
		onShow: function() {
			this.getCheckoutInfo();
			this.getAddress();
		},
		onHide: function() {
			// 页面隐藏
		},
		onUnload: function() {
			// 页面关闭
		},
		methods: {
			//获取已选商品信息信息
			getCheckoutInfo: function() {
				let that = this;
				var params = {
					userId: uni.getStorageSync("userId"),
					checked: 1
				}
				req.request(api.CartList, params).then(function(res) {
					// console.log("购买画面：", res);
					if (res.errno === 200) {
						that.checkedGoodsList = res.data.list,
						that.getCheckedGoodsCount()
					}
					// uni.hideLoading();
				});
			},
			//获取用户默认地址信息
			getAddress(){
				if(this.addressDetailId == 0){
					var params = {
						userId: uni.getStorageSync("userId"),
						isDefault: 1
					}
				}else {
					var params = {
						id: this.addressDetailId,
						userId: uni.getStorageSync("userId")
					}
				}
				
				req.request(api.AddressDetail,params).then(res => {
					// console.log("默认地址:", res)
					if (res.errno == 200) {
						if(res.data.id == undefined){
							utils.showErrorToast('请先填写地址！','none');
						}else {
							this.address = res.data
							this.orderInfo.userName = this.address.name
							this.orderInfo.mobile = this.address.tel
							this.orderInfo.address = this.address.addressDetail + this.address.areaCode
						}
					} else {
						this.address = []
					}
				}).catch(err => {
					console.log("请求失败", err)
				})
			},
			// 获取已选数量和金额
			getCheckedGoodsCount: function() {
				let checkedGoodsCount = 0;
				let checkedGoodsAmount = 0;
				this.checkedGoodsList.forEach(function(v) {
					checkedGoodsCount += v.number;
					checkedGoodsAmount += v.price * v.number;
					
				});
				//商品数量
				this.orderInfo.num = checkedGoodsCount;
				//商品应付金额
				this.orderInfo.goodsPrice = checkedGoodsAmount
				//实付金额（商品金额+配送费-优惠券），暂定为商品金额
				this.orderInfo.orderPrice = checkedGoodsAmount;
			},

			// 进行展开或者伸缩
			doOpenOrClose: function() {
				this.openOrderFlg = !this.openOrderFlg

			},
			// 去下单
			doSubmitOrder: function() {
				let that = this;
				if(that.checkOrderInfo()){
					that.payPopup = true
				}else {
					utils.showErrorToast('请填写订单信息！','none')
				}
				
			},
			// 校验订单信息
			checkOrderInfo(){
				if (this.orderInfo.userId == undefined || this.orderInfo.userId == ''){
					return false
				}
				if (this.orderInfo.userName == undefined || this.orderInfo.userName == ''){
					return false
				}
				if (this.orderInfo.mobile == undefined || this.orderInfo.mobile == ''){
					return false
				}
				if (this.orderInfo.address == undefined || this.orderInfo.address == ''){
					return false
				}
				if (this.orderInfo.appointTime == undefined || this.orderInfo.appointTime == ''){
					return false
				}
				if (this.orderInfo.num == 0){
					return false
				}
				if (this.orderInfo.goodsPrice == 0 ){
					return false
				}
				if (this.orderInfo.orderPrice == 0){
					return false
				}
				return true
			},
			// 支付订单
			selectPay(index) {
				let that = this;
				if (index == 3){
					that.orderInfo.orderStatus = 101
				}else {
					that.orderInfo.orderStatus = 201
				}
				utils.showErrorToast('支付方式为：'+that.payList[index],'none')
				console.log("订单信息", that.orderInfo);
				req.request(api.OrderSubmit, that.orderInfo,'POST').then((res) => {
					if (res.errno === 200) {
						uni.redirectTo({
							url: '/pagesB/payResult/payResult?sucess=1'
						});
					} else if(res.errno === -1) {
						uni.redirectTo({
							url: '/pagesB/payResult/payResult?sucess=0'
						});
					}
				});
			},
			selectAddress() {
				uni.navigateTo({
					url: '/pagesB/address/address?addressId=' + 1
				})
			},
			selectTime(index) {
				this.orderInfo.appointTime = index
			      // console.log(index) // 此处输出选中的时间索引值
				this.showPopup = false
			},
			getTimeList() {
				const now = new Date();
				// 获取当前时间加上半个小时的格式化时间
				const time1 = this.formatTime(new Date(now.getTime() + 30 * 60 * 1000));
				// 获取比当前时间大的整数时间的格式化时间
				const time2 = this.formatTime(new Date(now.getTime() + 90 * 60 * 1000));
				// 获取比 time2 大1小时的格式化时间
				const time3 = this.formatTime(new Date(now.getTime() + 150 * 60 * 1000));
				this.timeList = [time1, time2, time3];
			},
			formatTime(date) {
				const year = date.getFullYear();
				const month = String(date.getMonth() + 1).padStart(2, '0');
				const day = String(date.getDate()).padStart(2, '0');
				const hour = String(date.getHours()).padStart(2, '0');
				const minute = String(date.getMinutes()).padStart(2, '0');
				return `${year}-${month}-${day}T${hour}:${minute}:00`;
			},
			change(e){
				this.orderInfo.message = e
			},
			close() {
				this.showPopup = false
				this.payPopup = false
			},
		},
		watch: {
			showPopup(newValue, oldValue) {
				if (newValue) {
					this.getTimeList();
				} else {
					this.timeList = [];
				}
			}
		}
		
	};
</script>
<style>
	@import './checkout.css';
</style>
