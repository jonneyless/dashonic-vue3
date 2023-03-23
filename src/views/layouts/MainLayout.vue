<script setup lang="ts">
  import TopBar from "@/components/structures/TopBar.vue";
  import SideBar from "@/components/structures/SideBar.vue";
</script>

<template>
  <div id="layout-wrapper">
    <TopBar />
    <SideBar />
  </div>

  <RouterView />
</template>
