import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppThemeProvider } from "./shared/contexts/";
import { MenuLateral } from "./shared/components";
import { Drawer } from "@mui/material";


export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <MenuLateral>
          <AppRoutes />

          
        </MenuLateral>
      </BrowserRouter>
    </AppThemeProvider>
  );
};
