<script setup lang="ts">
import { getUUID } from '@/common/utils';
import CodeParagraph from '@/components/CodeParagraph.vue';
import { gettingStartedHisonjvContents } from '@/content/getting-started/hisonjv';
import type { Lang } from '@/store';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const contents = computed(() => gettingStartedHisonjvContents[store.state.lang as Lang])
const getKey = () => store.state.lang + getUUID()

const utilsBaggieOnClick = () => { window.open( contents.value.h2000, '_blank', 'noopener,noreferrer' ) }
const dataModelBaggieOnClick = () => { window.open( contents.value.h3000, '_blank', 'noopener,noreferrer' ) }
const apiLinkBaggieOnClick = () => { window.open( contents.value.h4000, '_blank', 'noopener,noreferrer' ) }
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
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1010 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c1010"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1020 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c1020"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1030 }}</HParagraph>
        <HGap :line="'horizontal'"/>
        <HBaggie
            :text="contents.co1000"
            :backgroundType="'empty'"
            :shape="'rounded'"
            :buttonEnabled="true"
            style="cursor: pointer; transform: translate(50%, -25%)"
            @click="utilsBaggieOnClick"
        >
            <HCaption :level="4" :key="getKey()">{{ contents.subhead1 }}</HCaption>
        </HBaggie>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t2000 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c2000"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t2010 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c2010"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t2020 }}</HParagraph>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t2030 }}</HParagraph>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t2040 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c2040"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t2050 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c2050"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t2060 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c2060"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t2070 }}</HParagraph>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.co1100 }}</HParagraph>

        <HGap :line="'horizontal'"/>
        <HBaggie
            :text="contents.co1000"
            :backgroundType="'empty'"
            :shape="'rounded'"
            :buttonEnabled="true"
            style="cursor: pointer; transform: translate(50%, -25%)"
            @click="dataModelBaggieOnClick"
        >
            <HCaption :level="4" :key="getKey()">{{ contents.subhead2 }}</HCaption>
        </HBaggie>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3000 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c3000"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3010 }}</HParagraph>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3020 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c3020"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3030 }}</HParagraph>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3040 }}</HParagraph>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3050 }}</HParagraph>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3060 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c3060"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3070 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c3070"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3080 }}</HParagraph>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3090 }}</HParagraph>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3100 }}</HParagraph>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3110 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c3110"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3120 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c3120"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3130 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c3130"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3140 }}</HParagraph>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3150 }}</HParagraph>
        <HList class="hison-col-12" listItemStyle="margin: 0;">
            <HLabel :key="getKey()">{{ contents.t3160 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t3170 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t3180 }}</HLabel>
            <HLabel :key="getKey()">{{ contents.t3190 }}</HLabel>
        </HList>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3200 }}</HParagraph>

        <HGap :line="'horizontal'"/>
        <HBaggie
            :text="contents.co1000"
            :backgroundType="'empty'"
            :shape="'rounded'"
            :buttonEnabled="true"
            style="cursor: pointer; transform: translate(50%, -25%)"
            @click="apiLinkBaggieOnClick"
        >
            <HCaption :level="4" :key="getKey()">{{ contents.subhead3 }}</HCaption>
        </HBaggie>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4000 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c4000"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4010 }}</HParagraph>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4020 }}</HParagraph>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4030 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c4030"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4040 }}</HParagraph>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4050 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c4050"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4060 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c4060"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4070 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c4080"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4090 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c4090"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4100 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c4100"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4110 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c4110"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4120 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c4120"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4130 }}</HParagraph>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4140 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c4140"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4150 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c4150"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4160 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c4160"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4170 }}</HParagraph>
        <HTable
            :key="getKey()"
            class="hison-col-6-pc hison-col-12-mb"
        >  
            <tr>
                <td>{{ contents.t4180 }}</td>
                <td>{{ contents.t4190 }}</td>
            </tr>
            <tr>
                <td>{{ contents.t4200 }}</td>
                <td>{{ contents.t4210 }}</td>
            </tr>
            <tr>
                <td>{{ contents.t4220 }}</td>
                <td>{{ contents.t4230 }}</td>
            </tr>
            <tr>
                <td>{{ contents.t4240 }}</td>
                <td>{{ contents.t4250 }}</td>
            </tr>
            <tr>
                <td>{{ contents.t4260 }}</td>
                <td>{{ contents.t4270 }}</td>
            </tr>
            <tr>
                <td>{{ contents.t4280 }}</td>
                <td>{{ contents.t4290 }}</td>
            </tr>
        </HTable>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4300 }}</HParagraph>
        <HTable
            :key="getKey()"
            class="hison-col-6-pc hison-col-12-mb"
        >  
            <tr>
                <td>{{ contents.t4310 }}</td>
                <td>{{ contents.t4320 }}</td>
            </tr>
            <tr>
                <td>{{ contents.t4330 }}</td>
                <td>{{ contents.t4340 }}</td>
            </tr>
            <tr>
                <td>{{ contents.t4350 }}</td>
                <td>{{ contents.t4360 }}</td>
            </tr>
            <tr>
                <td>{{ contents.t4370 }}</td>
                <td>{{ contents.t4380 }}</td>
            </tr>
            <tr>
                <td>{{ contents.t4390 }}</td>
                <td>{{ contents.t4400 }}</td>
            </tr>
        </HTable>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.co1100 }}</HParagraph>
        <HGap/>
        <HGap/>
    </HLayout>
</template>

<style scoped>
</style>