<template>
    <div class="goods">
      <goods-list-item v-for="item in goods" :listItem="item"></goods-list-item>
    </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'
    export default {
        name: "GoodsList",
      components: {
          GoodsListItem
      },
      props: {
          goods: {
            type: Array,
            default(){
              return []
            }
          }
      }
    }
</script>

<style scoped>
  .goods{
    /*弹性盒子*/
    display: flex;
    /*分行显示*/
    flex-wrap: wrap;
    /*均等分*/
    justify-content: space-around;
    padding: 2px;
  }
</style>
