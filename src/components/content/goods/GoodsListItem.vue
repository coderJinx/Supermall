<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="showImage" @load="imageLoad">
    <div class="goods-info">
      <p>{{listItem.title}}</p>
      <span class="price">{{listItem.price}}</span>
      <span class="collect">{{listItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "GoodsListItem",
      props: {
        listItem: {
          type: Object,
          default(){
            return {}
          }
        }
      },
      computed: {
        //保证其他组件使用时图片路径不会出错
        showImage(){
          return this.listItem.image || this.listItem.show.img
        }

      },
      methods: {
        imageLoad(){
          if (this.$route.path.indexOf('/home')) {
            this.$bus.$emit('itemImageLoad')
          } else if (this.$route.path.indexOf('/detail')) {
            //详情页推荐信息遇到滚动问题需要refresh()时添加
          }

        },
        itemClick(){
            this.$router.push('/detail/' + this.listItem.iid)
        }
      }
    }
</script>

<style scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;

  }
  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods-info .collect {
    position: relative;
  }
  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("../../../assets/img/goodslist/collect.svg") 0 0/14px 14px;
  }
</style>
