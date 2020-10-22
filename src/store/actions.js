export default {
  addShop(context, payload) {
    return new Promise((resolve, reject) => {
      //查找之前数组中是否有该商品
      let oldProduct = context.state.shopList.find(item => item.iid === payload.iid);
      //判断oldProduct
      if(oldProduct) {
        context.commit('addCounter', oldProduct)
        resolve('当前商品数量+1')
      } else {
        payload.count = 1;
        context.commit('addToShop', payload)
        resolve('添加了新的商品')
      }
    })
  }
}
