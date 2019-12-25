<template>

  
       <div class="wrapper" ref="aaaa">
         <!-- <h2>分类</h2> -->
          <ul class="content">
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf</li>
            <li>ghf12</li>
            
          </ul>
       </div>


</template>

<script>
import  BScroll from 'better-scroll'
export default {
  name: 'Category',
//  components:{
//    BScroll
//  },
  data(){
    return {
      scroll:null
    }
  },
  //组件创建完之后创建生命周期
  // created(){
  //  this.scroll= new BScroll('.content',{})
  // }
mounted(){
  // console.log(this.$refs.aaaa);
  // console.log(document.querySelector('.wrapper'));
  this.scroll =new BScroll(document.querySelector('.wrapper'),{
    	probeType: 3  ,
      click:true,
      pullUpload:true
  })
  this.scroll.on('scroll',(position)=>{
		console.log(position);
	})
	this.scroll.on('pullingUp',()=>{
		console.log("上拉加载更多");
	})
}
  }
</script>

<style scoped>
.wrapper{
  height:150px ;
  background-color:red;
 overflow: hidden; 
  /* 原生局部滚动只要设置overflow-y */
  /* overflow-y: scroll; */

}
</style>
