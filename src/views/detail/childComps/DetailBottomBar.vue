<template>
  <div class="bottom-bar">
    <div class="bar-left">
      <div class="left-item">
        <img src="../../../assets/img/detail/service.png">
        <p>客服</p>
      </div>
      <div class="left-item">
        <img src="~assets/img/detail/shop.png">
        <p>店铺</p>
      </div>
      <div class="left-item">
        <img src="~assets/img/detail/collection.png">
        <p>收藏</p>
      </div>
    </div>
    <div class="bar-right">
      <div class="right-item1" @click="addToShop">加入购物车</div>
      <div class="right-item2">购买</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "DetailBottomBar",
      methods: {
          addToShop() {
            this.$emit('addShop');
          }
      }
    }
</script>

<style scoped>
  .bottom-bar{
    background-color: #fff;
    height: 49px;
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
  }

  .bar-left{
    display: flex;
    flex: 1;
    font-size: 12px;
  }
  .left-item{
    flex: 1;
    text-align: center;
  }
  .left-item img{
    width: 20px;
    height: 20px;
    margin-top: 8px
  }
  .bar-right{
    background-color: #a2f567;
    display: flex;
    flex: 1;
  }
  .right-item1, .right-item2{
    flex: 1;
    text-align: center;
    line-height: 49px;
    font-size: 14px;
  }
  .right-item1{
    background-color: orange;
  }
  .right-item2{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
