<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import { apiHisonjsContents, apiLinkGridData, apiLinkPropGridData, cachingModuleGridData, cachingModulePropGridData, dataConfigGridData, dataModelGridData, dataWrapperGridData, sheildMethodAndPropGridData, utilsConfigJsGridData, utilsGridData } from '@/content/api/hisonjs';
import type { Lang } from '@/store';
import { getUUID } from '@/common/utils';
import type { HGridColumn, HGridMethods } from 'hisonvue';

const store = useStore()
const contents = computed(() => apiHisonjsContents[store.state.lang as Lang])
const getKey = () => store.state.lang + getUUID()


const utilsColumn: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '10%' },
  { id: 'param', header: 'param', dataType: 'text', width: '15%' },
  { id: 'return', header: 'return', dataType: 'text', width: '15%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '30%' },
  { id: 'note', header: 'note', dataType: 'text', width: '30%' },
]
const utilsConfigColumn: HGridColumn[] = [
  { id: 'prop', header: 'prop', dataType: 'text', width: '10%' },
  { id: 'default', header: 'default', dataType: 'text', width: '10%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '30%' },
  { id: 'note', header: 'note', dataType: 'text', width: '50%' },
]
const sheildMethodAndPropColumn: HGridColumn[] = [
  { id: 'prop', header: 'prop', dataType: 'text', width: '20%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '80%' },
]
const dataWrapperColumn: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '10%' },
  { id: 'param', header: 'param', dataType: 'text', width: '10%' },
  { id: 'return', header: 'return', dataType: 'text', width: '10%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '40%' },
  { id: 'note', header: 'note', dataType: 'text', width: '30%' },
]
const dataModelColumn: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '10%' },
  { id: 'param', header: 'param', dataType: 'text', width: '10%' },
  { id: 'return', header: 'return', dataType: 'text', width: '10%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '40%' },
  { id: 'note', header: 'note', dataType: 'text', width: '30%' },
]
const dataConfigColumn: HGridColumn[] = [
  { id: 'prop', header: 'prop', dataType: 'text', width: '15%' },
  { id: 'type', header: 'type', dataType: 'text', width: '15%' },
  { id: 'default', header: 'default', dataType: 'text', width: '15%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '55%' },
]
const apiLinkColumn: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '10%' },
  { id: 'param', header: 'param', dataType: 'text', width: '10%' },
  { id: 'return', header: 'return', dataType: 'text', width: '10%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '40%' },
  { id: 'note', header: 'note', dataType: 'text', width: '30%' },
]
const apiLinkPropColumn: HGridColumn[] = [
  { id: 'prop', header: 'prop', dataType: 'text', width: '30%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '70%' },
]
const cachingModuleColumn: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '10%' },
  { id: 'param', header: 'param', dataType: 'text', width: '10%' },
  { id: 'return', header: 'return', dataType: 'text', width: '10%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '40%' },
  { id: 'note', header: 'note', dataType: 'text', width: '30%' },
]
const cachingModulePropColumn: HGridColumn[] = [
  { id: 'prop', header: 'prop', dataType: 'text', width: '30%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '70%' },
]

const mountUtilsGrid = async (grid: HGridMethods) => {
  grid.load(store.state.lang === 'en' ? utilsGridData.en : utilsGridData.ko)
}
const mountUtilsConfigGrid = async (grid: HGridMethods) => {
  grid.load(store.state.lang === 'en' ? utilsConfigJsGridData.en : utilsConfigJsGridData.ko)
}
const mountSheildMethodAndPropGrid = async (grid: HGridMethods) => {
  grid.load(store.state.lang === 'en' ? sheildMethodAndPropGridData.en : sheildMethodAndPropGridData.ko)
}
const mountDataWrapperGrid = async (grid: HGridMethods) => {
  grid.load(store.state.lang === 'en' ? dataWrapperGridData.en : dataWrapperGridData.ko)
}
const mountDataModelGrid = async (grid: HGridMethods) => {
  grid.load(store.state.lang === 'en' ? dataModelGridData.en : dataModelGridData.ko)
}
const mountDataConfigGrid = async (grid: HGridMethods) => {
  grid.load(store.state.lang === 'en' ? dataConfigGridData.en : dataConfigGridData.ko)
}
const mountApiLinkGrid = async (grid: HGridMethods) => {
  grid.load(store.state.lang === 'en' ? apiLinkGridData.en : apiLinkGridData.ko)
}
const mountApiLinkPropGrid = async (grid: HGridMethods) => {
  grid.load(store.state.lang === 'en' ? apiLinkPropGridData.en : apiLinkPropGridData.ko)
}
const mountCachingModuleGrid = async (grid: HGridMethods) => {
  grid.load(store.state.lang === 'en' ? cachingModuleGridData.en : cachingModuleGridData.ko)
}
const mountCachingModulePropGrid = async (grid: HGridMethods) => {
  grid.load(store.state.lang === 'en' ? cachingModulePropGridData.en : cachingModulePropGridData.ko)
}

</script>

<template>
    <HLayout>
        <HGap/>
        <HCaption class="hison-col-12" :key="getKey()">{{ contents.caption }}</HCaption>
        <HGap :line="'horizontal'"/>
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
            :height="'600px'"
            :rownum-visible="false"
            :status-visible="false"
            :locked="true"
            :locked-color="false"
            @mounted="mountUtilsConfigGrid"
        />
        <HGap/>

        <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.subhead2 }}</HCaption>
        <HCaption :level="6" :key="getKey()" class="hison-col-12">{{ contents.t2000 }}</HCaption>
        <HGrid
            id="sheildMethodAndPropGrid"
            :key="getKey()"
            :columns="sheildMethodAndPropColumn"
            class="hison-col-12 hison-size-m"
            :height="'300px'"
            :rownum-visible="false"
            :status-visible="false"
            :locked="true"
            :locked-color="false"
            @mounted="mountSheildMethodAndPropGrid"
        />
        <HGap/>

        <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.subhead3 }}</HCaption>
        <HCaption :level="6" :key="getKey()" class="hison-col-12">{{ contents.t3000 }}</HCaption>
        <HGrid
            id="dataWrapperGrid"
            :key="getKey()"
            :columns="dataWrapperColumn"
            class="hison-col-12 hison-size-m"
            :height="'600px'"
            :rownum-visible="false"
            :status-visible="false"
            :locked="true"
            :locked-color="false"
            @mounted="mountDataWrapperGrid"
        />
        <HGap/>
        <HCaption :level="6" :key="getKey()" class="hison-col-12">{{ contents.t3100 }}</HCaption>
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
        <HCaption :level="6" :key="getKey()" class="hison-col-12">{{ contents.t3200 }}</HCaption>
        <HGrid
            id="dataConfigGrid"
            :key="getKey()"
            :columns="dataConfigColumn"
            class="hison-col-12 hison-size-m"
            :height="'800px'"
            :rownum-visible="false"
            :status-visible="false"
            :locked="true"
            :locked-color="false"
            @mounted="mountDataConfigGrid"
        />
        <HGap/>

        <HCaption :level="5" :key="getKey()" class="hison-col-12">{{ contents.subhead4 }}</HCaption>
        <HCaption :level="6" :key="getKey()" class="hison-col-12">{{ contents.t4000 }}</HCaption>
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
        <HCaption :level="6" :key="getKey()" class="hison-col-12">{{ contents.t4100 }}</HCaption>
        <HGrid
            id="apiLinkPropGrid"
            :key="getKey()"
            :columns="apiLinkPropColumn"
            class="hison-col-12 hison-size-m"
            :height="'800px'"
            :rownum-visible="false"
            :status-visible="false"
            :locked="true"
            :locked-color="false"
            @mounted="mountApiLinkPropGrid"
        />
        <HGap/>
        <HCaption :level="6" :key="getKey()" class="hison-col-12">{{ contents.t4200 }}</HCaption>
        <HGrid
            id="cachingModuleGrid"
            :key="getKey()"
            :columns="cachingModuleColumn"
            class="hison-col-12 hison-size-m"
            :height="'800px'"
            :rownum-visible="false"
            :status-visible="false"
            :locked="true"
            :locked-color="false"
            @mounted="mountCachingModuleGrid"
        />
        <HGap/>
        <HCaption :level="6" :key="getKey()" class="hison-col-12">{{ contents.t4300 }}</HCaption>
        <HGrid
            id="cachingModulePropGrid"
            :key="getKey()"
            :columns="cachingModulePropColumn"
            class="hison-col-12 hison-size-m"
            :height="'800px'"
            :rownum-visible="false"
            :status-visible="false"
            :locked="true"
            :locked-color="false"
            @mounted="mountCachingModulePropGrid"
        />
        <HGap/>
        <HGap/>
    </HLayout>
</template>

<style scoped>
</style>
