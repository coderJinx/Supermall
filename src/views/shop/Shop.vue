<template>
  <div class="shop">
    <nav-bar class="shop-bar">
      <div slot="center">购物车({{shopLength}})</div>
    </nav-bar>
    <shop-list></shop-list>
    <shop-bottom-bar></shop-bottom-bar>
  </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'
    import ShopList from './childComps/ShopList'
    import ShopBottomBar from './childComps/ShopBottomBar'
    export default {
        name: "Shop",
      components: {
        ShopBottomBar,
        NavBar,
        ShopList
      },
      computed: {
        shopLength() {
          return this.$store.state.shopList.length
        }
      },
      methods: {
          contentScroll(position) {
            console.log(position)
          }

      }
    }
</script>

<style scoped>
  .shop{
    height: 100vh;
  }
  .shop-bar{
    background-color: var(--color-tint);
  }
</style>
