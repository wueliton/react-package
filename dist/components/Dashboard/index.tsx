import * as M from "@mui/material";
import { ButtonProps } from "@mui/material";
import { Button } from "../Button";

export interface DashboardProps {
  buttons: ButtonProps[];
}

export const Dashboard = ({ buttons }: DashboardProps) => {
  return (
    <M.Container>
      <M.Grid container spacing={2}>
        <M.Grid item md={4} xs={12}>
          {!!buttons && buttons.map((props) => <Button {...props}></Button>)}
        </M.Grid>
        <M.Grid item md={8} xs={12}>
          Conteúdo
        </M.Grid>
      </M.Grid>
    </M.Container>
  );
};
