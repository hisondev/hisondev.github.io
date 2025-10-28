<script setup lang="ts">
import { getUUID } from '@/common/utils';
import { introAboutAuthorContents } from '@/content/intro/about-author';
import type { Lang } from '@/store';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const contents = computed(() => introAboutAuthorContents[store.state.lang as Lang])
const getKey = () => store.state.lang + getUUID()

import RPG95 from '@/assets/img/rpg-maker-95.jpeg'
import type { AttachedFileItem } from 'hisonvue';
const imgFile: AttachedFileItem = {
    fileName: 'RPG95',
    filePath: RPG95,
}
</script>

<template>
    <HLayout style="min-height: calc(100vh - 110px);">
        <HGap/>
        <HCaption class="hison-col-12 hison-size-s-mb" :key="getKey()">{{ contents.caption }}</HCaption>
        <HGap :line="'horizontal'"/>

        <HCaption  class="hison-col-12" :level="5" :key="getKey()">{{ contents.subhead1 }}</HCaption>
        <HGap/>
        <HLabel :key="getKey()" class="hison-col-12" :font-bold="true">{{ contents.t1000 }}</HLabel>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1010 }}</HParagraph>
        <HGap/>
        <HLabel :key="getKey()" class="hison-col-12" :font-bold="true">{{ contents.t1100 }}</HLabel>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1110 }}</HParagraph>
        <HGap/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1200 }}</HParagraph>
        <HGap/>
        <HGap :line="'horizontal'"/>

        <HCaption  class="hison-col-12" :level="5" :key="getKey()">{{ contents.subhead2 }}</HCaption>
        <HGap/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t2000 }}</HParagraph>
        <HGap/>
        <HLayout>
            <HImagebox
                class="hison-col-6-pc hison-col-12-mb hison-pos-center"
                :model-value="imgFile"
                :edit-mode="'readonly'"
                style="max-width: 500px;"
            />
            <HLabel :key="getKey()" class="hison-col-12 hison-size-s" :text-align="'center'" :font-italic="true" :href="contents.h2005">{{ contents.t2005 }}</HLabel>
        </HLayout>
        <HGap/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t2010 }}</HParagraph>
        <HLabel :key="getKey()" class="hison-col-12" :font-bold="true">{{ contents.t2015 }}</HLabel>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t2020 }}</HParagraph>
        <HLabel :key="getKey()" class="hison-col-12" :font-bold="true">{{ contents.t2025 }}</HLabel>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t2030 }}</HParagraph>
        <HLabel :key="getKey()" class="hison-col-12" :font-bold="true">{{ contents.t2033 }}</HLabel>
        <HLabel :key="getKey()" class="hison-col-12">{{ contents.t2037 }}</HLabel>
        <HGap/>
        <HLabel :key="getKey()" class="hison-col-12" :font-bold="true">{{ contents.t2040 }}</HLabel>
        <HLabel :key="getKey()" class="hison-col-12" :font-bold="true">{{ contents.t2050 }}</HLabel>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t2055 }}</HParagraph>
        <HLabel :key="getKey()" class="hison-col-12" :font-bold="true">{{ contents.t2060 }}</HLabel>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t2065 }}</HParagraph>
        <HLabel :key="getKey()" class="hison-col-12" :font-bold="true">{{ contents.t2070 }}</HLabel>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t2075 }}</HParagraph>
        <HGap/>
        <HGap :line="'horizontal'"/>

        <HCaption  class="hison-col-12" :level="5" :key="getKey()">{{ contents.subhead3 }}</HCaption>
        <HGap/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3000 }}</HParagraph>
        <HGap/>
        <HGap :line="'horizontal'"/>

        <HCaption  class="hison-col-12" :level="5" :key="getKey()">{{ contents.subhead4 }}</HCaption>
        <HList>
            <HLayout>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4000 }}</HParagraph>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4010 }}</HParagraph>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4020 }}</HParagraph>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4025 }}</HParagraph>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4030 }}</HParagraph>
            </HLayout>
            <HLayout>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4100 }}</HParagraph>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4110 }}</HParagraph>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4120 }}</HParagraph>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4125 }}</HParagraph>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4130 }}</HParagraph>
            </HLayout>
            <HLayout>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4200 }}</HParagraph>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4210 }}</HParagraph>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4220 }}</HParagraph>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4225 }}</HParagraph>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4230 }}</HParagraph>
            </HLayout>
            <HLayout>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4300 }}</HParagraph>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4310 }}</HParagraph>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4320 }}</HParagraph>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4325 }}</HParagraph>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4330 }}</HParagraph>
            </HLayout>
            <HLayout>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4400 }}</HParagraph>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4410 }}</HParagraph>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4420 }}</HParagraph>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4425 }}</HParagraph>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t4430 }}</HParagraph>
            </HLayout>
        </HList>
        <HGap/>
        <HGap :line="'horizontal'"/>

        <HCaption  class="hison-col-12" :level="5" :key="getKey()">{{ contents.subhead5 }}</HCaption>
        <HList class="hison-col-12">
            <HLayout>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t5000 }}</HParagraph>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t5010 }}</HParagraph>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t5020 }}</HParagraph>
            </HLayout>
            <HLayout>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t5100 }}</HParagraph>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t5110 }}</HParagraph>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t5120 }}</HParagraph>
            </HLayout>
            <HLayout>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t5200 }}</HParagraph>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t5210 }}</HParagraph>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t5220 }}</HParagraph>
            </HLayout>
            <HLayout>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t5300 }}</HParagraph>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t5310 }}</HParagraph>
                <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t5320 }}</HParagraph>
            </HLayout>
        </HList>
        <HGap/>
        <HGap :line="'horizontal'"/>

        <HCaption  class="hison-col-12" :level="5" :key="getKey()">{{ contents.subhead6 }}</HCaption>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t6000 }}</HParagraph>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t6010 }}</HParagraph>
        <HGap/>
        <HGap/>
    </HLayout>
</template>

<style scoped>
</style>