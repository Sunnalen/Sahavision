<template>
  <div class="modal">
    <div class="modal__content">
      <div class="modal__title">
        {{ props.title }}
      </div>
      <div class="modal__folders">
        <SharedFolder
          :folders="folders"
          @select="handleFolderSelect"
          :selectedFolderId="selectedFolderId"
        />
      </div>
    </div>
    <div class="modal__action">
      <SharedButton size="m" @click="confirmSelection">Ok</SharedButton>
      <SharedButton size="m" @click="closeModal">Закрыть</SharedButton>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { ISharedModalProps, ISharedModalEmits } from './SharedModal.types';

  const props = defineProps<ISharedModalProps>()

  const emit = defineEmits<ISharedModalEmits>()

  const folders = [
    {
      id: 1,
      name: 'Папка 1',
      children: [
        { id: 2, name: 'Папка 1.1', children: [] },
        {
          id: 3,
          name: 'Папка 1.2',
          children: [{ id: 4, name: 'Папка 1.2.1', children: [] }],
        },
      ],
    },
    { 
      id: 5, 
      name: 'Папка 2', 
      children: [] 
    },
  ]

  const selectedFolderId = ref<number | null>(null);

  function closeModal() {
    emit('close')
  }

  function handleFolderSelect(folderId: number | null) {
    selectedFolderId.value = folderId;
}

function confirmSelection() {
  if (selectedFolderId.value !== null) {
    alert('Selected folder ID:'+ selectedFolderId.value);
    emit('select', selectedFolderId.value);
  }
  closeModal();
}
</script>

<style>
  .modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: 1000;
  }

  .modal__content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .modal__title {
    font-size: 48px;
    color: white;
  }

  .modal__action {
    margin-top: 10px;
    display: flex;
    gap: 5px;
  }
</style>