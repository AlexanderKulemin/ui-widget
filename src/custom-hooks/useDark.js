import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
export default function useDark() {
    const [enabledDark, setDarkMode] = useLocalStorage('dark-theme', false);
    useEffect(() => {
        const className = 'dark-theme';
        const element = window.document.body;
        if (enabledDark) {
            element.classList.add(className);
        }
        else { element.classList.remove(className) };
    }, [enabledDark]);


    return [enabledDark, setDarkMode];
}