<script setup lang="ts">
import { getUUID } from '@/common/utils';
import { apiHandlerDefaultGridData, apiHisonjvContents, apiLinkGridData, cachingHandlerDefaultGridData, conditionGridData, dataModelConverterGridData, dataModelGridData, dataWrapperGridData, serviceRuntimeExceptionGridData, utilsConfigGridData, utilsGridData } from '@/content/api/hisonjv';
import type { Lang } from '@/store';
import type { HGridColumn, HGridMethods } from 'hisonvue';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const contents = computed(() => apiHisonjvContents[store.state.lang as Lang])
const getKey = () => store.state.lang + getUUID()

const utilsColumn: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '10%', rowMerge: true },
  { id: 'param', header: 'param', dataType: 'text', width: '15%' },
  { id: 'return', header: 'return', dataType: 'text', width: '7%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '34%' },
  { id: 'note', header: 'note', dataType: 'text', width: '34%' },
]
const utilsConfigColumn: HGridColumn[] = [
  { id: 'field', header: 'field', dataType: 'text', width: '15%', rowMerge: true },
  { id: 'default', header: 'default', dataType: 'text', width: '15%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '35%' },
  { id: 'note', header: 'note', dataType: 'text', width: '35%' },
]
const dataWrapperColumn: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '10%', rowMerge: true },
  { id: 'param', header: 'param', dataType: 'text', width: '15%' },
  { id: 'return', header: 'return', dataType: 'text', width: '10%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '35%' },
  { id: 'note', header: 'note', dataType: 'text', width: '30%' },
]
const dataModelColumn: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '10%', rowMerge: true },
  { id: 'param', header: 'param', dataType: 'text', width: '15%' },
  { id: 'return', header: 'return', dataType: 'text', width: '15%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '30%' },
  { id: 'note', header: 'note', dataType: 'text', width: '30%' },
]
const dataModelConverterColumn: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '10%', rowMerge: true },
  { id: 'param', header: 'param', dataType: 'text', width: '18%' },
  { id: 'return', header: 'return', dataType: 'text', width: '12%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '30%' },
  { id: 'note', header: 'note', dataType: 'text', width: '30%' },
]
const conditionColumn: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '20%', rowMerge: true },
  { id: 'param', header: 'param', dataType: 'text', width: '15%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '50%' },
  { id: 'note', header: 'note', dataType: 'text', width: '15%' },
]
const apiLinkColumn: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '10%', rowMerge: true },
  { id: 'param', header: 'param', dataType: 'text', width: '15%' },
  { id: 'return', header: 'return', dataType: 'text', width: '15%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '30%' },
  { id: 'note', header: 'note', dataType: 'text', width: '30%' },
]
const apiHandlerDefaultColumn: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '10%', rowMerge: true },
  { id: 'param', header: 'param', dataType: 'text', width: '15%' },
  { id: 'return', header: 'return', dataType: 'text', width: '15%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '30%' },
  { id: 'note', header: 'note', dataType: 'text', width: '30%' },
]
const serviceRuntimeExceptionColumn: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '10%', rowMerge: true },
  { id: 'param', header: 'param', dataType: 'text', width: '15%' },
  { id: 'return', header: 'return', dataType: 'text', width: '15%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '30%' },
  { id: 'note', header: 'note', dataType: 'text', width: '30%' },
]
const cachingHandlerDefaultColumn: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '10%', rowMerge: true },
  { id: 'param', header: 'param', dataType: 'text', width: '18%' },
  { id: 'return', header: 'return', dataType: 'text', width: '7%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '30%' },
  { id: 'note', header: 'note', dataType: 'text', width: '35%' },
]

const mountUtilsGrid = async (grid: HGridMethods) => {
  grid.load(store.state.lang === 'en' ? utilsGridData.en : utilsGridData.ko)
}
const mountUtilsConfigGrid = async (grid: HGridMethods) => {
  grid.load(store.state.lang === 'en' ? utilsConfigGridData.en : utilsConfigGridData.ko)
}
const mountDataWrapperGrid = async (grid: HGridMethods) => {
  grid.load(store.state.lang === 'en' ? dataWrapperGridData.en : dataWrapperGridData.ko)
}
const mountDataModelGrid = async (grid: HGridMethods) => {
  grid.load(store.state.lang === 'en' ? dataModelGridData.en : dataModelGridData.ko)
}
const mountDataModelConverterGrid = async (grid: HGridMethods) => {
  grid.load(store.state.lang === 'en' ? dataModelConverterGridData.en : dataModelConverterGridData.ko)
}
const mountConditionGrid = async (grid: HGridMethods) => {
  grid.load(store.state.lang === 'en' ? conditionGridData.en : conditionGridData.ko)
}
const mountApiLinkGrid = async (grid: HGridMethods) => {
  grid.load(store.state.lang === 'en' ? apiLinkGridData.en : apiLinkGridData.ko)
}
const mountApiHandlerDefaultGrid = async (grid: HGridMethods) => {
  grid.load(store.state.lang === 'en' ? apiHandlerDefaultGridData.en : apiHandlerDefaultGridData.ko)
}
const mountServiceRuntimeExceptionGrid = async (grid: HGridMethods) => {
  grid.load(store.state.lang === 'en' ? serviceRuntimeExceptionGridData.en : serviceRuntimeExceptionGridData.ko)
}
const mountCachingHandlerDefaultGrid = async (grid: HGridMethods) => {
  grid.load(store.state.lang === 'en' ? cachingHandlerDefaultGridData.en : cachingHandlerDefaultGridData.ko)
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
            <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.subhead1 }}</HCaption>
            <HCaption :level="6" :key="getKey()" class="hison-col-12">{{ contents.t1000 }}</HCaption>
            <HGrid
                id="utilsGrid"
                :key="getKey()"
                :columns="utilsColumn"
                class="hison-col-12 hison-size-m"
                :height="'800px'"
                :rownum-visible="false"
                :status-visible="false"
                :locked="true"
                :locked-color="false"
                @mounted="mountUtilsGrid"
            />
            <HGap/>
            <HCaption :level="6" :key="getKey()" class="hison-col-12">{{ contents.t1100 }}</HCaption>
            <HGrid
                id="utilsConfigGrid"
                :key="getKey()"
                :columns="utilsConfigColumn"
                class="hison-col-12 hison-size-m"
                :height="'350px'"
                :rownum-visible="false"
                :status-visible="false"
                :locked="true"
                :locked-color="false"
                @mounted="mountUtilsConfigGrid"
            />
            <HGap/>
        </HAccordion>
        <HGap :line="'horizontal'"/>

        <HAccordion
            :title="contents.subhead2"
        >
            <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.subhead2 }}</HCaption>
            <HCaption :level="6" :key="getKey()" class="hison-col-12">{{ contents.t2000 }}</HCaption>
            <HGrid
                id="dataWrapperGrid"
                :key="getKey()"
                :columns="dataWrapperColumn"
                class="hison-col-12 hison-size-m"
                :height="'500px'"
                :rownum-visible="false"
                :status-visible="false"
                :locked="true"
                :locked-color="false"
                @mounted="mountDataWrapperGrid"
            />
            <HGap/>
            <HCaption :level="6" :key="getKey()" class="hison-col-12">{{ contents.t2100 }}</HCaption>
            <HGrid
                id="dataModelGrid"
                :key="getKey()"
                :columns="dataModelColumn"
                class="hison-col-12 hison-size-m"
                :height="'800px'"
                :rownum-visible="false"
                :status-visible="false"
                :locked="true"
                :locked-color="false"
                @mounted="mountDataModelGrid"
            />
            <HGap/>
            <HCaption :level="6" :key="getKey()" class="hison-col-12">{{ contents.t2200 }}</HCaption>
            <HGrid
                id="dataModelConverterGrid"
                :key="getKey()"
                :columns="dataModelConverterColumn"
                class="hison-col-12 hison-size-m"
                :height="'300px'"
                :rownum-visible="false"
                :status-visible="false"
                :locked="true"
                :locked-color="false"
                @mounted="mountDataModelConverterGrid"
            />
            <HGap/>
            <HCaption :level="6" :key="getKey()" class="hison-col-12">{{ contents.t2300 }}</HCaption>
            <HGrid
                id="conditionGrid"
                :key="getKey()"
                :columns="conditionColumn"
                class="hison-col-12 hison-size-m"
                :height="'160px'"
                :rownum-visible="false"
                :status-visible="false"
                :locked="true"
                :locked-color="false"
                @mounted="mountConditionGrid"
            />
            <HGap/>
        </HAccordion>
        <HGap :line="'horizontal'"/>

        <HAccordion
            :title="contents.subhead3"
        >
            <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.subhead3 }}</HCaption>
            <HCaption :level="6" :key="getKey()" class="hison-col-12">{{ contents.t3000 }}</HCaption>
            <HGrid
                id="apiLinkGrid"
                :key="getKey()"
                :columns="apiLinkColumn"
                class="hison-col-12 hison-size-m"
                :height="'800px'"
                :rownum-visible="false"
                :status-visible="false"
                :locked="true"
                :locked-color="false"
                @mounted="mountApiLinkGrid"
            />
            <HGap/>
            <HCaption :level="6" :key="getKey()" class="hison-col-12">{{ contents.t3100 }}</HCaption>
            <HGrid
                id="apiHandlerDefaultGrid"
                :key="getKey()"
                :columns="apiHandlerDefaultColumn"
                class="hison-col-12 hison-size-m"
                :height="'550px'"
                :rownum-visible="false"
                :status-visible="false"
                :locked="true"
                :locked-color="false"
                @mounted="mountApiHandlerDefaultGrid"
            />
            <HGap/>
            <HCaption :level="6" :key="getKey()" class="hison-col-12">{{ contents.t3200 }}</HCaption>
            <HGrid
                id="serviceRuntimeExceptionGrid"
                :key="getKey()"
                :columns="serviceRuntimeExceptionColumn"
                class="hison-col-12 hison-size-m"
                :height="'500px'"
                :rownum-visible="false"
                :status-visible="false"
                :locked="true"
                :locked-color="false"
                @mounted="mountServiceRuntimeExceptionGrid"
            />
            <HGap/>
            <HCaption :level="6" :key="getKey()" class="hison-col-12">{{ contents.t3300 }}</HCaption>
            <HGrid
                id="cachingHandlerDefaultGrid"
                :key="getKey()"
                :columns="cachingHandlerDefaultColumn"
                class="hison-col-12 hison-size-m"
                :height="'300px'"
                :rownum-visible="false"
                :status-visible="false"
                :locked="true"
                :locked-color="false"
                @mounted="mountCachingHandlerDefaultGrid"
            />
            <HGap/>
        </HAccordion>
        <HGap :line="'horizontal'"/>

        <HGap/>
        <HGap/>
    </HLayout>
</template>

<style scoped>
</style>