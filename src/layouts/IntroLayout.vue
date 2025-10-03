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
      :font-bold="true"
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
    >API</h-label>
    </h-layout>
  </h-drawer>

  <h-layout
    style="height: 100%;"
    class="hison-col-2"
  ><span></span></h-layout>
  <h-drawer
    :visible="true"
    :position="'left'"
    :border="true"
    :close-button-visible="false"
    :show-overlay="false"
    class="hison-col-2"
    :enter-animation-class="'none'"
    :leave-animation-class="'none'"
  >
    <h-layout
    style="padding-top: 100px; padding-left: 10px;"
    >
      <h-label
        class="hison-col-12"
        :background-type="'empty'"
        :border="false"
        :text-align="'left'"
        :href="'/intro/overview'"
      >overview</h-label>
      <h-label
        class="hison-col-12"
        :background-type="'empty'"
        :border="false"
        :text-align="'left'"
        :href="'/intro/client'"
      >client</h-label>
      <h-label
        class="hison-col-12"
        :background-type="'empty'"
        :border="false"
        :text-align="'left'"
        :href="'/intro/service'"
      >service</h-label>
    </h-layout>
  </h-drawer>
  <h-layout
    class="hison-col-10"
  ><router-view /></h-layout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const onLogoClick = () => {
    router.replace('/')
}
</script>

<style scoped>
</style>