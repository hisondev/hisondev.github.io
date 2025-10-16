<script setup lang="ts">
import { getUUID } from '@/common/utils';
import { apiHisonjvContents } from '@/content/api/hisonjv';
import type { Lang } from '@/store';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const contents = computed(() => apiHisonjvContents[store.state.lang as Lang])
const getKey = () => store.state.lang + getUUID()
</script>

<template>
    <HLayout>
        <HGap/>
        <HCaption class="hison-col-12" :key="getKey()">{{ contents.caption }}</HCaption>
        <HGap :line="'horizontal'"/>
        <HGap/>
        <HGap/>
    </HLayout>
</template>

<style scoped>
</style>