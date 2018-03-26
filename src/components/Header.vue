<template>
  <div class="all-center header">
      <div class="cIcon">
          <Icon v-show="hasLeft" type="ios-arrow-left" size="30" color="#fff"></Icon>
      </div>
      <div class="fg title">{{title}}</div>
      <div class="cIcon">
          <Icon v-show="hasRight" type="ios-search" size="30" color="#fff"></Icon>
      </div>
  </div>
</template>

<script>
export default {
  props:['hasLeft','hasRight','title']
}
</script>

<style lang="scss" scoped>
.header{
    height: 50px;
    width: 100%;
    background: darkorange;
    position: fixed;
    top:0;
    left:0;
    .cIcon{
        margin: 0 15px;
        width: 30px;
    }
    .title{
    text-align: center;
    font-size: 16px;
    letter-spacing: 3px;
    color:#fff;
}
}
</style>


