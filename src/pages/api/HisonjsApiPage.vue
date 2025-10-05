<script setup lang="ts">
    import { ref } from 'vue';
    import { fetchGvizAsObjects } from '@/lib/sheets';
import type { HGridColumn, HGridMethods } from 'hisonvue';

    const rows = ref<any[]>([]);
    const loading = ref(true);
    const error = ref<string | null>(null);

    // 네 시트 정보
    const SPREADSHEET_ID = '1GwQrfzMdGWEpigqC7Dr9DF9-RcW8EFi13lzQDFC9Srs';
    const GID = '0'; // 탭 gid (URL에 gid=0 이었음)

    const mountGrid01 = async (grid: HGridMethods) => {
        try {
            rows.value = await fetchGvizAsObjects(SPREADSHEET_ID, GID);
            console.log(rows.value)
            grid.load(rows.value)
        } catch (e: any) {
            error.value = e?.message ?? String(e);
        } finally {
            loading.value = false;
        }
    };
    const columns: HGridColumn[] = [
        { id: 'col1', header: 'header;1', dataType: 'text', width: '15%' },
        { id: 'col2', header: ';2', dataType: 'text', width: '15%' },
        { id: 'col3', header: ';3', dataType: 'text', width: '35%' },
        { id: 'col4', header: ';4', dataType: 'text', width: '35%',}
    ]
</script>

<template>
    <HLayout>
        <HCaption>api hisonjs page !!!</HCaption>
    </HLayout>
    <HGrid
    id="grid01"
    :columns="columns"
    class="hison-col-12"
    :height="'800px'"
    @mounted="mountGrid01"
    >

    </HGrid>
</template>

<style scoped>
</style>
