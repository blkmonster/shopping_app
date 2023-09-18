const url = 'http://localhost:8080/wx/';

module.exports = {
	LoginByWx: url + 'auth/login_by_weixin',//微信登录
	AuthLogout: url + 'auth/logout',//账号登出
	UserInfo: url + 'auth/info',//查询用户基础信息
	AddressList: url + 'address/list',//用户收货地址列表
	AddressDetail: url + 'address/detail',//单个收货地址详情
	AddressSave: url + 'address/save',//添加/修改地址
	AddressDelete: url + 'address/delete',//删除地址
	CategoryList: url + 'category/list',//商品类目表
	CategoryL1: url + 'category/L1',//商品一级类目
	CategoryL2: url + 'category/L2',//对应商品二级类目
	GoodsList: url + 'goods/list', //首页展示列表
	GoodsListByCategory: url + 'goods/pidList',//通过类目查找商品
	GoodsListByKeyword: url + 'goods/byKeyword',//通过搜索查找商品
	GoodsDetail: url + 'goods/detail', //商品详情
	CartAdd: url + 'cart/add', //添加购物车
	CartCount: url + 'cart/count', //购物车物品数量
	CartList: url + 'cart/index', //获取购物车的数据
	CartUpdate: url + 'cart/update', // 更新购物车的商品
	CartChecked: url + 'cart/checked', // 选择或取消选择商品
	CartDelete: url + 'cart/delete', // 删除购物车的商品
	OrderSubmit: url + 'order/insert',// 提交订单
	OrderList: url + 'order/list', //订单列表
	OrderConfirm: url + 'order/confirm',//确认收货
	OrderDelete: url + 'order/delete',//删除订单
	OrderPay: url + 'order/pay',//支付订单
	OrderOver: url + 'order/over',//评价完成订单
	OrderDetail: url + 'order/detail', //订单详情
	OrderDrawback: url + 'order/drawback', //订单商品退款申请
	CommentAdd: url + 'comment/add',//添加评价
	CommentList: url + 'comment/list',//评价列表
	StorageAdd: url + 'storage/create',//添加文件
	StorageDelete: url + 'storage/delete',//删除文件
	AddHistory: url + 'storage/addHistory',//保存搜索历史
	CollectList: url + 'collect/list',//收藏列表
	CollectDelete: url + 'collect/delete',//取消收藏
	CollectAdd: url + 'collect/create',//添加收藏
	CollectIs: url + 'collect/isCollect',//判断商品是否已收藏
	KeywordList: url + 'show/keywordList',//查询搜索关键字
	AdList: url + 'show/adList',//查询首页广告
}
