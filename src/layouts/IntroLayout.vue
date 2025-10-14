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
        :font-bold="true"
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
      <h-dropdown
        class="hison-col-1 hison-pos-vertical-bottom hison-pos-right"
        :background-type="'empty'"
        :border="false"
        style="z-index: 9999;"
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
        :href="'/intro/overview'"
        @mounted="overviewLabelOnMounted"
      >overview</h-label>
      <h-label
        class="hison-col-12"
        :background-type="'empty'"
        :border="false"
        :text-align="'left'"
        :href="'/intro/service'"
        @mounted="serviceLabelOnMounted"
      >service</h-label>
      <h-label
        class="hison-col-12"
        :background-type="'empty'"
        :border="false"
        :text-align="'left'"
        :href="'/intro/client'"
        @mounted="clientLabelOnMounted"
      >client</h-label>
    </h-layout>
  </h-drawer>
  <h-layout
    class="hison-col-11-pc hison-col-10-mb"
  ><router-view /></h-layout>
</template>

<script setup lang="ts">
import type { HLabelMethods } from 'hisonvue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore()

const onLogoClick = () => {
    router.replace('/')
}

const overviewLabelOnMounted = (label: HLabelMethods) => {
    console.log(router.currentRoute.value.path)
    if(router.currentRoute.value.path.indexOf('overview') >= 0) {
      label.setFontBold(true)
      label.setFontUnderline(true)
    }
}
const serviceLabelOnMounted = (label: HLabelMethods) => {
    if(router.currentRoute.value.path.indexOf('service') >= 0) {
      label.setFontBold(true)
      label.setFontUnderline(true)
    }
}
const clientLabelOnMounted = (label: HLabelMethods) => {
    if(router.currentRoute.value.path.indexOf('client') >= 0) {
      label.setFontBold(true)
      label.setFontUnderline(true)
    }
}
</script>

<style scoped>
</style>