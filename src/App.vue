<template>
	<div id="app">
		<h2>v-bind:attrname="attrvalue"绑定属性 </h2>
		<h3>可简写为 :attrname="attrvalue"</h3>

		<ul class="test">
			<!--  -->
			<li v-bind:class="redk" class="b">红色加粗900文字a 没用缩写</li>
			<li :class="redk" class="b">红色加粗900文字a 缩写了</li>
			<li :class="greenk">字符串绑定</li>
			<li :class="zuheak">对象绑定</li>
			<li :class="arrName">数组绑定</li>
			<li :class="[greenk,dk]">属性处直接写数组1</li>
			<li :class="['green','d']">属性处直接写数组2</li>
			<li :style="linkCss">内联样式</li>
			<li >内联样式</li>
			<li >内联样式</li>
		</ul>

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
