<template>
    <h-layout
        style="height: 90px;"
    ><span></span></h-layout>
    <h-drawer
        :visible="true"
        :height="90"
        :position="'top'"
        :border="true"
        :close-button-visible="false"
        :show-overlay="false"
        :scroll-lock="false"
        :z-index="1102"
        :enter-animation-class="'none'"
        :leave-animation-class="'none'"
    >
        <h-layout
        style="height: 90px; padding: 10px; align-content: flex-end; align-items: flex-end;"
        >
        <h-caption
            :level="5"
            class="hison-col-12-mb hison-col-2-tb"
            :text-align="'center'"
            v-on:click="onLogoClick"
            style="cursor: pointer;"
        >HISONDEV</h-caption>
        <h-label
            class="hison-col-2 hison-pos-vertical-bottom"
            :background-type="'empty'"
            :border="false"
            :text-align="'center'"
            :text="'Intro'"
            :href="'/intro'"
        ></h-label>
        <h-gap
            :line="'vertical'"
            class="hison-col-1 hison-pos-vertical-bottom"
        ></h-gap>
        <h-label
            class="hison-col-2 hison-pos-vertical-bottom"
            :background-type="'empty'"
            :border="false"
            :text-align="'center'"
            :href="'/getting-started'"
            :font-bold="true"
        >Getting Start</h-label>
        <h-gap
            :line="'vertical'"
            class="hison-col-1 hison-pos-vertical-bottom"
        ></h-gap>
        <h-label
            class="hison-col-2 hison-pos-vertical-bottom"
            :background-type="'empty'"
            :border="false"
            :text-align="'center'"
            :href="'/api'"
        >API</h-label>
        <HDropdown
            v-model="langDropdownModel"
            class="hison-col-2 hison-pos-vertical-bottom hison-pos-right"
            @change="langDropdownOnChange"
            :textAlign="'left'"
            :trigger="'click'"
        />
        </h-layout>
    </h-drawer>
  
    <h-layout
        style="height: 100%;"
        class="hison-col-1-pc hison-col-2-mb"
    ><span></span></h-layout>
    <h-drawer
        class="hison-col-1-pc hison-col-2-mb"
        :visible="true"
        :position="'left'"
        :border="true"
        :close-button-visible="false"
        :show-overlay="false"
        :scroll-lock="false"
        :enter-animation-class="'none'"
        :leave-animation-class="'none'"
    >
        <h-layout
            style="padding-top: 100px;"
        >
            <h-label
                class="hison-col-12"
                :background-type="'empty'"
                :border="false"
                :text-align="'left'"
                :href="'/getting-started/hisonjv'"
                :font-bold="route.path.includes('hisonjv')"
                :font-underline="route.path.includes('hisonjv')"
            >hisonjv</h-label>
            <h-label
                class="hison-col-12"
                :background-type="'empty'"
                :border="false"
                :text-align="'left'"
                :href="'/getting-started/hisonjs'"
                :font-bold="route.path.includes('hisonjs')"
                :font-underline="route.path.includes('hisonjs')"
            >hisonjs</h-label>
            <h-label
                class="hison-col-12"
                :background-type="'empty'"
                :border="false"
                :text-align="'left'"
                :href="'/getting-started/hisonvue'"
                :font-bold="route.path.includes('hisonvue')"
                :font-underline="route.path.includes('hisonvue')"
            >hisonvue</h-label>
        </h-layout>
    </h-drawer>
    <h-layout
        class="hison-col-11-pc hison-col-10-mb"
    ><router-view /></h-layout>
</template>

<script setup lang="ts">
import type { Lang } from '@/store';
import type { HDropdownMethods, HDropdownModel } from 'hisonvue';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter();
const route = useRoute()
const store = useStore()

const langDropdownModel = ref<HDropdownModel>({
    value: store.state.lang,
    options: [
      { label: 'en', value: 'en'},
      { label: 'ko', value: 'ko'},
    ],
})
const langDropdownOnChange = (oldValue: Lang, newValue: Lang, dropdown: HDropdownMethods) => {
    void oldValue; void dropdown;
    store.commit('setLang', newValue)
    console.log('lang', store.state.lang)
}

const onLogoClick = () => {
    router.replace('/')
}
</script>

<style scoped>
</style>