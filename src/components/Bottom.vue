<template>
  <div class="bottom flex">
      <div 
      class="fg"
      v-for="(item,index) in menus"
      :class='{active:activeIndex==index?true:false}'>
        {{item.text}}
      </div>
  </div>
</template>

<script>
export default {
  props:['menus','activeIndex']
}
</script>


<style lang="scss" scoped>
.bottom{
    height: 50px;
    width: 100%;
    position: fixed;
    left:0;
    bottom:0;
    div{
        text-align: center;
        line-height: 50px;
        font-size: 16px;
        letter-spacing: 5px;
        &.active{
            background: darkorange;
            color:#fff;
        }
    }
}
</style>

