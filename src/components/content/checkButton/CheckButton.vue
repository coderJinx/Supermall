<template>
  <div class="check-button" :class="{check: isChecked}">
    <img src="~assets/img/common/check.png">
  </div>
</template>

<script>
    export default {
        name: "CheckButton",
      props: {
        isChecked: {
          type: Boolean,
          default: false
        }
      }
    }
</script>

<style scoped>
  .check-button {
    height: 22px;
    width: 22px;
    border-radius: 50%;
    border: 2px solid gray;
  }
  .check{
    border-color: red;
    background-color: red;
  }
</style>
