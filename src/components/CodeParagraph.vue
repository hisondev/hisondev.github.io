<script setup lang="ts">
import { defineProps } from 'vue'

const props = withDefaults(
  defineProps<{
    code: string
    dynamicWidth?: boolean
  }>(),
  {
    dynamicWidth: true,
  }
)
</script>

<template>
    <HParagraph
        :class="[
            dynamicWidth ? 'hison-col-6-pc hison-col-12-mb' : 'hison-col-10',
        ]"
        :border="true"
        :copy-enabled="true"
        :show-copy-button="true"
        :translate="false"
        style="font-family: 'Courier New', Courier, monospace; margin-bottom: 10px;"
    >
        {{ props.code }}
    </HParagraph>
</template>

<style scoped>
</style>
