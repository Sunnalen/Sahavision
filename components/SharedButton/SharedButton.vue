<template>
  <button :class="['btn', btnSize[size]]">
    <slot />
  </button>
</template>

<script setup lang="ts">
  import type { TBtnClass, ISharedButtonProps } from './SharedButton.types';

  const props = defineProps<ISharedButtonProps>()

  const btnSize:TBtnClass = {
    l: 'btn__large',
    m: 'btn__medium'
  }
</script>

<style>
 .btn {
  border: 1px solid #01A7FD;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: #01A7FD;
  cursor: pointer;
  transition: all 0.3s ease;
 }

 .btn__large {
  font-size: 32px;
  padding: 5px 15px;
  gap: 8px;
  border-radius: 20px;
 }

 .btn__medium {
  font-size: 24px;
  padding: 5px 10px;
  border-radius: 10px;
 }

 .btn:hover {
  background-color: #01A7FD;
  color: white;
}

.btn:hover .btn__icon path {
  fill: white !important;
}

.btn:active {
  transform: scale(0.95);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>