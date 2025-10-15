<script setup lang="ts">
import { apiHisonvueContents } from '@/content/api/hisonvue';
import type { Lang } from '@/store';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const contents = computed(() => apiHisonvueContents[store.state.lang as Lang])
</script>

<template>
    <HLayout>
        <HCaption :level="4" class="hison-col-12" :key="store.state.lang">{{ contents.caption }}</HCaption>
        <HGap/>
    </HLayout>
</template>

<style scoped>
</style>