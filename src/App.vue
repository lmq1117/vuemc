<template>
	<div id="app">
		<h2> v-for 3 渲染组件</h2>
		<componentA v-for="(value,key) in objects" :key="key"></componentA>
		<component-a/>

		<h2>v-for 2 列表渲染 遍历对象</h2>
		<p v-for="item in objects" v-text="item"></p>

		<h2>v-for 1 列表渲染 遍历数组</h2>
		<p v-for="(item,index) in lists" v-text="index+' '+item.name+'：'+item.price+'元'"></p>
		<div v-for="(val,key,index) in objects" v-text="index +' '+val+''+key"></div>

		<p v-bind:title="app_vue_hello">App.vue中的内容，根组件 |||<span>{{app_vue_hello_html}}</span></p>
		<h2 v-html="app_vue_hello_html"></h2>
		<h3 v-text="app_vue_hello_html"></h3>
		{{num + 1}}
		{{status ? '成功' : '失败'}}
		<HelloWorld/>
	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import componentA from './components/a'
export default {
	name: 'app',
	components: {
		HelloWorld,
		componentA
	},
	data () {
		return {
			app_vue_hello:" app_vue_hello_content",
			app_vue_hello_html:" <p>app_vue_hello_html_content</p>",
			num:1,
			status:true,
			lists: [
				{name:'apple',price:34},
				{name:'banana',price:56},
				{name:'orange',price:345},
				{name:'pee',price:304}
			],
			objects:{
				name:'jack',
				age:18,
				sex:1
			}
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
