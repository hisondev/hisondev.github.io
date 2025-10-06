<script setup lang="ts">
import { ref } from 'vue';
import { fetchGvizAsObjects } from '@/lib/sheets';
import { hison, type HGridColumn, type HGridMethods } from 'hisonvue';

const spinner = hison.component.getSpinner('spinner');

// 로드 상태 관리
const pendingLoads = ref(0);
const beginLoad = () => {
    if (pendingLoads.value === 0) spinner?.setVisible(true);
    pendingLoads.value++;
};
const endLoad = () => {
    pendingLoads.value = Math.max(0, pendingLoads.value - 1);
    if (pendingLoads.value === 0) spinner?.setVisible(false);
};

// 시트 정보
const SPREADSHEET_ID = '1GwQrfzMdGWEpigqC7Dr9DF9-RcW8EFi13lzQDFC9Srs';
const GID01 = '0';
const GID02 = '912162557';

// 그리드1
const rows01 = ref<any[]>([]);
const columns01: HGridColumn[] = [
    { id: 'method', header: 'method', dataType: 'text', width: '15%' },
    { id: 'param', header: 'param', dataType: 'text', width: '15%' },
    { id: 'return', header: 'return', dataType: 'text', width: '10%' },
    { id: 'explain', header: 'explain', dataType: 'text', width: '30%' },
    { id: 'note', header: 'note', dataType: 'text', width: '30%' },
];
const mountGrid01 = async (grid: HGridMethods) => {
    beginLoad();
    try {
        rows01.value = await fetchGvizAsObjects(SPREADSHEET_ID, GID01, {
            fallbackBase: 1,
            skipEmptyHeaderRows: true,
        });
        grid.load(rows01.value);
    } catch (e) {
        console.error(e);
    } finally {
        endLoad();
    }
};

// 그리드2
const rows02 = ref<any[]>([]);
const columns02: HGridColumn[] = [
    { id: 'field', header: 'field', dataType: 'text', width: '10%' },
    { id: 'explain', header: 'explain', dataType: 'text', width: '25%' },
    { id: 'notice', header: 'notice', dataType: 'text', width: '40%' },
    { id: 'default', header: 'default', dataType: 'text', width: '15%' },
    { id: 'setting', header: 'setting', dataType: 'text', width: '10%' },
];
const mountGrid02 = async (grid: HGridMethods) => {
    beginLoad();
    try {
        rows02.value = await fetchGvizAsObjects(SPREADSHEET_ID, GID02, {
            fallbackBase: 1,
            skipEmptyHeaderRows: true,
        });
        grid.load(rows02.value);
    } catch (e) {
        console.error(e);
    } finally {
        endLoad();
    }
};
</script>

<template>
    <HLayout>
        <HCaption>api hisonjs page</HCaption>
        <HGap />
        <HGrid
            id="grid01"
            :columns="columns01"
            class="hison-col-12"
            :height="'900px'"
            :rownum-visible="false"
            :status-visible="false"
            @mounted="mountGrid01"
        />
        <HGap />
        <HGrid
            id="grid02"
            :columns="columns02"
            class="hison-col-12"
            :height="'500px'"
            :rownum-visible="false"
            :status-visible="false"
            @mounted="mountGrid02"
        />
    </HLayout>
</template>

<style scoped>
</style>
