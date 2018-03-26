<template>
<div>
    <c-header :hasRight='top.hasRight' :title='top.title'></c-header>
    <c-bottom :menus='bottom.menus' :activeIndex='bottom.activeIndex'></c-bottom>
</div>
  
</template>

<script>
import cHeader from "../components/Header";
import cBottom from "../components/Bottom";
export default {
  data() {
      return{
          top:{
              hasLeft:false,
              hasRight:true,
              title:'HOME'
          },
          bottom:{
              activeIndex:0,
              menus:[{
                  text:'我的',
                  pathName:'home'
              },{
                  text:'新增',
                  pathName:'newFund'
              }]
          }
      }
  },
  components: {
    cHeader,
    cBottom
  }
};
</script>

<style lang="scss" scoped>

</style>


