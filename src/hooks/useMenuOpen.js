import { useState } from "react";

// Control the menu's state when it opens or closes
export const useMenuOpen = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    // Hidden the menu
    const hiddenMenu = () => {
        if (window.innerWidth >= 1024) {
            const menuContainer = document.getElementById("menu-content");

            menuContainer.className = "hidden";
            setMenuIsOpen(false);
        }
    };

    // Open or close burger menu
    const handleToggleMenu = () => {
        const menuContainer = document.getElementById("menu-content");
        const menuStyle =
            "absolute top-[6rem] z-10 bg-white dark:bg-gray-1 text-gray-2 dark:text-white flex flex-col w-full h-[calc(100%-6rem)] lg:hidden";

        if (menuIsOpen) {
            menuContainer.className = "hidden";
        } else {
            menuContainer.className = menuStyle;
        }

        setMenuIsOpen(!menuIsOpen);
    };

    return {
        menuIsOpen,
        handleToggleMenu,
        hiddenMenu,
    };
};
