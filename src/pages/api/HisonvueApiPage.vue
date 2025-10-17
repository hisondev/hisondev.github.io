<script setup lang="ts">
import { getUUID } from '@/common/utils';
import AccordionSample from '@/components/sample/AccordionSample.vue';
import CodeParagraph from '@/components/CodeParagraph.vue';
import { apiHisonvueContents } from '@/content/api/hisonvue';
import type { Lang } from '@/store';
import { hison, type HInputMethods } from 'hisonvue';
import { computed } from 'vue';
import { useStore } from 'vuex';
import BaggieSample from '@/components/sample/BaggieSample.vue';

const store = useStore()
const contents = computed(() => apiHisonvueContents[store.state.lang as Lang])
const getKey = () => store.state.lang + getUUID()

const componentKeys = [
    contents.value.t6000,
    contents.value.t6100,
    contents.value.t6200,
    contents.value.t6300,
    contents.value.t6400,
    contents.value.t6500,
    contents.value.t6600,
    contents.value.t6700,
    contents.value.t6800,
    contents.value.t6900,
    contents.value.t7000,
    contents.value.t7100,
    contents.value.t7200,
    contents.value.t7300,
    contents.value.t7400,
    contents.value.t7500,
    contents.value.t7600,
    contents.value.t7700,
    contents.value.t7800,
    contents.value.t7900,
    contents.value.t8000,
    contents.value.t8100,
    contents.value.t8200,
    contents.value.t8300,
    contents.value.t8400
]

const option = componentKeys.map(v => ({ text: v, value: v }))
const inputOnChange = (oldValue: Lang, newValue: Lang, input: HInputMethods) => {
    void oldValue; void input;
    for (const component of componentKeys) {
        const layout = hison.component.getLayout(component)
        if(layout) layout.setVisible(false)
    }
    const selectLayout = hison.component.getLayout(newValue)
    if(selectLayout) selectLayout.setVisible(true)

}
</script>

<template>
    <HLayout>
        <HGap/>
        <HCaption class="hison-col-12" :key="getKey()">{{ contents.caption }}</HCaption>
        <HGap :line="'horizontal'"/>
        <HCaption :level="4" :key="getKey()" class="hison-col-12">{{ contents.subhead4 }}</HCaption>
        <HInput
            id="select"
            class="hison-col-12"
            :inputType="'select'"
            :options="option"
            v-model="contents.t6000"
            @change="inputOnChange"
        ></HInput>
        <HLayout>
            <HLayout
                :id="contents.t6000"
                style="padding: 30px;"
                :visible="true"
            >
                <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t6000 }}</HCaption>
                <AccordionSample :key="getKey()" :lang="store.state.lang"/>
            </HLayout>
            <HLayout
                :id="contents.t6100"
                style="padding: 30px;"
                :visible="false"
            >
                <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t6100 }}</HCaption>
                <BaggieSample :key="getKey()" :lang="store.state.lang"/>
            </HLayout>
        </HLayout>
        <HGap :line="'horizontal'"/>
        <HCaption :level="4" :key="getKey()" class="hison-col-12">{{ contents.subhead1 }}</HCaption>
        <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t1000 }}</HCaption>
        <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t1100 }}</HCaption>
        <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t1200 }}</HCaption>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t1300 }}</HParagraph>
        <HGap :line="'horizontal'"/>
        <HCaption :level="4" :key="getKey()" class="hison-col-12">{{ contents.subhead2 }}</HCaption>
        <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t2000 }}</HCaption>
        <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t2100 }}</HCaption>
        <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t2200 }}</HCaption>
        <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t2300 }}</HCaption>
        <HGap :line="'horizontal'"/>
        <HCaption :level="4" :key="getKey()" class="hison-col-12">{{ contents.subhead3 }}</HCaption>
        <HCaption :level="6" :key="getKey()" class="hison-col-12">{{ contents.t3000 }}</HCaption>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3010 }}</HParagraph>
        <HTable
            :key="getKey()"
            class="hison-col-6-pc hison-col-12-mb"
            style="margin-bottom: 10px;"
        >  
            <tr>
                <td>{{ contents.t3020 }}</td>
                <td>{{ contents.t3030 }}</td>
            </tr>
            <tr>
                <td>{{ contents.t3040 }}</td>
                <td>{{ contents.t3050 }}</td>
            </tr>
            <tr>
                <td>{{ contents.t3060 }}</td>
                <td>{{ contents.t3070 }}</td>
            </tr>
            <tr>
                <td>{{ contents.t3080 }}</td>
                <td>{{ contents.t3090 }}</td>
            </tr>
        </HTable>
        <HLabel
            :key="getKey()"
            class="hison-col-12 hison-color-danger-pc hison-color-warning-mb"
            :border="true"
            :background-type="'filled'"
        >{{ contents.t3110 }}</HLabel>
        <HGap/>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3200 }}</HParagraph>
        <HCaption :level="6" :key="getKey()" class="hison-col-12">{{ contents.t3300 }}</HCaption>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3310 }}</HParagraph>
        <HLayout>
            <HLabel
                :key="getKey()"
                class="hison-col-1 hison-color-muted"
                :border="false"
                :background-type="'filled'"
                :text-align="'center'"
            >1</HLabel>
            <HLabel
                :key="getKey()"
                class="hison-col-1 hison-color-muted"
                :border="false"
                :background-type="'filled'"
                :text-align="'center'"
            >1</HLabel>
            <HLabel
                :key="getKey()"
                class="hison-col-1 hison-color-muted"
                :border="false"
                :background-type="'filled'"
                :text-align="'center'"
            >1</HLabel>
            <HLabel
                :key="getKey()"
                class="hison-col-1 hison-color-muted"
                :border="false"
                :background-type="'filled'"
                :text-align="'center'"
            >1</HLabel>
            <HLabel
                :key="getKey()"
                class="hison-col-1 hison-color-muted"
                :border="false"
                :background-type="'filled'"
                :text-align="'center'"
            >1</HLabel>
            <HLabel
                :key="getKey()"
                class="hison-col-1 hison-color-muted"
                :border="false"
                :background-type="'filled'"
                :text-align="'center'"
            >1</HLabel>
            <HLabel
                :key="getKey()"
                class="hison-col-1 hison-color-muted"
                :border="false"
                :background-type="'filled'"
                :text-align="'center'"
            >1</HLabel>
            <HLabel
                :key="getKey()"
                class="hison-col-1 hison-color-muted"
                :border="false"
                :background-type="'filled'"
                :text-align="'center'"
            >1</HLabel>
            <HLabel
                :key="getKey()"
                class="hison-col-1 hison-color-muted"
                :border="false"
                :background-type="'filled'"
                :text-align="'center'"
            >1</HLabel>
            <HLabel
                :key="getKey()"
                class="hison-col-1 hison-color-muted"
                :border="false"
                :background-type="'filled'"
                :text-align="'center'"
            >1</HLabel>
            <HLabel
                :key="getKey()"
                class="hison-col-1 hison-color-muted"
                :border="false"
                :background-type="'filled'"
                :text-align="'center'"
            >1</HLabel>
            <HLabel
                :key="getKey()"
                class="hison-col-1 hison-color-muted"
                :border="false"
                :background-type="'filled'"
                :text-align="'center'"
            >1</HLabel>
        </HLayout>
        <HGap/>
        <HCaption :level="6" :key="getKey()" class="hison-col-12">{{ contents.t3400 }}</HCaption>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3410 }}</HParagraph>
        <HButton class="hison-size-xl hison-pos-vertical-bottom">XL BUTTON</HButton>
        <HButton class="hison-size-l hison-pos-vertical-bottom">L BUTTON</HButton>
        <HButton class="hison-size-m hison-pos-vertical-bottom">M BUTTON</HButton>
        <HButton class="hison-size-s hison-pos-vertical-bottom">S BUTTON</HButton>
        <HGap/>
        <HCaption :level="6" :key="getKey()" class="hison-col-12">{{ contents.t3500 }}</HCaption>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3510 }}</HParagraph>
        <HButton class="hison-col-2-pc hison-col-4-mb">default primary</HButton>
        <HButton class="hison-col-2-pc hison-col-4-mb hison-color-muted">default muted</HButton>
        <HButton class="hison-col-2-pc hison-col-4-mb hison-color-info">default info</HButton>
        <HButton class="hison-col-2-pc hison-col-4-mb hison-color-success">default success</HButton>
        <HButton class="hison-col-2-pc hison-col-4-mb hison-color-danger">default danger</HButton>
        <HButton class="hison-col-2-pc hison-col-4-mb hison-color-warning">default warning</HButton>
        <HGap/>
        <HCaption :level="6" :key="getKey()" class="hison-col-12">{{ contents.t3600 }}</HCaption>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3610 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c3610"/>
        <HGap/>
        <HCaption :level="6" :key="getKey()" class="hison-col-12">{{ contents.t3700 }}</HCaption>
        <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3710 }}</HParagraph>
        <CodeParagraph :key="getKey()" :code="contents.c3710"/>
        <HGap/>
        <HCaption :level="6" :key="getKey()" class="hison-col-12">{{ contents.t4000 }}</HCaption>
        <CodeParagraph :key="getKey()" :dynamicWidth="false" :code="contents.c4000"/>
        <HGap/>
        <HCaption :level="6" :key="getKey()" class="hison-col-12">{{ contents.t5000 }}</HCaption>
        <CodeParagraph :key="getKey()" :dynamicWidth="false" :code="contents.c5000"/>
        <HGap/>
        <HGap/>
        <HGap/>
        <HGap/>
        <HGap/>
        <HGap/>
        <HGap/>
    </HLayout>
</template>

<style scoped>
</style>