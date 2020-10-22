<template>
    <div id="home" class="wrapper">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <tab-control :titles="['流行', '新款', '精选']"
                   @tabClick="tabClick"
                   ref='tabControl1'
                   class="tab-control"
                   v-show="isTabFixed">
      </tab-control>

      <scroll class="content"
              ref="scroll"
              @scroll="contentScroll"
              :probe-type="3"
              :pull-up-load="true"
              @pullingUp="loadMore">
        <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
        <recommend-view :recommends="recommends"></recommend-view>
        <feature-view></feature-view>
        <tab-control :titles="['流行', '新款', '精选']"
                     @tabClick="tabClick"
                     ref='tabControl2'>
        </tab-control>
        <goods-list :goods="showGoods"></goods-list>
      </scroll>

      <back-top @click.native="backClick"  v-show="isShowBackTop"></back-top>  <!--native监听组件原生事件-->
    </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'

  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backtop/BackTop'

  import {getHomeMultidata, getHomeGoods} from "network/home";
    export default {
      name: "Home",
      data(){
          return{
            banners: [],
            recommends: [],
            goods: {
              'pop': {page: 0, list: []},
              'new': {page: 0, list: []},
              'sell': {page: 0, list: []}
            },
            currentType: 'pop',
            isShowBackTop: false,
            tabOffsetTop: 0,
            isTabFixed: false,
            saveY: 0
          }
      },
      components: {
        NavBar,
        HomeSwiper,
        RecommendView,
        FeatureView,
        TabControl,
        GoodsList,
        Scroll,
        BackTop
      },
      activated(){
        this.$refs.scroll.refresh();
        this.$refs.scroll.scrollTo(0, this.saveY, 0);
      },
      deactivated(){
        this.saveY = this.$refs.scroll.getScrollY()
      },
      created() {
          //请求多个数据
          this.getHomeMultidata();
          //请求商品数据
          this.getHomeGoods('pop');
          this.getHomeGoods('new');
          this.getHomeGoods('sell');
      },
      mounted() {
        //监听item中图片加载完成
        const refresh = this.debounce(this.$refs.scroll.refresh);
        this.$bus.$on('itemImageLoad', () => {
          refresh()
        });
      },
      computed: {
          showGoods(){
            return this.goods[this.currentType].list
          }
      },
      methods: {
          //监听事件相关方法
          debounce(func, delay) {
            let timer = null;
            return function (...args) {
              if (timer) clearTimeout(timer)
              timer = setTimeout(() => {
                func.apply(this, args)
              }, delay)
            }
          },
          tabClick(index){
            switch (index) {
              case 0 :
                this.currentType = 'pop';
                    break;
              case 1 :
                this.currentType = 'new';
                    break;
              case 2 :
                this.currentType = 'sell';
            }
            this.$refs.tabControl1.currentIndex = index;
            this.$refs.tabControl2.currentIndex = index;
          },
          backClick(){
            this.$refs.scroll.scrollTo(0, 0)
          },
          contentScroll(position){
            //判断BackTop是否显示
            this.isShowBackTop = (-position.y) > 1000;
            //决定tabControl是否吸顶(position: fixed)
            this.isTabFixed = (-position.y) > this.tabOffsetTop
          },
          loadMore(){
            this.getHomeGoods(this.currentType)
          },
          swiperImageLoad(){
            //获取tabControl的offsetTop
            //每个组件都有一个属性$el 用于获取组件中的元素
            this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
            // console.log(this.tabOffsetTop)
          },
          //网络请求相关方法
          getHomeMultidata(){
            getHomeMultidata().then(res => {
              this.banners = res.data.banner.list;
              this.recommends = res.data.recommend.list;
            })
          },
          getHomeGoods(type){
            const page = this.goods[type].page + 1;
            getHomeGoods(type, page).then(res => {
              this.goods[type].list.push(...res.data.list);
              this.goods[type].page += 1;

              //保证实现多次上拉加载更多
              this.$refs.scroll.finishPullUp()
            })
          }
      }
    }
</script>

<style scoped>
  #home{
    /*padding-top: 44px;*/
    /*视口*/
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
    /*在使用浏览器原生滚动时，为了不让导航栏一起滚动*/
    /*position: fixed;*/
    /*top: 0;*/
    /*left: 0;*/
    /*z-index: 9;*/
  }
  /*.tab-control{*/
  /*  position: sticky;*/
  /*  top: 44px;*/
  /*  z-index: 9;*/
  /*}*/
  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
  }
  .tab-control{
    position: relative;
    z-index: 9;
  }
</style>
