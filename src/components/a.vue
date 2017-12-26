<template>
  <div>
    {{ hello }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      hello: '组件A中component a hello值'
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
