import * as M from "@mui/material";
import { ButtonProps } from "@mui/material";
export const Button = ({ children, variant }: ButtonProps) => {
  return <M.Button variant={variant}>{children}</M.Button>;
};
