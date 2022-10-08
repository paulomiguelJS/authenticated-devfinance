import { DropDownItem } from "./styles";

interface DropProps {
  name: string;
}

export function DropdownItem({ name }: DropProps) {
  return (
    <DropDownItem>
      <li>
        <a href="">{name}</a>
      </li>
    </DropDownItem>
  );
}
