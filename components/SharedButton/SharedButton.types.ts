export type TSizeBtn = 'l' | 'm'

export interface ISharedButtonProps {
  size: TSizeBtn
}

export type TBtnClass = Record<TSizeBtn, string>