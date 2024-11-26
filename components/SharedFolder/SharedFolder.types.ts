export interface ISharedFolder {
  id: number,
  name: string,
  children: any[]
}

export interface ISharedFolderProps {
  folders: ISharedFolder[]
  selectedFolderId: number | null
}

export interface ISharedFolderEmits {
  (event: 'select', folderId: number | null): void
}