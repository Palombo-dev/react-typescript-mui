import { Icon, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { useDrawerContext } from "../contexts";

interface ILayoutProviderProps {
  children: React.ReactNode;
  titulo: string;
}

export const LayoutBaseDePagina: React.FC<ILayoutProviderProps> = ({
  children,
  titulo,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const {toggleDrawerOpen} = useDrawerContext()

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box
        padding={1}
        height={theme.spacing(8)}
        display="flex"
        alignItems="center"
        gap={1}
      >
        {smDown && (<IconButton onClick={toggleDrawerOpen}>
          <Icon>menu</Icon>
        </IconButton>)}

        <Typography variant="h5">{titulo}</Typography>
      </Box>
      <Box>Barras de ferramentas</Box>
      <Box>{children}</Box>
    </Box>
  );
};
