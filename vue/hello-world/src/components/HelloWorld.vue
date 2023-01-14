<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul class="list">
      <li class="list_item_odd">item 1</li>
      <li class="list_item_even">item 2</li>
      <li class="list_item_odd">item 3</li>
      <li class="list_item_even">item 4</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
h3 {
  margin: 40px 0 0;
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
.list{
  background-color: black;
  &_item{
    border: 1px solid red;
    &_even{
      color:white;
    }
    &_odd{
      color: gray;
    }
  }
}
</style>
