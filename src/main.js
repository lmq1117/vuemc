// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import appleZ from './components/apple'
import banaerZ from './components/banaer'

Vue.use(VueRouter)

let router = new VueRouter({
	// mode:'history',
	routes:[
		{
			path:'/a',
			component:appleZ
		},
		{
			path:'/b',
			component:banaerZ
		}
	]
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	//对象插入index.html的位置
	el: '#app',

	//使用router对象
	router,

	//渲染 通过 import App from './App'  导入的App组件
	//es6语法
	render: h => h(App)

	// => 相当于 18 19 20行与15行等价
	// render: function (h) {
	// 	return h(App);
	// }


})
