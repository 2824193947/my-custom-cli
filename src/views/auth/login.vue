<script setup lang="ts">
import utils from '@/utils/index'
import v from '@/plugins/validate/index'
import { reactive, ref } from 'vue'
import { login } from '@/api/user'
// 引入表单校验库
const { Form, Field, ErrorMessage } = v
// data
const account = ref('')
const password = ref<number>()

const schema = {
	account: {required: true, email: true},
	password: {required: true, min: 3}
}
const onSubmit = async (values: object) => {
	const {data: { token }}  = await login(values)
	utils.store.setLocalstore('token', { token, expire: 3})
}
const getToken = () => {
	console.log(utils.store.getLocalstore('token'));
}
</script>

<template>
  <Form @submit="onSubmit" :validation-schema="schema" class="bg-slate-300 h-screen flex justify-center items-center p-5" #default="{ errors }">
		<div
			class="w-[720px] bg-white md:grid grid-cols-2 rounded-md shadow-md overflow-hidden"
		>
			<div class="p-6">
				<h2 class="text-center text-gray-700 text-lg mt-3">会员登录</h2>
				<article class="mt-8">
					<Field value="2824193947@qq.com" name="account" class="g-input" label="账号" placeholder="输入账号"></Field>
					<div v-if="errors.account" class="g-error">请输入邮箱</div>
					<Field value="123123123" name="password" class="g-input" label="密码" type="password" placeholder="输入密码"></Field>
					<ErrorMessage name="password" as="div" class="g-error"></ErrorMessage>
				</article>
				<g-button/>
				<article class="flex gap-2 justify-center items-center mt-5">
					<a href="javascript:void" class="text-xs text-gray-700">会员注册</a>
					<a href="javascript:void" class="text-xs text-gray-700">找回密码</a>
					<a href="javascript:void" class="text-xs text-gray-700">找回密码</a>
				</article>
				<article class="flex gap-2 justify-center items-center mt-5">
					<i class="fab fa-weixin bg-green-600 text-white rounded-full cursor-pointer p-1"></i>
				</article>
			</div>
			<div class="hidden md:block relative">
				<img src="/images/login.jpg" class="absolute h-full w-full object-cover" />
			</div>
		</div>
	</Form>
</template>

<style lang="scss" scoped>
.g-input {
  @apply border w-full rounded-sm py-1 px-2 outline-none border-gray-200 placeholder:text-xs focus:ring-2 ring-offset-1 ring-blue-600 duration-300 focus:border-white mb-2 mt-2;
}
.g-error {
  @apply rounded-md bg-pink-600 text-white text-xs px-2 py-1;
}
</style>
