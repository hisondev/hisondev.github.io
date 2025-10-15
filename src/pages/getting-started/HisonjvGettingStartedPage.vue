<script setup lang="ts">
import { gettingStartedHisonjvContents } from '@/content/getting-started/hisonjv';
import type { Lang } from '@/store';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const contents = computed(() => gettingStartedHisonjvContents[store.state.lang as Lang])
</script>

<template>
    <HLayout>
        <HCaption :level="4" class="hison-col-12" :key="store.state.lang">{{ contents.caption }}</HCaption>
        <HGap/>
    </HLayout>
</template>

<style scoped>
</style>