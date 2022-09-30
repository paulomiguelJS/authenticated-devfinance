import { DropDownItem } from "./styles";

export function DropdownItem(props) {
  return (
    <DropDownItem>
      <li>
        <a href="">{props.name}</a>
      </li>
    </DropDownItem>
  );
}
