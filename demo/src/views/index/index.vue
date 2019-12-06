<template>
  <div class="index">
      <div class="main"> 
            <router-view></router-view>
      </div>
    <div class="footer">
        <router-link to="/index/home">首页</router-link>
        <router-link to="/index/my">我的</router-link>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .index{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .index>.main{
        width: 100%;
        height: 100%;
        /* -webkit-box-flex:1; */
        flex: 1;
        overflow: auto;
    }
    .footer{
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: #eee;
    }
</style>