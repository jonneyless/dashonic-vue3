<script setup lang="ts">
  import TopBar from "@/components/structures/TopBar.vue";
  import SideBar from "@/components/structures/SideBar.vue";
  import { replace } from "feather-icons";
  import { onMounted } from "vue";
  import router from "@/router";

  onMounted(() => {
    replace();
  });

  const toggleSidebarHandle = () => {
    console.log(1);
    let currentSidebarSize = document.body.getAttribute("data-sidebar-size");
    document.body.classList.toggle("sidebar-enable");
    if (window.screen.width >= 992) {
      // eslint-disable-next-line no-unused-vars
      router.afterEach((routeTo, routeFrom) => {
        document.body.classList.remove("sidebar-enable");
      });
      if (currentSidebarSize == null) {
        document.body.getAttribute("data-sidebar-size") == null ||
        document.body.getAttribute("data-sidebar-size") == "lg"
            ? document.body.setAttribute("data-sidebar-size", "sm")
            : document.body.setAttribute("data-sidebar-size", "lg");
      } else if (currentSidebarSize == "md") {
        document.body.getAttribute("data-sidebar-size") == "md"
            ? document.body.setAttribute("data-sidebar-size", "sm")
            : document.body.setAttribute("data-sidebar-size", "md");
      } else {
        document.body.getAttribute("data-sidebar-size") == "sm"
            ? document.body.setAttribute("data-sidebar-size", "lg")
            : document.body.setAttribute("data-sidebar-size", "sm");
      }
    } else {
      // eslint-disable-next-line no-unused-vars
      router.afterEach((routeTo, routeFrom) => {
        document.body.classList.remove("sidebar-enable");
      });
      document.body.classList.remove("vertical-collpsed");
    }
  }
</script>

<template>
  <div id="layout-wrapper">
    <TopBar @toggleSidebar="toggleSidebarHandle" />
    <SideBar @toggleSidebar="toggleSidebarHandle" />
  </div>

  <RouterView />
</template>
