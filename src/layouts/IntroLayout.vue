<template>
  <h-layout
    style="height: 100px;"
    :border="true"
  ></h-layout>
  <h-drawer
    :visible="true"
    :height="100"
    :position="'bottom'"
    :border="true"
    :close-button-visible="false"
    :show-overlay="false"
  >
    <h-layout
      style="padding-left: 20px; padding-top: 40px;"
    >
      <h-label
        class="hison-col-2"
        :background-type="'empty'"
        :border="false"
        :text-align="'center'"
        :text="'Intro'"
      ></h-label>
      <h-gap
        :line="'vertical'"
         class="hison-col-1"
      ></h-gap>
      <h-label
        class="hison-col-2"
        :background-type="'empty'"
        :border="false"
        :text-align="'center'"
      >Getting Start</h-label>
      <h-gap
        :line="'vertical'"
         class="hison-col-1"
      ></h-gap>
      <h-label
        class="hison-col-2"
        :background-type="'empty'"
        :border="false"
        :text-align="'center'"
      >API</h-label>
    </h-layout>
  </h-drawer>

  <div class="wrap">
    <header class="top">Intro | Getting Start | API</header>
    <div class="grid">
      <aside class="side">
        <!-- Intro 전용 좌측 메뉴(임시 텍스트) -->
        <nav>
          <a href="/intro/overview">Overview</a><br />
          <a href="/intro/client">Client</a><br />
          <a href="/intro/service">Service</a>
        </nav>
      </aside>
      <main class="content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
</style>