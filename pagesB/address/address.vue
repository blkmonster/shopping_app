<template>
	<view class="container">
		<u-swipe-action>
			<u-swipe-action-item
				:options="options1"
				v-for="(item, index) in addressList"
				:key="item.id"
				:name="item.id"
				@click = "deleteAddress"
			>
				<view class="address-item" @tap="returnCheckout(item.id)">
					<!-- 展示信息 -->
					<view class="address-info">
						<view style="display:flex;">
							<text>{{item.addressDetail}}</text>
							<view v-if="item.isDefault == 1"  class="address-tag">
								<u-tag text="默认" size="mini" type="warning"></u-tag>
							</view>
						</view>
						<view class="address-text">{{item.areaCode}}</view>
						<view class="address-text">{{item.name}}{{sexName(item.sex)}} {{item.tel}}</view>
					</view>
					<!-- 编辑按钮 -->
					<view class="edit-btn">
						<u-icon name="edit-pen" size="28" @click="setAddress(item.id)"></u-icon>
					</view>
				</view>
				<u-line color="#ababab"/>
			</u-swipe-action-item>
		</u-swipe-action>
		<view class="add-btn">
			<button @click="addAddress">添加新地址</button>
		</view>
	</view>
</template>

<script>
	const api = require('@/utils/api.js')
	const req = require('@/utils/request.js')
	const utils = require('@/utils/utils.js')
	const app = getApp();
	export default {
		data() {
			return {
				addressList: [],
				options1: [{
					text: '删除',
					style: {
						backgroundColor: '#f56c6c'
					}
				}],
				addressId: 0,
			}
		},
		onLoad(option) {
			console.log("传递addressId值", option.addressId)
			this.addressId = option.addressId
			// this.getAddressList();
		},
		onShow() {
			this.getAddressList();
		},
		methods: {
			//获取用户地址列表
			getAddressList(){
				req.request(api.AddressList,{userId: uni.getStorageSync("userId")}).then(res => {
					// console.log("res:", res)
					if (res.errno == 200) {
						this.addressList = res.data.list
						// console.log("addressList",this.addressList)
					} else {
						utils.showErrorToast(res.errmsg, 'none');
					}
				}).catch(err => {
					console.log("请求失败", err)
				})
			},
			//修改地址
			setAddress(id){
				uni.navigateTo({
					url: '/pagesB/addressAdd/addressAdd?id=' + id
				})
			},
			//添加地址
			addAddress(){
				uni.navigateTo({
					url: '/pagesB/addressAdd/addressAdd'
				})
			},
			//删除地址
			deleteAddress(e){
				let that = this
				//确认删除
				uni.showModal({
				    title: '提示',
				    content: '是否删除该收藏商品？',
				    success: function (res) {
						if (res.confirm) {
				
							req.request(api.AddressDelete,{id:e.name},'POST').then(res => {
								console.log("res:", res)
								if (res.errno == 200) {
									utils.showErrorToast("删除成功！");
									that.getAddressList();
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
			sexName(index){
				if(index == 1){
					return "先生"
				}else {
					return "女士"
				}
			},
			returnCheckout(id) {
			  if (this.addressId == 1) {
			    // 返回上一层页面，并关闭当前页面
			    uni.navigateBack({
			      delta: 1,
				  success:function(){
					const pages = getCurrentPages();
					const prevPage = pages[pages.length - 1]; // 获取上一个页面实例对象
					prevPage.$vm._data.addressDetailId = id
					prevPage.$vm.getAddress()
				  }.bind(this)
			    });
			  }
			},
		}
	}
</script>

<style>
	@import './address.css';
</style>