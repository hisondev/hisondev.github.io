<script setup lang="ts">
import { getUUID } from '@/common/utils';
import { introAboutAuthorContents } from '@/content/intro/about-author';
import type { Lang } from '@/store';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const contents = computed(() => introAboutAuthorContents[store.state.lang as Lang])
const getKey = () => store.state.lang + getUUID()
</script>

<template>
    <HLayout style="min-height: calc(100vh - 110px);">
        <HGap/>
        <HCaption class="hison-col-12" :key="getKey()">{{ contents.caption }}</HCaption>
        <HGap :line="'horizontal'"/>
        <HGap/>
        <HGap/>
    </HLayout>
</template>

<style scoped>
</style>