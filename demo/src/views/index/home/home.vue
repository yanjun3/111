<template>
  <div class="home">
      <div class="header">
          <h2>多家网</h2>
      </div>
      <div class="main">
          <div class="swiper-container">
              <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="(item,index) in list" :key="index">
                      <img :src="item.img" alt="">
                  </div>
              </div>
          </div>
      </div>
      <!-- 列表 -->
      <div class="lie">
          <dl v-for="(item,index) in shu" :key="index">
              <dt><img :src="item.img" alt=""></dt>
              <dd>{{item.name}}</dd>
          </dl>
      </div>
  </div>
</template>

<script>

import Swiper from "swiper"
import "swiper/css/swiper.css"
import axios from "axios"
export default {
    data(){
        return{
            list:[],
            shu:[]
        }
    },
    mounted(){
        axios.get("/getswiper").then(res=>{
            this.list=res.data.swiper
            this.$nextTick(()=>{
                new Swiper(".swiper-container",{
                    loop:true,
                    autoplay:true
                })
            })
        }),
        axios.get("/getshu").then(res=>{
            this.shu=res.data.shu
        })
    }
}
</script>

<style scoped>
    .home{
        width: 100%;
        height: 100%;
    }
    .header{
        width: 100%;
        height: 50px;
        text-align: center;
        line-height: 50px;
        border: 1px solid #000;
    }
    .main{
        flex: 1;
        overflow: auto;
    }
    .swiper-container{
        width: 100%;
        height: 200px;
    }
    .swiper-container img{
        width: 100%;
        height: 100%;
    }
    .lie{
        width: 100%;
        height: 200px;
        display: flex;
        flex-wrap: wrap;
    }
    dl{
        width: 25%;
        height: 50px;
        text-align: center;
        line-height: 50px;
    }
</style>