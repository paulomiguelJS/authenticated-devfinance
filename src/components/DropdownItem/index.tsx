import { DropDownItem } from "./styles";

export function DropdownItem({name}) {
  return (
    <DropDownItem>
      <li>
        <a href="">{name}</a>
      </li>
    </DropDownItem>
  );
}
