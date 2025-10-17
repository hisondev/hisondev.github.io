<script setup lang="ts">
import { getUUID } from '@/common/utils';
import { introClientContents } from '@/content/intro/client';
import type { Lang } from '@/store';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const contents = computed(() => introClientContents[store.state.lang as Lang])
const getKey = () => store.state.lang + getUUID()

const hisonjsBaggieOnClick = () => { window.open( contents.value.h2000, '_blank', 'noopener,noreferrer' ) }
const hisonvueBaggieOnClick = () => { window.open( contents.value.h3000, '_blank', 'noopener,noreferrer' ) }
</script>

<template>
    <HLayout>
        <HGap/>
        <HCaption class="hison-col-12" :key="getKey()">{{ contents.caption }}</HCaption>
        <HGap :line="'horizontal'"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1000 }}</HParagraph>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1010 }}</HParagraph>
        <HGap :line="'horizontal'"/>
        <HBaggie
            :text="contents.co1000"
            :backgroundType="'empty'"
            :shape="'rounded'"
            :buttonEnabled="true"
            style="cursor: pointer; transform: translate(50%, -25%)"
            @click="hisonjsBaggieOnClick"
        >
            <HCaption :level="4" :key="getKey()">{{ contents.subhead1 }}</HCaption>
        </HBaggie>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t2000 }}</HParagraph>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t2010 }}</HParagraph>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t2020 }}</HParagraph>
        <HList class="hison-col-12" listItemStyle="margin: 0;">
            <HLabel :key="getKey()">{{ contents.t2030 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t2040 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t2050 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t2060 }}</HLabel>
        </HList>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t2070 }}</HParagraph>
        <HList class="hison-col-12" listItemStyle="margin: 0;">
            <HLabel :key="getKey()">{{ contents.t2080 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t2090 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t2100 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t2110 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t2120 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t2130 }}</HLabel>
        </HList>
        <HGap :line="'horizontal'"/>
        <HBaggie
            :text="contents.co1000"
            :backgroundType="'empty'"
            :shape="'rounded'"
            :buttonEnabled="true"
            style="cursor: pointer; transform: translate(50%, -25%)"
            @click="hisonvueBaggieOnClick"
        >
            <HCaption :level="4" :key="getKey()">{{ contents.subhead2 }}</HCaption>
        </HBaggie>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3000 }}</HParagraph>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3010 }}</HParagraph>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3020 }}</HParagraph>
        <HList class="hison-col-12" listItemStyle="margin: 0;">
            <HLabel :key="getKey()">{{ contents.t3030 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t3040 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t3050 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t3060 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t3070 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t3080 }}</HLabel>
        </HList>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3090 }}</HParagraph>
        <HTable
            :key="getKey()"
            class="hison-col-6-pc hison-col-12-mb"
            style="margin-bottom: 10px;"
        >  
            <tr>
                <td>{{ contents.t3100 }}</td>
                <td>{{ contents.t3110 }}</td>
            </tr>
            <tr>
                <td>{{ contents.t3120 }}</td>
                <td>{{ contents.t3130 }}</td>
            </tr>
            <tr>
                <td>{{ contents.t3140 }}</td>
                <td>{{ contents.t3150 }}</td>
            </tr>
            <tr>
                <td>{{ contents.t3160 }}</td>
                <td>{{ contents.t3170 }}</td>
            </tr>
            <tr>
                <td>{{ contents.t3180 }}</td>
                <td>{{ contents.t3190 }}</td>
            </tr>
        </HTable>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3200 }}</HParagraph>
        <HTable
            :key="getKey()"
            class="hison-col-6-pc hison-col-12-mb"
            style="margin-bottom: 10px;"
        >  
            <tr>
                <td>{{ contents.t3210 }}</td>
                <td>{{ contents.t3220 }}</td>
            </tr>
            <tr>
                <td>{{ contents.t3230 }}</td>
                <td>{{ contents.t3240 }}</td>
            </tr>
            <tr>
                <td>{{ contents.t3250 }}</td>
                <td>{{ contents.t3260 }}</td>
            </tr>
            <tr>
                <td>{{ contents.t3270 }}</td>
                <td>{{ contents.t3280 }}</td>
            </tr>
            <tr>
                <td>{{ contents.t3290 }}</td>
                <td>{{ contents.t3300 }}</td>
            </tr>
            <tr>
                <td>{{ contents.t3310 }}</td>
                <td>{{ contents.t3320 }}</td>
            </tr>
            <tr>
                <td>{{ contents.t3330 }}</td>
                <td>{{ contents.t3340 }}</td>
            </tr>
        </HTable>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3350 }}</HParagraph>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3360 }}</HParagraph>
        <HList class="hison-col-12" listItemStyle="margin: 0;">
            <HLabel :key="getKey()">{{ contents.t3370 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t3380 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t3390 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t3400 }}</HLabel>
        </HList>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3410 }}</HParagraph>
        <HList class="hison-col-12" listItemStyle="margin: 0;">
            <HLabel :key="getKey()">{{ contents.t3420 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t3430 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t3440 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t3450 }}</HLabel>
        </HList>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3460 }}</HParagraph>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3470 }}</HParagraph>
        <HList class="hison-col-12" listItemStyle="margin: 0;">
            <HLabel :key="getKey()">{{ contents.t3480 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t3490 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t3500 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t3510 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t3520 }}</HLabel>
        </HList>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3530 }}</HParagraph>
        <HGap :line="'horizontal'"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4000 }}</HParagraph>
        <HGap/>
        <HGap/>
    </HLayout>
</template>

<style scoped>
</style>