import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [ darkMode, setDarkMode ] = useLocalStorage('isDark', false);
    
    return [darkMode, setDarkMode];
}

export default useDarkMode;