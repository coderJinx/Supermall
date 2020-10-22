<template>
  <div class="content">
<!--    <h2>分类</h2>-->
    <ul>
      <li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li><li>test</li>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'


  export default {
        name: "Categroy",
      data(){
          return{
            scroll: null,
          }
      },
      mounted() {
        //默认的情况下BScroll是不可以实时的监听滚动位置
        //0, 1 都是不侦测实时的位置
        //2: 在手指滚动的过程中侦测。手指离开后的惯性过程中不侦测
        //3: 只要是滚动都侦测
        this.scroll = new BScroll('.content', {
            probeType: 2,
            pullUpLoad : true
         });

        //监听滚动
        this.scroll.on('scroll', (position) => {
          console.log(position)
        });

        //上拉加载更多
        this.scroll.on('pullingUp', () => {
          console.log('上拉加载更多')
        })

      }

    }

</script>

<style scoped>
  .content{
    height: 300px;
    /*overflow: hidden;*/
    background-color: red;
  }
</style>
