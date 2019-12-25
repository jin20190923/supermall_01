<template>

<div class="tab-control">
    <div v-for="(item,index) in titles" :key="index" @click="itemClick(index)"
    class="tab-control-item" :class="{active: index === currentIndex}">
        <span>{{item}}</span>
    </div>
</div>

</template>

<script>

export default {
    name: 'TabControl',
    data(){
        return{
            currentIndex:0
        }
    },
    methods:{
     itemClick(index){ 
            this.currentIndex=index;
            this.$emit('tabClick',index)
        }
    },
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    }
   

  }
</script>

<style scoped>
  .tab-control{
      display:flex;
      text-align:center;
      font-size:15px;

  }
  .tab-control-item{
      flex:1;
      height:40px;
      line-height:40px;
  }
  .tab-control-item span{
      padding:0 0 5px;
  }
  .active{
      color:var(--color-high-text);
  }
  .active span {
      border-bottom: 3px solid var(--color-tint);

  }
</style>
