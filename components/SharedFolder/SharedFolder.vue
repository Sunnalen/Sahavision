<template>
  <div class="folder__items">
    <div
      v-for="folder in foldersState"
      :key="folder.id"
      :class="['folder__item', { 'folder__item-selected': folder.id === selectedFolderId }]"
    >
      <span 
        @click="selectFolder(folder.id)" 
        class="folder__name"
      >
        {{ folder.name }}
      </span>
      <nuxt-icon
        class="folder__icon"
        v-if="folder.children && folder.children.length"
        @click="toggleFolder(folder.id)"
        :name="folder.isOpen ? 'minus_circle' : 'plus_circle'"
        filled
        />
      <div
        v-if="folder.isOpen && folder.children && folder.children.length"
        class="folder__children"
      >
        <SharedFolder
          :folders="folder.children"
          @select="selectFolder"
          :selectedFolderId="props.selectedFolderId"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import type { ISharedFolderProps, ISharedFolderEmits } from './SharedFolder.types';

const props = defineProps<ISharedFolderProps>();
const emit = defineEmits<ISharedFolderEmits>();

const foldersState = reactive(
  props.folders.map((folder) => ({
    ...folder,
    isOpen: false,
    children: folder.children?.map((child) => ({ ...child, isOpen: false })),
  }))
);

function toggleFolder(folderId: number) {
  const folder = findFolderById(folderId);
  if (folder) folder.isOpen = !folder.isOpen;
}

function findFolderById(folderId: number, folders = foldersState): any | null {
  for (const folder of folders) {
    if (folder.id === folderId) return folder;
    if (folder.children?.length) {
      const child = findFolderById(folderId, folder.children);
      if (child) return child;
    }
  }
  return null;
}

function selectFolder(folderId: number) {
  if (props.selectedFolderId === folderId) {
    emit('select', null); 
  } else {
    emit('select', folderId);
  }
}
</script>

<style scoped>
.folder__items {
  margin-top: 10px;
  margin-left: 10px;
}

.folder__item {
  font-size: 32px;
  color: white;
  margin: 5px 0;
}

.folder__item-selected {
  color: #01A7FD;
}

.folder__header {
  display: flex;
  align-items: center;
}

.folder__toggle {
  border: none;
  background-color: white;
  cursor: pointer;
  margin-right: 5px;
}

.folder__icon {
  margin-left: 5px;
}

.folder__name {
  cursor: pointer;
}

.folder__children {
  color: white;
  margin-top: 5px;
  margin-left: 20px;
}
</style>
