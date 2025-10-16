<script setup lang="ts">
import { getUUID } from '@/common/utils';
import { apiHisonvueContents } from '@/content/api/hisonvue';
import type { Lang } from '@/store';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const contents = computed(() => apiHisonvueContents[store.state.lang as Lang])
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