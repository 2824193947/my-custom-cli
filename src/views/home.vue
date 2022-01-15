<script setup lang="ts"></script>

<template>
	<div class="h-full w-full bg-gray-700 flex flex-col justify-center items-center">
    <img src="../assets/logo.png" class="w-40 h-40 object-cover rounded-full border-8 border-white mb-5"/>
    <div>
      <router-link :to="{ name: 'admin.home' }" class="hd-button p-2">后台管理</router-link>
      <router-link :to="{ name: 'login' }" class="hd-button hd-danger p-2 ml-3 g-danger">用户登录</router-link>
    </div>
    <div class="mt-5 text-rose-50 text-sm font-mono drop-shadow-md">我的管理系统脚手架</div>
	</div>
</template>

<style lang="scss"></style>

<script lang="ts">
export default {
	route: { name: 'home' }
}
</script>
