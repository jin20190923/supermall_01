<template>
<div id="home" >
    <!-- <h2>首页</h2> -->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <scroll class="content" ref="scroll" 
            :probe-type="3" @scroll="contentScroll" 
            >
              <!-- @pullingUp="loadMore" :pull-up-load="true"-->
            <home-swiper :banners="banners"></home-swiper>
            <recommend-view :recommends="recommends"></recommend-view>
            <feature-view/>
            <tab-control class="tab-control" :titles="['流行','新款','精选']" 
              @tabClick="tabClick"/>
            <good-list :goods="showGoods"/> 
      </scroll>

      <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>



  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
   <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
   <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>





 
 
 </div>


</template>

<script>

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import NavBar from 'common/navbar/NavBar'
import TabControl from 'content/tabControl/TabControl'

 import GoodList from 'components/content/goods/GoodsList'
 import Scroll from 'components/common/scroll/Scroll'
 import BackTop from 'components/content/backTop/BackTop'
// import GoodsListItem from 'content/goods/GoodsListItem'
// 只有用default导出才能不用大括号
import {getHomeMultidata,getHomeGoods} from "network/home"
import {Swiper,SwiperItem} from 'components/common/swiper'
// import BScroll from 'better-scroll'

export default {
    name: 'Home',
    components:{

     HomeSwiper,
     RecommendView,
     FeatureView,
      GoodList, 
     NavBar,
     TabControl,
     Scroll,
     BackTop
     },
    data(){
      return{
        banners:[],
        recommends:[],
        // result:null 
        goods: {
          'pop': {page: 0, list:[]},
          'new': {page: 0, list:[]},
          'sell': {page: 0, list:[]},

        },
        currentType:'pop',
        isShowBackTop:false
      }
     },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
     },
    created(){

    //1.请求多个数据
    this.getHomeMultidata()
   //2.请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
    
   
   },
   mounted(){
    const refresh = this.debounce(this.$refs.scroll.refresh, 200)
    //3.监听item中图片加载完成
    this.$bus.$on('itemImageLoad',()=>{
      // this.$refs.scroll.refresh()
      //  console.log( this.$refs.scroll.refresh)
       refresh()
    })

   },
  methods:{
    // 事件监听相关的方法
    tabClick(index){
      
        switch(index){
          case 0:
            this.currentType='pop'
            break
          case 1:
            this.currentType='new'
            break
          case 2:
            this.currentType='sell'
            break

        }
          console.log(index);
    },
    backClick(){
      console.log("回到顶部")

      this.$refs.scroll.scrollTo(0,0,500);
      // this.$refs.scroll.message;
    },
    contentScroll(position){
      // console.log(position);
      this.isShowBackTop=(-position.y)>1000
    },

    debounce(func, delay){
      let timer =null
      return function (...args){
        if(timer)clearTimeout(timer)
        timer=setTimeout(()=>{
           func.apply(this,args)
        }, delay)
      }

    },
    // loadMore(){
    //   // console.log('上拉加载更多');
    //   this.getHomeGoods(this.currentType)
    //   this.$refs.scroll.scroll.refresh()
    // },
    // 以下是网络请求相关的方法
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
        
          // this.result=res;
          this.banners=res.data.banner.list,
          this.recommends=res.data.recommend.list,
          console.log(res);
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res=>{
        console.log(res);
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1

        // this.$refs.scroll.finishPullUp()

      })
    }
  }


  }
//   let totalNums=[]
//   const num1=[20,11,222]
//   const num2=[21,11,222]
// //   for (let n of num1){
// //     totalNums.push()
// //   }
// // </script>
// totalName.push(...num1)
//scoped局部
<style scoped>

#home{
  padding-top:44px;
position:relative;
  height:100vh;

}
.home-nav{
  background-color: var(--color-tint);
  color:#fff;
  position :fixed;
  left:0;
  right:0;
  top:0;
  z-index:9;
}
.tab-control{
  z-index: 9;
  position:sticky;

  top:44px;
  background-color: white;
  
}

.content{
 

  position:absolute;
  top:44px;
  bottom:49px;
  left:0;
  right:0;
 
 overflow:hidden;

/*height:calc(100%-93px);*/
}
</style>
