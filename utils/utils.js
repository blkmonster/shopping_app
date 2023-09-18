function showErrorToast(msg,img) {
    uni.showToast({
        title: msg,
		icon:img
    });
}

function timer(){
	
}

function cleartime(close){
	clearTimeout(close)
}

module.exports = {
    showErrorToast,
	timer,
	cleartime,
	id: 1,
	index: 0,
};
