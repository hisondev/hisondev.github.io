<script setup lang="ts">
import { getUUID } from '@/common/utils';
import CodeParagraph from '@/components/CodeParagraph.vue';
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
        <HGap/>
        <HCaption class="hison-col-12" :key="getKey()">{{ contents.caption }}</HCaption>
        <HGap :line="'horizontal'"/>
        <HParagraph :key="getKey()">{{ contents.t1000 }}</HParagraph>
        <HLabel
            :href="contents.h1000"
            :anchor-attrs="{target: '_blank'}"
            :border="true"
            :key="getKey()"
        >{{ contents.co1000 }}</HLabel>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1005 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c1000"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1010 }}</HParagraph>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1020 }}</HParagraph>
        <HList class="hison-col-12" listItemStyle="margin: 0;">
            <HLabel :key="getKey()">{{ contents.t1030 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t1040 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t1050 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t1060 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t1070 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t1080 }}</HLabel>
        </HList>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1090 }}</HParagraph>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1100 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c1100"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1110 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c1110"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1120 }}</HParagraph>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1130 }}</HParagraph>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1140 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c1140"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1150 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c1150"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1160 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c1160"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1170 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c1170"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1180 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c1180"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1190 }}</HParagraph>
        <HList class="hison-col-12" listItemStyle="margin: 0;">
            <HLabel :key="getKey()">{{ contents.t1200 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t1210 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t1220 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t1230 }}</HLabel>
        </HList>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1240 }}</HParagraph>
        <HGap/>
        <HGap/>
    </HLayout>
</template>

<style scoped>
</style>