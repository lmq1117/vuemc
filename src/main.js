// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	//对象插入index.html的位置
	el: '#app',

	//渲染 通过 import App from './App'  导入的App组件
	//es6语法
	render: h => h(App)

	// => 相当于 18 19 20行与15行等价
	// render: function (h) {
	// 	return h(App);
	// }


})
