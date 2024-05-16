<template>
  <div class="app">
    <PageHeader class="app__header" />
    <main class="app__index"><NuxtPage /></main>
    <PageFooter class="app__header" />
  </div>
</template>

<script setup>
useHead({
  meta: [{ name: "format-detection", content: "telephone=no" }],
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600&family=Open+Sans&display=swap",
    },
  ],
});
</script>

<style lang="less"></style>
