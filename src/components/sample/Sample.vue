<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
    lang: string
}>()

const ko = {
}

const en = {
}

const contents = props.lang === 'en' ? en : ko
</script>

<template>
  <HLayout :border="true" style="padding: 20px;">
  </HLayout>
</template>

<style scoped>
</style>