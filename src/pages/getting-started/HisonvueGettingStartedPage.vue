<script setup lang="ts">
import { getUUID } from '@/common/utils';
import CodeParagraph from '@/components/CodeParagraph.vue';
import { gettingStartedHisonvueContents } from '@/content/getting-started/hisonvue';
import type { Lang } from '@/store';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const contents = computed(() => gettingStartedHisonvueContents[store.state.lang as Lang])
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
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1010 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c1010"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1020 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c1020"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1030 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c1030"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1040 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c1040"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1050 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c1050"/><HGap style="height: 1px;"/>
        <CodeParagraph :key="getKey()" :code="contents.c1060"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1070 }}</HParagraph>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1080 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c1080"/><HGap style="height: 1px;"/>
        <CodeParagraph :key="getKey()" :code="contents.c1090"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1100 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c1100"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1110 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c1110"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1120 }}</HParagraph>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1130 }}</HParagraph>
        <HTable
            :key="getKey()"
            class="hison-col-6-pc hison-col-12-mb"
        >  
            <tr>
                <td>{{ contents.t1140 }}</td>
                <td>{{ contents.t1150 }}</td>
            </tr>
            <tr>
                <td>{{ contents.t1160 }}</td>
                <td>{{ contents.t1170 }}</td>
            </tr>
            <tr>
                <td>{{ contents.t1180 }}</td>
                <td>{{ contents.t1190 }}</td>
            </tr>
            <tr>
                <td>{{ contents.t1200 }}</td>
                <td>{{ contents.t1210 }}</td>
            </tr>
            <tr>
                <td>{{ contents.t1220 }}</td>
                <td>{{ contents.t1230 }}</td>
            </tr>
        </HTable>
        <HGap/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1240 }}</HParagraph>
        <HTable
            :key="getKey()"
            class="hison-col-6-pc hison-col-12-mb"
        >  
            <tr>
                <td>{{ contents.t1250 }}</td>
                <td>{{ contents.t1260 }}</td>
            </tr>
            <tr>
                <td>{{ contents.t1270 }}</td>
                <td>{{ contents.t1280 }}</td>
            </tr>
            <tr>
                <td>{{ contents.t1290 }}</td>
                <td>{{ contents.t1300 }}</td>
            </tr>
            <tr>
                <td>{{ contents.t1310 }}</td>
                <td>{{ contents.t1320 }}</td>
            </tr>
            <tr>
                <td>{{ contents.t1330 }}</td>
                <td>{{ contents.t1340 }}</td>
            </tr>
            <tr>
                <td>{{ contents.t1350 }}</td>
                <td>{{ contents.t1360 }}</td>
            </tr>
            <tr>
                <td>{{ contents.t1370 }}</td>
                <td>{{ contents.t1380 }}</td>
            </tr>
        </HTable>
        <HGap/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1390 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c1390"/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1400 }}</HParagraph>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1410 }}</HParagraph>
        <HGap/>
        <HGap/>
    </HLayout>
</template>

<style scoped>
</style>