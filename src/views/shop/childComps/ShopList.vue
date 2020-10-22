<template>
  <div class="shopList">
    <scroll class="content" ref="scroll">
        <shop-list-item v-for="(item, index) in showShopList" :key="index" :product="item">{{item}}</shop-list-item>
<!--      <ul>-->
<!--        <li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>&#45;&#45;&#45;&#45;</li><li>!!!!!!!!!!</li>-->
<!--      </ul>-->
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'
  import ShopListItem from './ShopListItem'
    export default {
        name: "ShopList",
      components: {
        Scroll,
        ShopListItem
      },
      computed: {
          showShopList() {
            return this.$store.state.shopList
          }
      },
      activated() {
        this.$refs.scroll.refresh();
      }
    }
</script>

<style scoped>
  .shopList{
    height: calc(100% - 44px - 49px - 40px);
  }
  .content{
    height: 100%;
    overflow: hidden;
  }
</style>
