export interface ISharedModalProps {
  title: string
}

export interface ISharedModalEmits {
  (e:'close'): void;
  (e: 'select', folderId: number | null): void;
}