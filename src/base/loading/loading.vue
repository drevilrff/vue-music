<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-28 22:15:19
 * @LastEditTime: 2019-08-28 22:34:46
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="loading">
    <img src="./loading.gif" width="24" height="24" />
    <p class="desc">{{ title }}</p>
  </div>
</template>

<script type="text/ecmascript-6" >
export default {
  name: "laoding",
  props: {
    title: {
      type: String,
      default: "正在载入..."
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable';

.loading {
  width: 100%;
  text-align: center;

  .desc {
    line-height: 20px;
    font-size: $font-size-small;
    color: $color-text-l;
  }
}
</style>