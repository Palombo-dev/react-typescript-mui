
import { Search } from "@mui/icons-material";
import { Box, Button, Icon, InputAdornment, Paper, TextField, useTheme } from "@mui/material";

interface IBarraDeFerramentasProps {
  textoDaBusca?: string;
  mostrarInputBusca?: boolean;
  aoMudarTextoDeBusca?: (novoTexto: string) => void;
  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  aoClicarEmNovo?: () => void;
}

export const BarraDeFerramentas: React.FC<IBarraDeFerramentasProps> = ({
  textoDaBusca = '',
  mostrarInputBusca = false,
  aoMudarTextoDeBusca,
  mostrarBotaoNovo = true,
  textoBotaoNovo = 'Novo',
  aoClicarEmNovo
}) => {
    const theme = useTheme()

    return(
        <Box height={theme.spacing(5)} marginX={1} paddingX={2} padding={1} display='flex' gap={1} alignItems='center' component={Paper} justifyContent={"space-between"}>

            {mostrarInputBusca &&(
              <TextField 
              size="small"
              value={textoDaBusca}
              onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)}
              placeholder="Pesquisar..."
              InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
                variant="standard"      
              />
            )}
            
            

            {mostrarBotaoNovo &&(
              <Button 
              color="primary"
              variant="contained"
              onClick={aoClicarEmNovo}
              disableElevation
              endIcon={<Icon>add</Icon>}
              >{textoBotaoNovo}
              </Button>
            )}
        </Box>

    )
}
