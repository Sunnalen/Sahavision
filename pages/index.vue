<template>
  <div class="main">
    <SharedButton size="l" @click="openModal"> Открыть </SharedButton>
    <SharedModal title="Архив папок" v-if="isModalOpen" @close="isModalOpen = false" />
  </div>
</template>

<script setup lang="ts">
  const isModalOpen = ref<boolean>(false)

  function openModal() {
    isModalOpen.value = true
  }
</script>

<style>
  .main {
    padding: 5px;
    display: flex;
    justify-content: center;
  }
</style>