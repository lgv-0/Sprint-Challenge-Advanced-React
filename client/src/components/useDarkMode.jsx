import { useEffect } from "react";
import { useLocalstorage } from "./useLocalStorage";

function useDarkMode(def)
{
    const [darkValue, sDarkValue] = useLocalstorage("dme", def);

    useEffect(() =>
        {
            darkValue ? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode");
        }, [darkValue]);

    return [darkValue, sDarkValue];
}

export default useDarkMode; 