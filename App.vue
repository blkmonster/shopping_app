<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			const updateManager = uni.getUpdateManager();
			uni.getUpdateManager().onUpdateReady(function () {
			    uni.showModal({
			        title: '更新提示',
			        content: '新版本已经准备好，是否重启应用？',
			        success: function (res) {
			            if (res.confirm) {
			                // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
			                updateManager.applyUpdate();
			            }
			        }
			    });
			});
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		onUnload:function(){
			
		},
		globalData: {
			hasLogin: false,
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "@/uni_modules/uview-ui/index.scss";
</style>
