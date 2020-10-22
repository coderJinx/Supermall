<template>
  <div class="listitem">
    <div class="item-selector" >
      <check-button :is-checked="product.checked" @click.native="checkClick"></check-button>
    </div>
    <div class="item-image">
      <img :src="product.image">
    </div>
    <div class="item-info">
      <p class="info-title">{{product.title}}</p>
      <p class="info-desc">{{product.desc}}</p>
      <div class="info-p-c">
        <span class="info-price">￥{{product.price}}</span>
        <span class="info-count"> X{{product.count}}</span>
      </div>
    </div>
<!--    {{product}}-->
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'
    export default {
        name: "ShopListItem",
      components: {
          CheckButton
      },
      props: {
          product: {
            type: Object
          }
      },
      methods: {
        checkClick() {
          this.product.checked = !this.product.checked
        }
      }
    }
</script>

<style scoped>
  .listitem{
    height: 120px;
    width: 100%;
    display: flex;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.3);
  }
  .item-image{
    height: 120px;
    width: 100px;
    flex: 1;
  }
  .item-image img{
    height: 100px;
    width: 70px;
    margin-left: 10px;
    margin-top: 10px;
    border-radius: 5px;
  }
  .item-info{
    flex: 2;
    height: 120px;
  }
  .info-title, .info-desc{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    height: 40px;
    width: 200px;
    line-height: 40px;
  }
  .info-title{

  }
  .info-desc{
    font-size: 12px;
  }
  .info-p-c{
    height: 40px;
    font-size: 14px;
  }
  .info-price{
    line-height: 40px;
    color: orangered;
  }
  .info-count{
    padding-left: 120px;
  }
  .item-selector{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    margin-left: 2px;
    margin-top: 50px;
  }
</style>
