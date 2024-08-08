import { createContext, useCallback, useContext, useState } from "react";


interface IDrawerContextData {
  IsDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
  drawerOptions: IDrawerOption[];
  setDrawerOptions: (newDrawerOption: IDrawerOption[]) => void
}

interface IDrawerOption {
  path: string;
  icon: string;
  label: string;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
    return useContext(DrawerContext)
}

interface IAppDrawerProviderProps{
    children: React.ReactNode
}

export const DrawerProvider: React.FC<IAppDrawerProviderProps> = ({children}) => {
    const [IsDrawerOpen, setIsDrawerOpen] = useState(false);
    const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([]);

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen)
    }, [])

    const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOption[]) => {
        setDrawerOptions(newDrawerOptions)
    }, [])

  return (
    <DrawerContext.Provider value={{ IsDrawerOpen, drawerOptions,setDrawerOptions: handleSetDrawerOptions, toggleDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};
