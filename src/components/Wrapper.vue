<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n();
</script>

<template>
  <div>
    <p class="flex align-items"><button class="flex-[1] inline w-12 h-12 border-2 rounded-lg"
        @click="$i18n.locale = $i18n.locale === 'fr' ? 'en' : 'fr'">🌎</button> <span class="flex-[4]"> ___ {{
          t('message.hello') }} this is the wrapper</span></p>
    <slot />
  </div>
</template>
