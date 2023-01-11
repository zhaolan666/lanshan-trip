<!--
 * @Author: your name
 * @Date: 2022-12-25 14:41:26
 * @LastEditTime: 2022-12-25 14:41:41
 * @LastEditors: LAPTOP-6HFF930K
 * @Description: In User Settings Edit
 * @FilePath: \lan-trip\src\components\loading\loading.vue
-->

<template>
  <div class="loading" v-show="mainStore.isLoading" @click="loadingClick">
    <div class="bg">
      <img src="@/assets/img/home/full-screen-loading.gif" alt="" />
    </div>
  </div>
</template>

<script setup>
import useMainStore from "@/stores/modules/main";

const mainStore = useMainStore();

const loadingClick = () => {
  mainStore.isLoading = false;
};
</script>

<style lang="less" scoped>
.loading {
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.2);

  .bg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 104px;
    height: 104px;
    background: url(@/assets/img/home/loading-bg.png) 0 0 / 100% 100%;

    img {
      width: 70px;
      height: 70px;
      margin-bottom: 8px;
    }
  }
}
</style>
