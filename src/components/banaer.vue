<template>
  <div>
    <h3>{{ hello }}</h3>
    <hr>
    {{ $route.params.color }}
    {{ $route.params.num }}
    <hr>
    <button @click="getParam">点击获取参数</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hello: 'bananer组件内容 '
    }
  },
  methods:{
    getParam (){
      console.log(this.$route.params);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
