<script setup lang="ts">
import { getUUID } from '@/common/utils';
import AccordionSample from '@/components/sample/AccordionSample.vue';
import CodeParagraph from '@/components/CodeParagraph.vue';
import { apiHisonvueContents, componentConfigGridData, componentStyleConfigGridData, cssEventConfigGridData, dataConfigGridData, hisonComponentGridData, hisonCssEventGridData, hisonEtcGridData, hisonStyleGridData, linkConfigGridData, shieldConfigGridData, utilsConfigGridData } from '@/content/api/hisonvue';
import type { Lang } from '@/store';
import { type HGridColumn, type HGridMethods, type HInputMethods } from 'hisonvue';
import { computed, ref, watch } from 'vue';
import { useStore } from 'vuex';
import BaggieSample from '@/components/sample/BaggieSample.vue';
import BannerSample from '@/components/sample/BannerSample.vue';
import ButtonSample from '@/components/sample/ButtonSample.vue';
import CalendarSample from '@/components/sample/CalendarSample.vue';
import CaptionSample from '@/components/sample/CaptionSample.vue';
import ChartSample from '@/components/sample/ChartSample.vue';
import DrawerSample from '@/components/sample/DrawerSample.vue';
import DropdownSample from '@/components/sample/DropdownSample.vue';
import FilesetSample from '@/components/sample/FilesetSample.vue';
import GapSample from '@/components/sample/GapSample.vue';
import ImageboxSample from '@/components/sample/ImageboxSample.vue';
import InputSample from '@/components/sample/InputSample.vue';
import InputGroupSample from '@/components/sample/InputGroupSample.vue';
import LabelSample from '@/components/sample/LabelSample.vue';
import PopupSample from '@/components/sample/PopupSample.vue';
import SpinnerSample from '@/components/sample/SpinnerSample.vue';
import GridSample from '@/components/sample/GridSample.vue';
import LayoutSample from '@/components/sample/LayoutSample.vue';
import ListSample from '@/components/sample/ListSample.vue';
import ModalSample from '@/components/sample/ModalSample.vue';
import NoteSample from '@/components/sample/NoteSample.vue';
import PaginationSample from '@/components/sample/PaginationSample.vue';
import ParagraphSample from '@/components/sample/ParagraphSample.vue';
import TableSample from '@/components/sample/TableSample.vue';

const store = useStore()
const contents = computed(() => apiHisonvueContents[store.state.lang as Lang])
const getKey = () => store.state.lang + getUUID()

const selected = ref<string>(contents.value.t6000)
watch(() => store.state.lang, () => {
  selected.value = contents.value.t6000
})
const inputOnChange = (oldValue: Lang, newValue: Lang, input: HInputMethods) => {
    void oldValue; void input;
    selected.value = newValue
}

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

const hisonComponentColumn: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '15%', rowMerge: true },
  { id: 'param', header: 'param', dataType: 'text', width: '15%' },
  { id: 'return', header: 'return', dataType: 'text', width: '15%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '55%' },
]
const hisonStyleColumn: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '15%', rowMerge: true },
  { id: 'param', header: 'param', dataType: 'text', width: '15%' },
  { id: 'return', header: 'return', dataType: 'text', width: '15%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '55%' },
]
const hisonCssEventColumn: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '15%', rowMerge: true },
  { id: 'param', header: 'param', dataType: 'text', width: '15%' },
  { id: 'return', header: 'return', dataType: 'text', width: '15%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '55%' },
]
const hisonEtcGridColumn: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '15%', rowMerge: true },
  { id: 'param', header: 'param', dataType: 'text', width: '15%' },
  { id: 'return', header: 'return', dataType: 'text', width: '15%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '55%' },
]

const utilsConfigColumn: HGridColumn[] = [
  { id: 'prop', header: 'prop', dataType: 'text', width: '15%', rowMerge: true },
  { id: 'type', header: 'type', dataType: 'text', width: '15%' },
  { id: 'default', header: 'default', dataType: 'text', width: '15%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '55%' },
]
const shieldConfigColumn: HGridColumn[] = [
  { id: 'prop', header: 'prop', dataType: 'text', width: '15%', rowMerge: true },
  { id: 'type', header: 'type', dataType: 'text', width: '15%' },
  { id: 'default', header: 'default', dataType: 'text', width: '15%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '55%' },
]
const dataConfigColumn: HGridColumn[] = [
  { id: 'prop', header: 'prop', dataType: 'text', width: '15%', rowMerge: true },
  { id: 'type', header: 'type', dataType: 'text', width: '15%' },
  { id: 'default', header: 'default', dataType: 'text', width: '15%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '55%' },
]
const linkConfigColumn: HGridColumn[] = [
  { id: 'prop', header: 'prop', dataType: 'text', width: '15%', rowMerge: true },
  { id: 'type', header: 'type', dataType: 'text', width: '15%' },
  { id: 'default', header: 'default', dataType: 'text', width: '15%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '55%' },
]

const componentConfigColumn: HGridColumn[] = [
  { id: 'prop', header: 'prop', dataType: 'text', width: '15%', rowMerge: true },
  { id: 'type', header: 'type', dataType: 'text', width: '15%' },
  { id: 'default', header: 'default', dataType: 'text', width: '15%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '55%' },
]
const componentStyleConfigColumn: HGridColumn[] = [
  { id: 'prop', header: 'prop', dataType: 'text', width: '15%', rowMerge: true },
  { id: 'type', header: 'type', dataType: 'text', width: '15%' },
  { id: 'default', header: 'default', dataType: 'text', width: '15%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '55%' },
]
const cssEventConfigColumn: HGridColumn[] = [
  { id: 'prop', header: 'prop', dataType: 'text', width: '15%', rowMerge: true },
  { id: 'type', header: 'type', dataType: 'text', width: '15%' },
  { id: 'default', header: 'default', dataType: 'text', width: '15%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '55%' },
]

const mountHisonComponentGrid = async (grid: HGridMethods) => {
  grid.load(store.state.lang === 'en' ? hisonComponentGridData.en : hisonComponentGridData.ko)
}
const mountHisonStyleGrid = async (grid: HGridMethods) => {
  grid.load(store.state.lang === 'en' ? hisonStyleGridData.en : hisonStyleGridData.ko)
}
const mountHisonCssEventGrid = async (grid: HGridMethods) => {
  grid.load(store.state.lang === 'en' ? hisonCssEventGridData.en : hisonCssEventGridData.ko)
}
const mountHisonEtcGridGrid = async (grid: HGridMethods) => {
  grid.load(store.state.lang === 'en' ? hisonEtcGridData.en : hisonEtcGridData.ko)
}

const mountUtilsConfigGrid = async (grid: HGridMethods) => {
  grid.load(store.state.lang === 'en' ? utilsConfigGridData.en : utilsConfigGridData.ko)
}
const mountShieldConfigGrid = async (grid: HGridMethods) => {
  grid.load(store.state.lang === 'en' ? shieldConfigGridData.en : shieldConfigGridData.ko)
}
const mountDataConfigGrid = async (grid: HGridMethods) => {
  grid.load(store.state.lang === 'en' ? dataConfigGridData.en : dataConfigGridData.ko)
}
const mountlinkConfigGrid = async (grid: HGridMethods) => {
  grid.load(store.state.lang === 'en' ? linkConfigGridData.en : linkConfigGridData.ko)
}

const mountComponentConfigGrid = async (grid: HGridMethods) => {
  grid.load(store.state.lang === 'en' ? componentConfigGridData.en : componentConfigGridData.ko)
}
const mountComponentStyleConfigGrid = async (grid: HGridMethods) => {
  grid.load(store.state.lang === 'en' ? componentStyleConfigGridData.en : componentStyleConfigGridData.ko)
}
const mountCssEventConfigGrid = async (grid: HGridMethods) => {
  grid.load(store.state.lang === 'en' ? cssEventConfigGridData.en : cssEventConfigGridData.ko)
}
</script>

<template>
    <HLayout style="min-height: calc(100vh - 110px);">
        <HGap/>
        <HCaption class="hison-col-12 hison-size-s-mb" :key="getKey()">{{ contents.caption }}</HCaption>
        <HGap :line="'horizontal'"/>
        <HAccordion
            :title="contents.subhead1"
        >
            <HCaption :level="4" :key="getKey()" class="hison-col-12">{{ contents.subhead1 }}</HCaption>
            <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t1000 }}</HCaption>
            <HGrid
                id="hisonComponentGrid"
                :key="getKey()"
                :columns="hisonComponentColumn"
                class="hison-col-12 hison-size-m"
                :height="'650px'"
                :rownum-visible="false"
                :status-visible="false"
                :locked="true"
                :locked-color="false"
                @mounted="mountHisonComponentGrid"
            />
            <HGap/>
            <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t1100 }}</HCaption>
            <HGrid
                id="hisonStyleGrid"
                :key="getKey()"
                :columns="hisonStyleColumn"
                class="hison-col-12 hison-size-m"
                :height="'800px'"
                :rownum-visible="false"
                :status-visible="false"
                :locked="true"
                :locked-color="false"
                @mounted="mountHisonStyleGrid"
            />
            <HGap/>
            <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t1200 }}</HCaption>
            <HGrid
                id="hisonCssEventGrid"
                :key="getKey()"
                :columns="hisonCssEventColumn"
                class="hison-col-12 hison-size-m"
                :height="'650px'"
                :rownum-visible="false"
                :status-visible="false"
                :locked="true"
                :locked-color="false"
                @mounted="mountHisonCssEventGrid"
            />
            <HGap/>
            <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t1250 }}</HCaption>
            <HGrid
                id="hisonEtcGrid"
                :key="getKey()"
                :columns="hisonEtcGridColumn"
                class="hison-col-12 hison-size-m"
                :height="'200px'"
                :rownum-visible="false"
                :status-visible="false"
                :locked="true"
                :locked-color="false"
                @mounted="mountHisonEtcGridGrid"
            />
            <HGap/>
            <HParagraph :key="getKey()" class="hison-col-12" :font-bold="true">{{ contents.t1300 }}</HParagraph>
            <HGap/>
        </HAccordion>
        <HGap :line="'horizontal'"/>
        <HAccordion
            :title="contents.subhead2"
        >
            <HCaption :level="4" :key="getKey()" class="hison-col-12">{{ contents.subhead2 }}</HCaption>
            <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t2000 }}</HCaption>
            <HCaption :level="6" :key="getKey()" class="hison-col-12">{{ contents.t2010 }}</HCaption>
            <HGrid
                id="utilsConfigGrid"
                :key="getKey()"
                :columns="utilsConfigColumn"
                class="hison-col-12 hison-size-m"
                :height="'800px'"
                :rownum-visible="false"
                :status-visible="false"
                :locked="true"
                :locked-color="false"
                @mounted="mountUtilsConfigGrid"
            />
            <HGap/>
            <HCaption :level="6" :key="getKey()" class="hison-col-12">{{ contents.t2020 }}</HCaption>
            <HGrid
                id="shieldConfigGrid"
                :key="getKey()"
                :columns="shieldConfigColumn"
                class="hison-col-12 hison-size-m"
                :height="'450px'"
                :rownum-visible="false"
                :status-visible="false"
                :locked="true"
                :locked-color="false"
                @mounted="mountShieldConfigGrid"
            />
            <HGap/>
            <HCaption :level="6" :key="getKey()" class="hison-col-12">{{ contents.t2030 }}</HCaption>
            <HGrid
                id="dataConfigGrid"
                :key="getKey()"
                :columns="dataConfigColumn"
                class="hison-col-12 hison-size-m"
                :height="'300px'"
                :rownum-visible="false"
                :status-visible="false"
                :locked="true"
                :locked-color="false"
                @mounted="mountDataConfigGrid"
            />
            <HGap/>
            <HCaption :level="6" :key="getKey()" class="hison-col-12">{{ contents.t2040 }}</HCaption>
            <HGrid
                id="linkConfigGrid"
                :key="getKey()"
                :columns="linkConfigColumn"
                class="hison-col-12 hison-size-m"
                :height="'800px'"
                :rownum-visible="false"
                :status-visible="false"
                :locked="true"
                :locked-color="false"
                @mounted="mountlinkConfigGrid"
            />
            <HGap/>
            <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t2100 }}</HCaption>
            <HGrid
                id="componentConfigGrid"
                :key="getKey()"
                :columns="componentConfigColumn"
                class="hison-col-12 hison-size-m"
                :height="'350px'"
                :rownum-visible="false"
                :status-visible="false"
                :locked="true"
                :locked-color="false"
                @mounted="mountComponentConfigGrid"
            />
            <HGap/>
            <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t2200 }}</HCaption>
            <HGrid
                id="componentStyleConfigGrid"
                :key="getKey()"
                :columns="componentStyleConfigColumn"
                class="hison-col-12 hison-size-m"
                :height="'800px'"
                :rownum-visible="false"
                :status-visible="false"
                :locked="true"
                :locked-color="false"
                @mounted="mountComponentStyleConfigGrid"
            />
            <HGap/>
            <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t2300 }}</HCaption>
            <HGrid
                id="cssEventConfigGrid"
                :key="getKey()"
                :columns="cssEventConfigColumn"
                class="hison-col-12 hison-size-m"
                :height="'800px'"
                :rownum-visible="false"
                :status-visible="false"
                :locked="true"
                :locked-color="false"
                @mounted="mountCssEventConfigGrid"
            />
            <HGap/>
        </HAccordion>
        <HGap :line="'horizontal'"/>
        <HAccordion
            :title="contents.subhead3"
        >
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
            <HGap/>
            <HLabel
                :key="getKey()"
                class="hison-col-12 hison-color-primary-pc hison-color-muted-mb"
                :border="true"
                :background-type="'filled'"
            >{{ contents.t3110 }}</HLabel>
            <HGap/>
            <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3200 }}</HParagraph>
            <HCaption :level="6" :key="getKey()" class="hison-col-12">{{ contents.t3300 }}</HCaption>
            <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3320 }}</HParagraph>
            <CodeParagraph :key="getKey()" :code="contents.c3320"/>
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
            <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3520 }}</HParagraph>
            <CodeParagraph :key="getKey()" :code="contents.c3520"/>
            <HLayout>
                <HButton class="hison-col-20p hison-color-custom1">custom1</HButton>
                <HButton class="hison-col-20p hison-color-custom2">custom2</HButton>
                <HButton class="hison-col-20p hison-color-custom3">custom3</HButton>
                <HButton class="hison-col-20p hison-color-custom4">custom4</HButton>
                <HButton class="hison-col-20p hison-color-custom5">custom5</HButton>
            </HLayout>
            <HGap/>
            <HCaption :level="6" :key="getKey()" class="hison-col-12">{{ contents.t3600 }}</HCaption>
            <HParagraph :key="getKey()" class="hison-col-12">{{ contents.t3610 }}</HParagraph>
            <CodeParagraph :key="getKey()" :code="contents.c3610"/>
            <HGap/>
            <HCaption :level="6" :key="getKey()" class="hison-col-12">{{ contents.t4000 }}</HCaption>
            <CodeParagraph :key="getKey()" :dynamicWidth="false" :code="contents.c4000"/>
            <HGap/>
            <HCaption :level="6" :key="getKey()" class="hison-col-12">{{ contents.t5000 }}</HCaption>
            <CodeParagraph :key="getKey()" :dynamicWidth="false" :code="contents.c5000"/>
            <HGap/>
            <HGap/>
        </HAccordion>
        <HGap :line="'horizontal'"/>
        <HAccordion
            :title="contents.subhead4"
        >
            <HCaption :level="4" :key="getKey()" class="hison-col-12">{{ contents.subhead4 }}</HCaption>
            <HInput
                class="hison-col-12"
                :inputType="'select'"
                :options="option"
                v-model="selected"
                @change="inputOnChange"
            ></HInput>
            <HLayout>
                <HLayout
                    :id="contents.t6000"
                    style="padding: 30px;"
                    v-if="selected === contents.t6000"
                >
                    <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t6000 }}</HCaption>
                    <AccordionSample :key="getKey()" :lang="store.state.lang"/>
                </HLayout>
                <HLayout
                    :id="contents.t6100"
                    style="padding: 30px;"
                    v-if="selected === contents.t6100"
                >
                    <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t6100 }}</HCaption>
                    <BaggieSample :key="getKey()" :lang="store.state.lang"/>
                </HLayout>
                <HLayout
                    :id="contents.t6200"
                    style="padding: 30px;"
                    v-if="selected === contents.t6200"
                >
                    <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t6200 }}</HCaption>
                    <BannerSample :key="getKey()" :lang="store.state.lang"/>
                </HLayout>
                <HLayout
                    :id="contents.t6300"
                    style="padding: 30px;"
                    v-if="selected === contents.t6300"
                >
                    <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t6300 }}</HCaption>
                    <ButtonSample :key="getKey()" :lang="store.state.lang"/>
                </HLayout>
                <HLayout
                    :id="contents.t6400"
                    style="padding: 30px;"
                    v-if="selected === contents.t6400"
                >
                    <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t6400 }}</HCaption>
                    <CalendarSample :key="getKey()" :lang="store.state.lang"/>
                </HLayout>
                <HLayout
                    :id="contents.t6500"
                    style="padding: 30px;"
                    v-if="selected === contents.t6500"
                >
                    <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t6500 }}</HCaption>
                    <CaptionSample :key="getKey()" :lang="store.state.lang"/>
                </HLayout>
                <HLayout
                    :id="contents.t6600"
                    style="padding: 30px;"
                    v-if="selected === contents.t6600"
                >
                    <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t6600 }}</HCaption>
                    <ChartSample :key="getKey()" :lang="store.state.lang"/>
                </HLayout>
                <HLayout
                    :id="contents.t6700"
                    style="padding: 30px;"
                    v-if="selected === contents.t6700"
                >
                    <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t6700 }}</HCaption>
                    <DrawerSample :key="getKey()" :lang="store.state.lang"/>
                </HLayout>
                <HLayout
                    :id="contents.t6800"
                    style="padding: 30px;"
                    v-if="selected === contents.t6800"
                >
                    <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t6800 }}</HCaption>
                    <DropdownSample :key="getKey()" :lang="store.state.lang"/>
                </HLayout>
                <HLayout
                    :id="contents.t6900"
                    style="padding: 30px;"
                    v-if="selected === contents.t6900"
                >
                    <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t6900 }}</HCaption>
                    <FilesetSample :key="getKey()" :lang="store.state.lang"/>
                </HLayout>
                <HLayout
                    :id="contents.t7000"
                    style="padding: 30px;"
                    v-if="selected === contents.t7000"
                >
                    <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t7000 }}</HCaption>
                    <GapSample :key="getKey()" :lang="store.state.lang"/>
                </HLayout>
                <HLayout
                    :id="contents.t7100"
                    style="padding: 30px;"
                    v-if="selected === contents.t7100"
                >
                    <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t7100 }}</HCaption>
                    <GridSample :key="getKey()" :lang="store.state.lang"/>
                </HLayout>
                <HLayout
                    :id="contents.t7200"
                    style="padding: 30px;"
                    v-if="selected === contents.t7200"
                >
                    <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t7200 }}</HCaption>
                    <ImageboxSample :key="getKey()" :lang="store.state.lang"/>
                </HLayout>
                <HLayout
                    :id="contents.t7300"
                    style="padding: 30px;"
                    v-if="selected === contents.t7300"
                >
                    <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t7300 }}</HCaption>
                    <InputSample :key="getKey()" :lang="store.state.lang"/>
                </HLayout>
                <HLayout
                    :id="contents.t7400"
                    style="padding: 30px;"
                    v-if="selected === contents.t7400"
                >
                    <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t7400 }}</HCaption>
                    <InputGroupSample :key="getKey()" :lang="store.state.lang"/>
                </HLayout>
                <HLayout
                    :id="contents.t7500"
                    style="padding: 30px;"
                    v-if="selected === contents.t7500"
                >
                    <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t7500 }}</HCaption>
                    <LabelSample :key="getKey()" :lang="store.state.lang"/>
                </HLayout>
                <HLayout
                    :id="contents.t7600"
                    style="padding: 30px;"
                    v-if="selected === contents.t7600"
                >
                    <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t7600 }}</HCaption>
                    <LayoutSample :key="getKey()" :lang="store.state.lang"/>
                </HLayout>
                <HLayout
                    :id="contents.t7700"
                    style="padding: 30px;"
                    v-if="selected === contents.t7700"
                >
                    <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t7700 }}</HCaption>
                    <ListSample :key="getKey()" :lang="store.state.lang"/>
                </HLayout>
                <HLayout
                    :id="contents.t7800"
                    style="padding: 30px;"
                    v-if="selected === contents.t7800"
                >
                    <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t7800 }}</HCaption>
                    <ModalSample :key="getKey()" :lang="store.state.lang"/>
                </HLayout>
                <HLayout
                    :id="contents.t7900"
                    style="padding: 30px;"
                    v-if="selected === contents.t7900"
                >
                    <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t7900 }}</HCaption>
                    <NoteSample :key="getKey()" :lang="store.state.lang"/>
                </HLayout>
                <HLayout
                    :id="contents.t8000"
                    style="padding: 30px;"
                    v-if="selected === contents.t8000"
                >
                    <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t8000 }}</HCaption>
                    <PaginationSample :key="getKey()" :lang="store.state.lang"/>
                </HLayout>
                <HLayout
                    :id="contents.t8100"
                    style="padding: 30px;"
                    v-if="selected === contents.t8100"
                >
                    <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t8100 }}</HCaption>
                    <ParagraphSample :key="getKey()" :lang="store.state.lang"/>
                </HLayout>
                <HLayout
                    :id="contents.t8200"
                    style="padding: 30px;"
                    v-if="selected === contents.t8200"
                >
                    <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t8200 }}</HCaption>
                    <PopupSample :key="getKey()" :lang="store.state.lang"/>
                </HLayout>
                <HLayout
                    :id="contents.t8300"
                    style="padding: 30px;"
                    v-if="selected === contents.t8300"
                >
                    <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t8300 }}</HCaption>
                    <SpinnerSample :key="getKey()" :lang="store.state.lang"/>
                </HLayout>
                <HLayout
                    :id="contents.t8400"
                    style="padding: 30px;"
                    v-if="selected === contents.t8400"
                >
                    <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.t8400 }}</HCaption>
                    <TableSample :key="getKey()" :lang="store.state.lang"/>
                </HLayout>
            </HLayout>
        </HAccordion>
        <HGap :line="'horizontal'"/>
        <HGap/>
        <HGap/>
        <HGap/>
        <HGap/>
        <HGap/>
    </HLayout>
</template>

<style scoped>
</style>