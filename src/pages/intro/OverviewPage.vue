<script setup lang="ts">
import { getUUID } from '@/common/utils';
import { introOverviewContents } from '@/content/intro/overview';
import type { Lang } from '@/store';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const contents = computed(() => introOverviewContents[store.state.lang as Lang])
const getKey = () => store.state.lang + getUUID()
</script>

<template>
    <HLayout>
        <HGap/>
        <HCaption class="hison-col-12" :key="getKey()">{{ contents.caption }}</HCaption>
        <HGap :line="'horizontal'"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1000 }}</HParagraph>
        <HGap :line="'horizontal'"/>
        <HCaption :level="4" class="hison-col-12" :key="getKey()">{{ contents.subhead1 }}</HCaption>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t2000 }}</HParagraph>
        <HGap style="height: 15px;"/>
        <HLabel :key="getKey()">{{ contents.t2010 }}</HLabel>
        <HLabel
            :href="contents.h2011"
            :anchor-attrs="{target: '_blank'}"
            :border="true"
            :key="getKey()"
        >{{ contents.t2011 }}</HLabel>
        <HList class="hison-col-12">
            <HLabel :href="contents.h2020" :anchor-attrs="{target: '_blank'}" :key="getKey()">{{ contents.t2020 }}</HLabel>
            <HLabel :href="contents.h2030" :anchor-attrs="{target: '_blank'}" :key="getKey()">{{ contents.t2030 }}</HLabel>
            <HLabel :href="contents.h2040" :anchor-attrs="{target: '_blank'}" :key="getKey()">{{ contents.t2040 }}</HLabel>
        </HList>
        <HGap :line="'horizontal'"/>
        <HCaption :level="4" class="hison-col-12" :key="getKey()">{{ contents.subhead2 }}</HCaption>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3000 }}</HParagraph>
        <HGap style="height: 15px;"/>
        <HLabel :key="getKey()">{{ contents.t3010 }}</HLabel>
        <HLabel
            :href="contents.h3011"
            :anchor-attrs="{target: '_blank'}"
            :border="true"
            :key="getKey()"
        >{{ contents.t3011 }}</HLabel>
        <HList class="hison-col-12">
            <HLabel :key="getKey()">{{ contents.t3020 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t3030 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t3040 }}</HLabel>
        </HList>
        <HGap :line="'horizontal'"/>
        <HCaption :level="4" class="hison-col-12" :key="getKey()">{{ contents.subhead3 }}</HCaption>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4000 }}</HParagraph>
        <HGap style="height: 15px;"/>
        <HLabel :key="getKey()">{{ contents.t4010 }}</HLabel>
        <HLabel
            :href="contents.h4011"
            :anchor-attrs="{target: '_blank'}"
            :border="true"
            :key="getKey()"
        >{{ contents.t4011 }}</HLabel>
        <HList class="hison-col-12">
            <HLabel :key="getKey()">{{ contents.t4020 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t4030 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t4040 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t4050 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t4060 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t4070 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t4080 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t4090 }}</HLabel>
        </HList>
        <HGap/>
        <HGap/>
    </HLayout>
</template>

<style scoped>
</style>