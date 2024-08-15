import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppThemeProvider, DrawerProvider } from "./shared/contexts/";
import { MenuLateral } from "./shared/components";
import { Drawer } from "@mui/material";


export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>

          <MenuLateral>
            <AppRoutes />
          </MenuLateral>
          
        </BrowserRouter>
      </DrawerProvider> 
    </AppThemeProvider>
  );
};
