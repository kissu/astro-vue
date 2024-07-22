<script setup>
let router = null

if (import.meta.env.SSR) {
  let { useRouter } = import('vue-router')
  console.log('a', useRouter)
  const router = useRouter
  console.log('a', router);
}
</script>

<template>
  <button @click="router.push('/about')">move to about</button>
</template>
