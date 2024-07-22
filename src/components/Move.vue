<script setup>
import { useRouter } from 'vue-router'
const router = useRouter();
</script>

<template>
  <div>
    <button @click="router.push('/about')">client-side move about call</button>
  </div>
</template>
