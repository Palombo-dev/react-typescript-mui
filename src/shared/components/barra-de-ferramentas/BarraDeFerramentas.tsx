
import { Search } from "@mui/icons-material";
import { Box, Button, Icon, InputAdornment, Paper, TextField, useTheme } from "@mui/material";



export const BarraDeFerramentas: React.FC = () => {
    const theme = useTheme()

    return(
        <Box height={theme.spacing(5)} marginX={1} paddingX={2} padding={1} display='flex' gap={1} alignItems='center' component={Paper} justifyContent={"space-between"}>
            <TextField 
            size="small"
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
            
            

            <Button 
            color="primary"
            variant="contained"
            disableElevation
            endIcon={<Icon>add</Icon>}
            >
                Novo
            </Button>
        </Box>

    )
}
