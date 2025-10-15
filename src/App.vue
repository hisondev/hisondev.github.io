<script setup lang="ts">
</script>

<template>
    <HSpinner
      id="spinner"
    />
    <HModal
      id="alertModal"
      :closeButtonVisible="false"
      :footerVisible="false"
      :headerVisible="false"
    ><HLabel id="alertComment"></HLabel></HModal>
  <router-view />
</template>

<style scoped>
</style>