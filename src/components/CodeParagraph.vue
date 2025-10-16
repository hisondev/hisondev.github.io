<script setup lang="ts">
import { defineProps } from 'vue'

// props 정의
const props = defineProps<{
    key: string
    code: string
}>()
</script>

<template>
    <HParagraph
        class="hison-col-6-pc hison-col-12-mb"
        :border="true"
        :copy-enabled="true"
        :show-copy-button="true"
        style="font-family: 'Courier New', Courier, monospace; margin-bottom: 10px;"
        :key="props.key"
    >
        {{ props.code }}
    </HParagraph>
</template>

<style scoped>
</style>
