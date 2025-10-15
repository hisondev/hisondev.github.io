<script setup lang="ts">
import { getUUID } from '@/common/utils';
import { gettingStartedHisonjsContents } from '@/content/getting-started/hisonjs';
import type { Lang } from '@/store';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const contents = computed(() => gettingStartedHisonjsContents[store.state.lang as Lang])
const getKey = () => store.state.lang + getUUID()
</script>

<template>
    <HLayout>
        <HCaption :level="4" class="hison-col-12" :key="getKey()">{{ contents.caption }}</HCaption>
        <HGap/>
    </HLayout>
</template>

<style scoped>
</style>