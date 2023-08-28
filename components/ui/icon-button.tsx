import { Button, ButtonProps } from "./button";

interface IconButtonProps extends ButtonProps {
  icon: React.ReactNode;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  ...btnProps
}) => {
  return <Button {...btnProps}>{icon}</Button>;
};
