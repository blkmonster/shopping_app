function request(url, data = {}, method = 'GET') {
	return new Promise(function(resolve, reject) {
		uni.request({
			url: url,
			data: data,
			method: method,
			header: {
				'Content-Type': 'application/json',
				'ZX-Shopping-Token': uni.getStorageSync('token')
			},
			success: function(res) {
				if (res.statusCode == 200) {
					if (res.data.errno == 501) {
						// 清除登录相关内容
						try {
							uni.removeStorageSync('userInfo');
							uni.removeStorageSync('token');
						} catch (e) {
							// Do something when catch error
						} // 切换到登录页面
						uni.navigateTo({
							url:'/pagesB/accountLogin/accountLogin'
						});
					} else {
						resolve(res.data);
					}
				} else {
					reject(res.errMsg);
				}
			},
			fail: function(err) {
				reject(err);
			}
		});
	});
}

module.exports = {
	request
};
