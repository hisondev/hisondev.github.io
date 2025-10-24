<script setup lang="ts">
import { getUUID } from '@/common/utils';
import { introServerContents } from '@/content/intro/server';
import type { Lang } from '@/store';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const contents = computed(() => introServerContents[store.state.lang as Lang])
const getKey = () => store.state.lang + getUUID()

const dataModelBaggieOnClick = () => { window.open( contents.value.h2000, '_blank', 'noopener,noreferrer' ) }
const apiLinkBaggieOnClick = () => { window.open( contents.value.h3000, '_blank', 'noopener,noreferrer' ) }
const utilsBaggieOnClick = () => { window.open( contents.value.h4000, '_blank', 'noopener,noreferrer' ) }
</script>

<template>
    <HLayout style="min-height: calc(100vh - 110px);">
        <HGap/>
        <HCaption class="hison-col-12" :key="getKey()">{{ contents.caption }}</HCaption>
        <HGap :line="'horizontal'"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1000 }}</HParagraph>
        <HList class="hison-col-12" listItemStyle="margin: 0;">
            <HLabel :key="getKey()">{{ contents.t1030 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t1010 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t1020 }}</HLabel>
        </HList>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1040 }}</HParagraph>
        <HGap :line="'horizontal'"/>
        <HBaggie
            :text="contents.co1000"
            :backgroundType="'empty'"
            :shape="'rounded'"
            :buttonEnabled="true"
            style="cursor: pointer; transform: translate(50%, -25%)"
            @click="utilsBaggieOnClick"
        >
            <HCaption :level="4" :key="getKey()">{{ contents.subhead3 }}</HCaption>
        </HBaggie>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4000 }}</HParagraph>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4010 }}</HParagraph>
        <HList class="hison-col-12" listItemStyle="margin: 0;">
            <HLayout>
                <HLabel :key="getKey()">{{ contents.t4020 }}</HLabel>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4030 }}</HParagraph>
            </HLayout>
            <HLayout>
                <HLabel :key="getKey()">{{ contents.t4040 }}</HLabel>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4050 }}</HParagraph>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4060 }}</HParagraph>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4070 }}</HParagraph>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4080 }}</HParagraph>
            </HLayout>
        </HList>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4090 }}</HParagraph>
        <HList class="hison-col-12" listItemStyle="margin: 0;">
            <HLabel :key="getKey()">{{ contents.t4100 }}</HLabel>
        </HList>
        <HGap :line="'horizontal'"/>
        <HBaggie
            :text="contents.co1000"
            :backgroundType="'empty'"
            :shape="'rounded'"
            :buttonEnabled="true"
            style="cursor: pointer; transform: translate(50%, -25%)"
            @click="dataModelBaggieOnClick"
        >
            <HCaption :level="4" :key="getKey()">{{ contents.subhead1 }}</HCaption>
        </HBaggie>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t2000 }}</HParagraph>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t2010 }}</HParagraph>
        <HList class="hison-col-12" listItemStyle="margin: 0;">
            <HLayout>
                <HLabel :key="getKey()">{{ contents.t2020 }}</HLabel>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t2030 }}</HParagraph>
            </HLayout>
            <HLayout>
                <HLabel :key="getKey()">{{ contents.t2040 }}</HLabel>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t2050 }}</HParagraph>
            </HLayout>
        </HList>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t2060 }}</HParagraph>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t2070 }}</HParagraph>
        <HList class="hison-col-12" listItemStyle="margin: 0;">
            <HLabel :key="getKey()">{{ contents.t2080 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t2090 }}</HLabel>
        </HList>
        <HGap :line="'horizontal'"/>
        <HBaggie
            :text="contents.co1000"
            :backgroundType="'empty'"
            :shape="'rounded'"
            :buttonEnabled="true"
            style="cursor: pointer; transform: translate(50%, -25%)"
            @click="apiLinkBaggieOnClick"
        >
            <HCaption :level="4" :key="getKey()">{{ contents.subhead2 }}</HCaption>
        </HBaggie>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3000 }}</HParagraph>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3010 }}</HParagraph>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3020 }}</HParagraph>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3030 }}</HParagraph>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3040 }}</HParagraph>
        <HList class="hison-col-12" listItemStyle="margin: 0;">
            <HLayout>
                <HLabel :key="getKey()">{{ contents.t3050 }}</HLabel>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3060 }}</HParagraph>
            </HLayout>
            <HLayout>
                <HLabel :key="getKey()">{{ contents.t3070 }}</HLabel>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3080 }}</HParagraph>
            </HLayout>
            <HLayout>
                <HLabel :key="getKey()">{{ contents.t3090 }}</HLabel>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3100 }}</HParagraph>
            </HLayout>
            <HLayout>
                <HLabel :key="getKey()">{{ contents.t3110 }}</HLabel>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3120 }}</HParagraph>
            </HLayout>
            <HLayout>
                <HLabel :key="getKey()">{{ contents.t3130 }}</HLabel>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3140 }}</HParagraph>
            </HLayout>
            <HLayout>
                <HLabel :key="getKey()">{{ contents.t3150 }}</HLabel>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3160 }}</HParagraph>
            </HLayout>
        </HList>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3170 }}</HParagraph>
        <HList class="hison-col-12" listItemStyle="margin: 0;">
            <HLabel :key="getKey()">{{ contents.t3180 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t3190 }}</HLabel>
        </HList>
        <HGap :line="'horizontal'"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t5000 }}</HParagraph>
        <HGap/>
        <HGap/>
    </HLayout>
</template>

<style scoped>
</style>