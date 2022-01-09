<script setup lang="ts">
import v from '@/plugins/validate/index'
import { reactive, ref } from 'vue'

const { Form, Field, ErrorMessage } = v
const account = ref('')
const password = ref<number>()
const schema = {
	account: {required: true, email: true},
	password: {required: true, min: 3}
}
const onSubmit = (values: object) => {
	console.log("🚀 ~ values", values)
}
</script>

<template>
  <Form @submit="onSubmit" :validation-schema="schema" class="bg-slate-300 h-screen flex justify-center items-center p-5">
		<div
			class="w-[720px] bg-white md:grid grid-cols-2 rounded-md shadow-md overflow-hidden"
		>
			<div class="p-6">
				<h2 class="text-center text-gray-700 text-lg mt-3">会员登录</h2>
				<div class="mt-8">
					<Field name="account" class="g-input" label="账号" placeholder="输入账号"></Field>
					<ErrorMessage name="account" as="div" class="g-error"></ErrorMessage>
					<Field name="password" class="g-input" label="密码" type="password" placeholder="输入密码"></Field>
					<ErrorMessage name="password" as="div" class="g-error"></ErrorMessage>
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
	</Form>
</template>

<style lang="scss" scoped>
.g-input {
  @apply border w-full rounded-sm py-1 px-2 outline-none border-gray-200 placeholder:text-xs focus:ring-2 ring-offset-1 ring-blue-600 duration-300 focus:border-white mb-2 mt-1;
}
.g-error {
  @apply rounded-md bg-pink-600 text-white text-xs px-2 py-1;
}
</style>
