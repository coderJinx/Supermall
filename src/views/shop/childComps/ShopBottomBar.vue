<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-all" :is-checked="isSelectAll" @click.native="checkClick"></check-button>
      <span>全选</span>
    </div>
    <div class="total-price">合计: {{totalPrice}}</div>
    <div class="accounts" @click="accClick">去结算: {{checkLength}}</div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'
    export default {
        name: "ShopBottomBar",
      components: {
          CheckButton
      },
      computed: {
          //选中商品总价
          totalPrice() {
            //filter: 筛选符合条件的信息
            return '￥' + this.$store.state.shopList.filter(item => {
              return item.checked
            }).reduce((previousValue, item) => {
              return previousValue + item.price * item.count
            }, 0).toFixed(2)
          },
          //选中商品数量
          checkLength() {
            return this.$store.state.shopList.filter(item => item.checked).length
          },
          //判断全选按钮状态
          isSelectAll() {
            if (this.$store.state.shopList.length === 0) return false;
            return !this.$store.state.shopList.find(item => !item.checked)
          }
      },
      methods: {
        //全选按钮功能实现
        checkClick() {
          if(this.isSelectAll) { //全部选中
            this.$store.state.shopList.forEach(item => item.checked = false)
          } else { //部分或全部不选中
            this.$store.state.shopList.forEach(item => item.checked = true)
          }
        },
        //结算按钮信息提示
        accClick() {
          if(!this.isSelectAll) {
            this.$toast.show('请选择要购买的商品', 1500)
          }
        }
      }
    }
</script>

<style scoped>
  .bottom-bar{
    height: 40px;
    /*background-color: orangered;*/
    position: relative;
    display: flex;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1);
    font-size: 14px;
  }
  .check-content{
    display: flex;
    width: 80px;
    height: 100%;
    margin-left: 12px;
  }
  .check-all{
    height: 22px;
    width: 22px;
    margin-top: 8px;
  }
  .check-content span{

    line-height: 40px;
    margin-left: 8px;
  }
  .total-price{
    line-height: 40px;
    flex: 1;
  }
  .accounts{
    width: 90px;
    background-color: orangered;
    /*margin-left: 45px;*/
    line-height: 40px;
    text-align: center;
    color: #fff;
  }
</style>
