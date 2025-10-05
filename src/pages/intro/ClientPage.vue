<script setup lang="ts">
import { hison } from 'hisonvue';

const openModal = () => {
    const md = hison.component.getModal('md')!
    md.open();
}
</script>

<template>
    <HModal
    id="md"
    background-type="filled"
    class="hison-size-xl hison-color-danger"
    >
        <HLayout>
            <HParagraph>
                this is test modal
            </HParagraph>
        </HLayout>
    </HModal>
    <HLayout>
    <HCaption>intro client page</HCaption>
    </HLayout>
    <HLayout
        :height="'300px'"
    >
        <HButton
            @click="openModal"
            class="hison-size-xl hison-color-danger"
        >open modal</HButton>
    </HLayout>
</template>

<style scoped>
</style>
