<template>
	<view class="address-form">
		<view class="form-row">
			<view class="label">联系人</view>
			<view class="input-wrapper">
				<u--input
					placeholder="请填写姓名"
					border="none"
					:value="address.name"
					clearable
					@input="inputName"
				></u--input>
			</view>
		</view>
		<u-divider :hairline="true"></u-divider>
		<view class="form-row">
			<u-radio-group 
				:value="address.sex"
				placement="row"
				>
				<u-radio
					v-for="(item, index) in sexList"
					:key="index"
					:label="item.label"
					:name="item.name"
					@change="radioChange"
				></u-radio>
			</u-radio-group>
		</view>
		<u-divider :hairline="true"></u-divider>
		<view class="form-row">
			<view class="label">手机号</view>
			<view class="input-wrapper">
				<u--input
					placeholder="请填写手机号"
					border="none"
					:value="address.tel"
					clearable
					@input="inputTel"
				></u--input>
			</view>
		</view>
		<u-divider :hairline="true"></u-divider>
		<view class="form-row">
			<view class="label">收货地址</view>
			<view class="input-wrapper">
				<u--input
					placeholder="请填写收货地址"
					border="none"
					:value="address.addressDetail"
					clearable
					@input="inputDetail"
				></u--input>
			</view>
		</view>
		<u-divider :hairline="true"></u-divider>
		<view class="form-row">
			<view class="label">门牌号</view>
			<view class="input-wrapper">
				<u--input
					placeholder="例:1号楼101室"
					border="none"
					:value="address.areaCode"
					clearable
					@input="inputCode"
				></u--input>
			</view>
		</view>
		<u-divider :hairline="true"></u-divider>
		<view class="form-row">
			<view class="label">设为默认地址</view>
			<view class="input-wrapper">
				<u-switch 
					:value="address.isDefault"
					:activeValue="1"
					:inactiveValue="0"
					@change="chageDefault"
					>
				</u-switch>
			</view>
		</view>
		<view class="form-submit">
			<button @click="saveAddress">保存</button>
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
				addressDetail: [],
				address:{
					id: 0,
					name: null,
					sex: 1,
					tel: null,
					addressDetail: null,
					areaCode: null,
					isDefault: 0,
					userId: uni.getStorageSync("userId")
				},
				addressName:{
					id: 'id',
					name: '姓名',
					sex: '性别',
					tel: '手机号',
					addressDetail: '收货地址',
					areaCode: '门牌号',
					isDefault: '默认地址'
				},
				sexList: [{// 性别列表
					name: 1,
					label: '先生',
					disabled: false
					
				},
				{
					name: 0,
					label: '女士',
					disabled: false
				}],
			}
		},
		onLoad(e) {
			// console.log("e",e)
			if(e.id != undefined){
				this.getAddressDetail(e.id);
			}
		},
		onShow() {
			
		},
		methods: {
			//获取当前地址详情
			getAddressDetail(aid){
				var params = {
					id: aid
				}
				req.request(api.AddressDetail,params).then(res => {
					// console.log("res:", res)
					if (res.errno == 200) {
						this.addressDetail = res.data
						// console.log("addressDetail",this.addressDetail)
						//设置address的值
						this.setAddress()
					} else {
						utils.showErrorToast(res.errmsg, 'none');
					}
				}).catch(err => {
					console.log("请求失败", err)
				})
			},
			//添加、修改地址
			saveAddress(){
				//验证信息完整性
				if(this.notNull()){
					return
				}
				req.request(api.AddressSave,this.address,'POST').then(res => {
					console.log("this.address:", this.address)
					console.log("res:", res)
					if (res.errno == 200) {
						uni.showToast({
							title: "编辑成功！",
							icon: 'none'
						})
					} else {
						utils.showErrorToast(res.errmsg, 'error');
					}
				}).catch(err => {
					console.log("请求失败", err)
				})
				//返回列表页面
				uni.navigateBack()
			},
			//验证address完整性
			notNull(){
				let isNull = false
				let address1 = this.address
				let addressName1 = this.addressName
				let ids = Object.keys(address1);
				ids.forEach(function (value, key) {
					// console.log(value,address1[value]);
					if(address1[value] == null || address1[value].length === 0){
						utils.showErrorToast('请填写'+addressName1[value]+'！','error');
						isNull = true
						return
					}
				})
				
				return isNull
			},
			//设置address的值
			setAddress(){
				this.address = {
					id: this.addressDetail.id,
					name: this.addressDetail.name,
					sex: this.addressDetail.sex,
					tel: this.addressDetail.tel,
					addressDetail: this.addressDetail.addressDetail,
					areaCode: this.addressDetail.areaCode,
					isDefault: this.addressDetail.isDefault
				}
				// console.log("address:",this.address)
			},
			//选择性别
			radioChange(index){
				this.address.sex = index
			},
			//设置默认地址
			chageDefault(index){
				this.address.isDefault = index
			},
			inputName(e){
				this.address.name = e
			},
			inputTel(e){
				this.address.tel = e
			},
			inputDetail(e){
				this.address.addressDetail = e
			},
			inputCode(e){
				this.address.areaCode = e
			},
			
		}
	}
</script>

<style>
	@import './addressAdd.css';
</style>