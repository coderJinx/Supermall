<template>
  <tab-bar>
    <tab-bar-item path="/home" active-color="deepskyblue">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg">
      <img slot="item-icon-active" src="~assets/img/tabbar/home-act.svg">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/categroy" active-color="deepskyblue">
      <img slot="item-icon" src="~assets/img/tabbar/category.svg">
      <img slot="item-icon-active" src="~assets/img/tabbar/category-act.svg">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shop" active-color="deepskyblue">
      <img slot="item-icon" src="~assets/img/tabbar/shop.svg">
      <img slot="item-icon-active" src="~assets/img/tabbar/shop-act.svg">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/mine" active-color="deepskyblue">
      <img slot="item-icon" src="~assets/img/tabbar/mine.svg">
      <img slot="item-icon-active" src="~assets/img/tabbar/mine-act.svg">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'
    export default {
        name: "MainTabBar",
      components: {
          TabBar,
        TabBarItem
      }
    }
</script>

<style scoped>
  /*{*/
  /*  color: blue*/
  /*;*/
  /*}*/
</style>
