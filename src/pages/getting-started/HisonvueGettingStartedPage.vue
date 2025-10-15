<script setup lang="ts">
import { gettingStartedHisonvueContents } from '@/content/getting-started/hisonvue';
import type { Lang } from '@/store';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const contents = computed(() => gettingStartedHisonvueContents[store.state.lang as Lang])
</script>

<template>
    <HLayout>
        <HCaption :level="4" class="hison-col-12" :key="store.state.lang">{{ contents.caption }}</HCaption>
        <HGap/>
    </HLayout>
</template>

<style scoped>
</style>