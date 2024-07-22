<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useCounterStore } from '../stores/counter'
const counter = useCounterStore()
const local = ref(0)

function increment() {
  counter.value += 1
}

onMounted(() => console.log('✅✅✅ mounted'))
onUnmounted(() => console.log('❌❌❌ dismounted'));
</script>

<template>
  <div>
    <button @click="counter.count++">Increment Pinia 🍍 {{ counter.count }}</button>

    <div @click="local += 1">Increment state ⛪ {{ local }}</div>
  </div>
</template>
