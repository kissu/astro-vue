<script setup>
import { ref, watch } from 'vue'
import Slider from 'primevue/slider';

const emit = defineEmits(['bip'])
const props = defineProps(['sliderValue']);
const value = ref(props.sliderValue || 75);

watch(value, (val) => {
  emit('bip', val)
});
</script>

<template>
  <div class="flex flex-col">
    <slot name="header">This is the default header</slot>
    <div class="flex flex-row items-center justify-center gap-x-4 card w-96 ">
      <div>{{ value }}</div>
      <Slider v-model="value" />
    </div>
    <div>
      <slot name="footer">default slot</slot>
    </div>
  </div>
</template>

<style src="./style.css"></style>
