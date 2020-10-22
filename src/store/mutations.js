export default {
  //mutations唯一目的就是修改state中状态
  //mutations中的每个方法尽可能完成的事情单一
  addCounter(state, payload) {
    payload.count++
  },
  addToShop(state,payload) {
    payload.checked = true;
    state.shopList.push(payload)
  }
}
