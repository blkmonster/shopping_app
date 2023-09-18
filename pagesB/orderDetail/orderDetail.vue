<template>
	<view>
		<view class="order-info">
			<view class="orderStatus">{{getOrderStatus(orderInfo.orderStatus)}}</view>
			<view class="orderStatusTxt">订单状态</view>
		</view>

		<!--订单商品-->
		<view class="order-goods">
			<view class="orderNumber">共{{orderInfo.num}}件商品</view>
			<view class="goods">
				<view class="item" v-for="(item, index) in orderGoods" :key="item.id">
					<view class="img">
						<image :src="item.picUrl" background-size="contain"></image>
					</view>
					<view class="info">
						<navigator :url="'/pagesB/goodshop/goodshop?goodsSn=' + item.goodsSn">
							<text class="t">{{ item.goodsName }}</text>
							<view class="b">
								<text class="price">￥{{ item.price }}</text>
								<text class="number">x {{ item.number }}</text>
							</view>
						</navigator>
						<view v-if="item.drawback == 0 || item.drawback == 3" style="width: 150rpx;margin-left: auto;margin-top: 20rpx;">
							<u-button color="#122047" plain="true"  @click="goDrawback(item)"
								size="small" text="申请退款">
							</u-button>
						</view>
						<view v-if="item.drawback == 1 " style="width: 150rpx;margin-left: auto;margin-top: 20rpx;">
							<text style="color: chocolate;" >已退款</text>
						</view>
						<view v-if="item.drawback == 2 " style="width: 150rpx;margin-left: auto;margin-top: 20rpx;">
							<text style="color: chocolate;" >正在申请退款</text>
						</view>
					</view>
				</view>
			</view>
			<!--订单底部-->
			<view class="order-bottom">
				<view class="total">
					<view class="t">
						<text class="label">商品金额</text>
						<text class="txt">￥{{ orderInfo.goodsPrice }}</text>
					</view>
					<view class="t">
						<text class="label">运费金额</text>
						<text class="txt">￥{{ orderInfo.freightPrice }}</text>
					</view>
					<view class="t">
						<text class="label">优惠金额</text>
						<text class="txt">-￥{{ orderInfo.couponPrice }}</text>
					</view>
					<view class="t">
						<text class="label">实际支付</text>
						<text class="txt">￥{{ orderInfo.orderPrice }}</text>
					</view>
				</view>
				<view class="otherInfo">其他信息</view>
				<view class="total">
					<view class="title">
						<text class="label">订单编号</text>
						<text class="txt">{{ orderInfo.orderSn }}</text>
					</view>
					<view class="title">
						<text class="label">下单时间</text>
						<text class="txt">{{ orderInfo.orderTime }}</text>
					</view>
					<view class="title" style="margin-bottom: 100rpx;margin-top: 30rpx;">
						<text class="label">寄件地址</text>
						<text class="txt">{{ orderInfo.userName }} {{ orderInfo.mobile }}
							{{ orderInfo.address }}</text>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 商品退款弹框 -->
		<view>
			<u-popup :show="drawbackShow" mode="center" @close="close">
				<view style="width: 85vw;padding: 20rpx;">
					<!-- 商品图片和名称 -->
					<view class="drawbackPic">
						<view class="img">
							<image :src="drawItem.picUrl" class="img" ></image>
						</view>
						<view class="info">
							<text class="t">{{ drawItem.goodsName }}</text>
							<view class="b">
								<text class="price">￥{{ drawItem.price }}</text>
								<text class="number">x {{ drawItem.number }}</text>
							</view>
						</view>
					</view>
					<!-- 退款金额 -->
					<view style="display: flex;margin: 20rpx;">
						<text class="title">退款金额：</text>
						<u--input v-model="drawbackGoods.drawbackPrice"  border="none"> ¥</u--input>
					</view>
					<!-- 退款原因选择 -->
					<view @click="pickerShow = true" style="display: flex;margin: 20rpx;">
						<text class="title">退款原因：</text>
						<u--input v-model="drawbackGoods.drawbackCause" disabled disabledColor="#ffffff" placeholder="请选择" border="none"></u--input>
						<u-icon slot="right" name="arrow-right"></u-icon>
						<u-picker :show="pickerShow" :columns="drawbackKeywords" keyName="keyword" @confirm="confirm" @cancel="pickerShow = false"></u-picker>
					</view>
					<!-- 问题描述 -->
					<view style="margin: 20rpx;">
						<text style="margin-bottom: 20rpx;">问题描述：</text>
						<u--textarea v-model="drawbackGoods.drawbackMessage" placeholder="为了帮您更好的解决问题,请详细描述退款原因"></u--textarea>
					</view>
					<!-- 图片 -->
					<view style="margin: 20rpx;">
						<text style="margin-bottom: 20rpx;">上传图片：</text>
						<view >
							<u-upload
							:fileList="drawbackGoods.drawbackPhoto"
							@afterRead="afterRead"
							@delete="deletePic"
							name="1"
							multiple
							:maxCount="10"
							></u-upload>
						</view>
					</view>
					<view class="backButton"><button @click="drawbackButton">申请退款</button></view>
				</view>
			</u-popup>
		</view>
	</view>
</template>

<script>
import utils from '@/utils/utils.js';
	const api = require('@/utils/api.js')
	const req = require('@/utils/request.js')
	const util = require('@/utils/utils.js')

	export default {
		data() {
			return {
				orderId: 0,
				orderInfo: {},
				orderGoods: [],
				drawbackShow: false,
				pickerShow: false,
				drawItem:{},
				drawbackKeywords: [],
				drawbackGoods: {
					id: 0,
					drawback: 2,
					drawbackPrice: 0,
					drawbackCause: '',
					drawbackMessage: '',
					drawbackPhoto: []
				},
			};
		},
		onLoad: function(options) {
			// 页面初始化 options为页面跳转所带来的参数
			// console.log("订单详情onLoad",options);
			this.orderId = options.id
			this.getOrderDetail()
		},
		onPullDownRefresh() {
			console.log("订单详情onPullDownRefresh");
			uni.showNavigationBarLoading(); //在标题栏中显示加载

			this.getOrderDetail();
			uni.hideNavigationBarLoading(); //完成停止加载

			uni.stopPullDownRefresh(); //停止下拉刷新
		},
		onReady: function() {
			// 页面渲染完成
			// console.log("订单详情onReady");
		},
		onShow: function() {
			// 页面显示
			// console.log("订单详情onShow");
		},
		onHide: function() {
			// 页面隐藏
			// console.log("订单详情onHide");
		},
		onUnload: function() {
			// 页面关闭
			// console.log("订单详情onUnload");
		},
		methods: {
			getOrderDetail() {
				uni.showLoading({
					title: '加载中'
				});
				setTimeout(function() {
					uni.hideLoading();
				}, 2000);
				let that = this;
				var params ={
					id: that.orderId
				}
				req.request(api.OrderDetail, params).then(res=> {
					if (res.errno === 200) {
						console.log("订单详情返回成功结果",res.data);
						that.orderInfo = res.data
						that.orderGoods = res.data.orderGoodsList
					}else{
						console.log("订单详情",res);
					}
					uni.hideLoading();
				}).catch(err=>{
					console.log("订单详情",err);
				});
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
			// 打开退款弹窗
			goDrawback(item){
				this.getDrawbackKeyword();
				this.drawItem = item
				this.drawbackGoods.id = item.id
				this.drawbackGoods.drawbackPrice = item.price
				this.drawbackShow = true
			},
			close() {
				this.drawbackShow = false
			},
			getDrawbackKeyword() {
				var that = this
				req.request(api.KeywordList,{value: 4}).then(res => {
					console.log("关键字",res)
					that.drawbackKeywords[0] = res.data.list
				}).catch(err => {
					console.log("数据接收失败", err)
				})
			},
			// 上传图片
			async afterRead(event) {
				let that = this
				// 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				// 循环上传图片到后端
				for (let i = 0; i < lists.length; i++) {
					await that.uploadFilePromise(lists[i].url).then(res => {
						res = JSON.parse(res)
						if (res.errno === 200) {
							if (that.drawbackGoods.drawbackPhoto === undefined) {
							  that.drawbackGoods.drawbackPhoto = [];
							}
							that.drawbackGoods.drawbackPhoto.push(res.data.url);
							console.log(res.data.url)
							that.$forceUpdate();
						}else{
							console.log("上传失败",res);
						}
					});
				}
			},
			uploadFilePromise: function(url) {
				return new Promise(function(resolve, reject) {
					uni.uploadFile({
						url: api.StorageAdd,
						filePath: url,
						name: 'file',
						header: {
							'Content-Type': 'multipart/form-data',
							'ZX-Shopping-Token': uni.getStorageSync('token')
						},
						success: function(res) {
							resolve(res.data)
						}
					});
				})
			},
			// 删除图片
			async deletePic(event) {
				console.log('删除',event)
				for (let i = 0;i<this.drawbackGoods.drawbackPhoto.length;i++){
					if(event.file == this.drawbackGoods.drawbackPhoto[i]){
						this.drawbackGoods.drawbackPhoto.splice(i, 1)
						this.$forceUpdate();
						const index = event.file.indexOf('fetch/');
						const result = event.file.substring(index + 'fetch/'.length);
						console.log(result);
						req.request(api.StorageDelete,{key:result},'POST')
						return ;
					}
				}
				
			},
			confirm(e) {
				console.log(e)
				this.drawbackGoods.drawbackCause = e.value[0].keyword
				this.pickerShow = false
			},
			// 提交申请
			drawbackButton(){
				let that = this
				that.drawbackGoods.drawback = 2
				//校验信息
				if (that.isAllRight()){
					console.log('drawbackGoods',that.drawbackGoods)
					req.request(api.OrderDrawback,that.drawbackGoods,'POST').then(res => {
						if (res.errno === 200){
							uni.showToast({
								title: '申请退款成功！',
								icon: 'none'
							});
							that.getOrderDetail()
							that.drawbackShow = false
							that.drawbackGoods.drawbackCause = ''
							that.drawbackGoods.drawbackMessage = ''
							that.drawbackGoods.drawbackPhoto = []
						} else {
							uni.showToast({
								title: '申请退款失败！',
								icon: 'none'
							});
						}
					}).catch(err => {
						console.log("请求失败", err)
					})
				} else {
					uni.showToast({
						title: '请完善退款信息！',
						icon: 'none'
					});
				}
			},
			isAllRight(){
				if (this.drawbackGoods.drawbackPrice == 0){
					return false;
				}
				if (this.drawbackGoods.drawbackCause == ''){
					return false;
				}
				if (this.drawbackGoods.drawbackMessage == ''){
					return false;
				}
				return true;
			},
		}
	};
</script>
<style>
	@import './orderDetail.css';
</style>
