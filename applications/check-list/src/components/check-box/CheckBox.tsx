import { memo } from "react";

type Props = {
  value: boolean
  onClick: (newValue: boolean) => void
}

export const CheckBox = memo((props: Props) => {
  const {value, onClick} = props;
  const handleClick = () => {
    onClick(!value);
  };
  return (
    <input type="checkbox" checked={value} onChange={handleClick} />
  );
});
