import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
import useMedia from './useMedia';

function usePrefersDarkMode() {
    return useMedia(['(prefers-color-scheme: dark)'], [true], false);
}

const useDarkMode = () => {
    const [darkMode,setDarkMode] = useLocalStorage('isDark', false); 

    const prefersDarkMode = usePrefersDarkMode();
   
    useEffect(() => {
        if (prefersDarkMode){
            setDarkMode(true);
        }
    }, [prefersDarkMode])
    
    return [darkMode, setDarkMode];
}

export default useDarkMode;