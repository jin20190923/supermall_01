<template>
  <div class="good">
    nihaoxiajiejie 
    <goods-list-item v-for="(item,index) in goods" :key="index">
    </goods-list-item>
   {{goods}}
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  name: 'GoodsList',
  props:{
    type:Array,
    default(){
      return []
    }
  },
  components:{
    GoodsListItem
  }
 
}
</script>

<style>
.good{
  display:flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}

</style>
