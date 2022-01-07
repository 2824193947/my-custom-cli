<template>
  <div class="bg-slate-300 h-screen flex justify-center items-start items-center p-5">
		<div
			class="w-[720px] bg-white md:grid grid-cols-2 rounded-md shadow-md overflow-hidden"
		>
			<div class="p-6">
				<h2 class="text-center text-gray-700 text-lg mt-3">会员登录</h2>
				<div class="mt-8">
					<g-input v-model="from.authNumber"/>
					<g-input class="mt-5"/>
				</div>
				<g-button/>
				<div class="flex gap-2 justify-center mt-5">
					<a class="text-xs text-gray-700 hover:text-violet-700">网站首页</a>
					<a href="javascript:void" class="text-xs text-gray-700">会员注册</a>
					<a href="javascript:void" class="text-xs text-gray-700">找回密码</a>
					<a href="javascript:void" class="text-xs text-gray-700">找回密码</a>
				</div>
			</div>
			<div class="hidden md:block">
				<img src="/images/login.jpg" class="h-96 w-full object-cover" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const from = reactive({ authNumber: 0 })
</script>

<style lang="scss" scoped>
</style>
