<template>
	<div id="app">
		
		<h2>v-for 1 列表渲染 遍历数组</h2>
		<p v-for="(item,index) in lists" v-text="index+' '+item.name+'：'+item.price+'元'"></p>
		<button v-on:click="addItem">AddItem2</button>
		<HelloWorld/>
	</div>
</template>

<script>
import Vue from 'vue'
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
	},
	methods:{
		addItem(){
			console.log('ADD')
			// console.log(this.lists);
			// this.lists.push({
			// 	name:'pig',
			// 	price:4
			// });

			//不会更新的情况
			// this.lists[2] = {name:'pig',price:55}

			//
			Vue.set(this.lists,2,{name:'laowang',price:this.lists[2].price - 1})
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
