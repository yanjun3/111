<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  *{
    padding: 0;
    margin: 0 ;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
  }
  #app,html,body{
    width: 100%;
    height: 100%;
  }
  a{
    color: black;

  }
  .router-link-active{
    color: red;
  }
</style>