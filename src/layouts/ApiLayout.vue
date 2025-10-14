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
            <h-caption :level="5" class="hison-col-12-mb hison-col-2-tb" v-on:click="onLogoClick" style="cursor: pointer;">HISONDEV</h-caption>
            <h-label
                class="hison-col-3-mb hison-col-2-tb hison-col-2-pc hison-pos-vertical-bottom"
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
                class="hison-col-3-mb hison-col-2-tb hison-col-2-pc hison-pos-vertical-bottom"
                :background-type="'empty'"
                :border="false"
                :text-align="'center'"
                :href="'/getting-started'"
            >Getting Start</h-label>
            <h-gap
                :line="'vertical'"
                class="hison-col-1 hison-pos-vertical-bottom"
            ></h-gap>
            <h-label
                class="hison-col-3-mb hison-col-2-tb hison-col-2-pc hison-pos-vertical-bottom"
                :background-type="'empty'"
                :border="false"
                :text-align="'center'"
                :href="'/api'"
                :font-bold="true"
            >API</h-label>
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
                :href="'/api/hisonjv'"
                @mounted="hisonjvLabelOnMounted"
            >hisonjv</h-label>
            <h-label
                class="hison-col-12"
                :background-type="'empty'"
                :border="false"
                :text-align="'left'"
                :href="'/api/hisonjs'"
                @mounted="hisonjsLabelOnMounted"
            >hisonjs</h-label>
            <h-label
                class="hison-col-12"
                :background-type="'empty'"
                :border="false"
                :text-align="'left'"
                :href="'/api/hisonvue'"
                @mounted="hisonvueLabelOnMounted"
            >hisonvue</h-label>
        </h-layout>
    </h-drawer>
    <h-layout
        class="hison-col-11-pc hison-col-10-mb"
    ><router-view /></h-layout>
</template>

<script setup lang="ts">
import type { HLabelMethods } from 'hisonvue';
import { useRouter } from 'vue-router';

const router = useRouter();
console.log(router)

const onLogoClick = () => {
    router.replace('/')
}

const hisonjvLabelOnMounted = (label: HLabelMethods) => {
    console.log(router.currentRoute.value.path)
    if(router.currentRoute.value.path.indexOf('hisonjv') >= 0) {
      label.setFontBold(true)
      label.setFontUnderline(true)
    }
}
const hisonjsLabelOnMounted = (label: HLabelMethods) => {
    if(router.currentRoute.value.path.indexOf('hisonjs') >= 0) {
      label.setFontBold(true)
      label.setFontUnderline(true)
    }
}
const hisonvueLabelOnMounted = (label: HLabelMethods) => {
    if(router.currentRoute.value.path.indexOf('hisonvue') >= 0) {
      label.setFontBold(true)
      label.setFontUnderline(true)
    }
}

</script>

<style scoped>
</style>