<template>
	<div id="app">
		<h2>v-if v-show  用法</h2>
		<h3>
			v-if 直接去掉代码
			v-show 是display：none
		</h3>

		<ul class="test">
			<li v-if="isPartA">内联样式1 PartA</li>
			<li v-else>no data</li>
			<li v-show="!isPartA">内联样式PartB</li>
		</ul>
		<button v-on:click="toggle">toggle</button>
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
			isPartA:true,
			redk:'red',
			yellowk:'yellow',
			greenk:'green',
			bk:'b',
			ik:'i',
			ok:'o',
			dk:'d',
			uk:'u',
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
			},
			zuheak:{
				'b':true,
				'red':true,
				'd':true
			},
			linkCss:{
				'color':'red',
				'font-size':'50px'
			},
			arrName:['b','red',{'d':true,'i':true}]
		}
	},
	methods:{
		addItem(){
			console.log('ADD')
			Vue.set(this.lists,2,{name:'laowang',price:this.lists[2].price - 1})
		},
		toggle(){
			this.isPartA = !this.isPartA;
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
.test{
	list-style: none;
	line-height: 30px;
	font-size: 18px;
}
.red {
	color:red;
}
.green {
	color:green;
}
.yellow{
	color: yellow;
}
.b{
	font-weight: 900;
}
.i {
	font-style:italic;
}
.o {
	font-style: oblique;
}
.d{
	text-decoration-line: line-through;
}
.u{
	text-decoration-line: underline;
}
</style>
