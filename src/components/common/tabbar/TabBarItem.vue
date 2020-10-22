<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle" ><slot name="item-text"></slot></div>
  </div>
</template>

<script>
    export default {
        name: "TabBarItem",
      props: {
          path: String,
          activeColor: {
            type: String,
            default: 'blue'
          }
      },
      data() {
          return {
            // isActive: true,
          }
      },
      computed: {
        isActive(){
          //不等于-1表示indexOf（）方法找到了对应值
          //$route永远表示处于活跃的组件
          return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle(){
          return this.isActive ? {color: this.activeColor} : {}
        }

      },
      methods: {
          itemClick(){
            this.$router.replace(this.path)
          }
      }
    }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top:3px;
    margin-bottom: 2px;
    vertical-align: middle;
  }
  .active{
    color: #1c92d0;
  }
</style>
