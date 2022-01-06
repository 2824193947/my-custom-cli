<template>
  <div class="text-3xl font-bold underline">admin.user</div>
</template>

<script setup lang="ts">
import * as userApi from '@/api/user'
userApi.user().then(res => {
  console.log(res);
})
</script>

<style lang="scss" scoped></style>
