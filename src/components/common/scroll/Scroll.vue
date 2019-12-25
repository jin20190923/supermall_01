<template>
<!-- ref:绑定子组件 -->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
   </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  
  name: 'Scroll',
  props:{
    probeType:{
      type:Number,
      default:0
    },
    // pullUpLoad:{
    //   type:Boolean,
    //   default:false
    // }

  },
  data(){
      return{
          scroll:null,
          message:'hahah'
      }
  },
  mounted(){
      //1.创建BSscroll的对象
        this.scroll=new BScroll(this.$refs.wrapper,{
          click:true,
          probeType:this.probeType,
          pullUpLoad:this.pullUpLoad,

        })
        //2.监听听滚动位置
        this.scroll.on('scroll',(position)=>{
          // console.log(position);
        this.$emit('scroll',position)
        })


        console.log(this.scroll);
       
        this.scroll.refresh()
   
        // //3.监听上拉事件
        // this.scroll.on('pullingUp',()=>{
        //   // console.log("上拉加载更多");
        // this.$emit('pullingUp')//将上拉事件传出去
        // })
  },

  methods: {
      scrollTo(x,y,time=300){
        this.scroll && this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
        this.scroll.finishPullUp()
      },
      refresh(){
        console.log('-------')
       this.scroll&& this.scroll.refresh()
      }
  
  }
}
</script>

<style scoped>

</style>
