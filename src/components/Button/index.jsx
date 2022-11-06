import { Btn } from "./styles";

export function Button({ onClick, text, type, variant, theme }) {
  return (
    <Btn onClick={onClick} variant={variant} theme={theme} type={type}>
      {text}
    </Btn>
  );
}
