<script setup>
import { useCounterStore } from '../stores/counter'
const counter = useCounterStore()
</script>

<template>
  <div>
    counter {{ counter.count }}
    <p>nice meme from About-vue</p>
  </div>
</template>
