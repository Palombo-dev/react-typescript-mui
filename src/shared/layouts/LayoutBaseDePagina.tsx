import { Icon, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { useAppThemeContext, useDrawerContext } from "../contexts";
import { ReactNode } from "react";

interface ILayoutProviderProps {
  children: React.ReactNode;
  titulo: string;
  barraDeFerramentas?: ReactNode
}

export const LayoutBaseDePagina: React.FC<ILayoutProviderProps> = ({
  children,
  titulo,
  barraDeFerramentas
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const {toggleDrawerOpen} = useDrawerContext()
  const { toggleTheme } = useAppThemeContext()

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box
        padding={1}
        display="flex"
        alignItems="center"
        gap={1}
        height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}
      >
        {smDown && (<IconButton onClick={toggleDrawerOpen}>
          <Icon>menu</Icon>
        </IconButton>)}

        <Typography 
            whiteSpace='nowrap'
            overflow='hidden'
            textOverflow='ellipses'
            variant={smDown? "h5" : mdDown ? "h4" : "h3" }
        >
            {titulo}
        </Typography>
      </Box>

      {barraDeFerramentas &&(<Box>
        {barraDeFerramentas}
      </Box>)}

      <Box flex={1} overflow='auto'>{children}</Box>

    </Box>
  );
};
