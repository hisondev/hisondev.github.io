<template>
    <h-layout
        style="height: 110px;"
    ><span></span></h-layout>
    <h-drawer
        :visible="true"
        :height="110"
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
        style="height: 110px; padding: 10px; align-content: flex-end; align-items: flex-end;" :back-color="'primary'"
        >
        <h-caption
            :level="5"
            class="hison-col-12-mb hison-col-2-tb hison-col-2-pc"
            style="cursor: pointer; color: #eee;"
            :text-align="'center'"
            :background-type="'transparent'"
            v-on:click="onLogoClick"
        >HISONDEV</h-caption>
        <h-label
            class="hison-col-2 hison-pos-vertical-bottom"
            style="color: #eee !important;"
            :background-type="'transparent'"
            :border="false"
            :text-align="'center'"
            :text="'Intro'"
            :href="'/intro'"
        ></h-label>
        <h-gap
            :line="'vertical'"
            :background-type="'transparent'"
            :lineColor="'#fff'"
            class="hison-col-1 hison-pos-vertical-bottom"
        ></h-gap>
        <h-label
            class="hison-col-2 hison-pos-vertical-bottom"
            style="color: #eee !important;"
            :background-type="'transparent'"
            :border="false"
            :text-align="'center'"
            :href="'/getting-started'"
            :font-bold="true"
        >Getting Start</h-label>
        <h-gap
            :line="'vertical'"
            :background-type="'transparent'"
            :lineColor="'#fff'"
            class="hison-col-1 hison-pos-vertical-bottom"
        ></h-gap>
        <h-label
            class="hison-col-2 hison-pos-vertical-bottom"
            style="color: #eee !important;"
            :background-type="'transparent'"
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
        style="height: 100%;"
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
            style="padding-top: 120px; height: 100%; position: relative;"
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
            <h-layout
                style="position: absolute; bottom: 0;"
            >
                <h-label
                    class="hison-col-12-mb hison-col-8-tb hison-col-8-pc"
                    :text-align="'center'"
                    :toggle-target="'darkModeToggle'"
                    :text="'dark mode'"
                />
                <h-input
                    class="hison-col-12-mb hison-col-4-tb hison-col-4-pc"
                    id="darkModeToggle"
                    input-type="checkbox"
                    :model-value="darkMode"
                    :toggle-style="'switch'"
                    @change="darkModeOnChange"
                />
            </h-layout>
        </h-layout>
    </h-drawer>
    <h-layout
        class="hison-col-11-pc hison-col-10-mb"
    ><router-view /></h-layout>
</template>

<script setup lang="ts">
import type { Lang } from '@/store';
import { hison, type HDropdownMethods, type HDropdownModel, type HInputMethods } from 'hisonvue';
import { onMounted, ref } from 'vue';
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

const darkMode = ref<boolean>(store.state.darkMode)

const langDropdownOnChange = (oldValue: Lang, newValue: Lang, dropdown: HDropdownMethods) => {
    void oldValue; void dropdown;
    store.commit('setLang', newValue)
}

const darkModeOnChange = (oldValue: boolean, newValue: boolean, input: HInputMethods) => {
  void oldValue; void input;
  store.dispatch('setDarkMode', newValue)
  hison.style.setInvertColor(newValue)
}

onMounted(()=>{
  hison.style.setInvertColor(darkMode.value)
})

const onLogoClick = () => {
    router.replace('/')
}
</script>

<style scoped>
</style>