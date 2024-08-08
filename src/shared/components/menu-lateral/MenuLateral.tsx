import { Avatar, Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material"
import imageSrc from './1717471943_124435_blog_3__quando_meu_filhote_deve_tomar_remedio_verme_.jpeg';
import { useDrawerContext} from "../../contexts";



interface IMenulateralProps {
    children: React.ReactNode
}

export const MenuLateral: React.FC<IMenulateralProps> = ({ children }) => {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const { IsDrawerOpen, toggleDrawerOpen } = useDrawerContext()

    return (
        <>
            <Drawer open={IsDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
                <Box width={theme.spacing(28)} height="100%" display="flex"flexDirection="column">

                    <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
                    <Avatar 
                    sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
                    src={imageSrc} />
                    </Box>

                    <Divider />

                    <Box flex={1}>
                        <List component="nav">
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>home</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Página inicial" />
                            </ListItemButton>
                        </List>
                    </Box>
                </Box>
            </Drawer>
        
        
            <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
                {children}
            </Box>
        </>
    )
}
