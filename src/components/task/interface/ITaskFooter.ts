export interface ITaskFooter {
  onStatusChange?: (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  onClick?: (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>,
  ) => void;
}
