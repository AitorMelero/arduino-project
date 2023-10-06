import { useState } from "react";

// Control the menu's state when it opens or closes
export const useMenuOpen = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    // Hidden the menu
    const hiddenMenu = () => {
        if (window.innerWidth >= 1024) {
            const mainContainer = document.getElementById("main-content");
            const menuContainer = document.getElementById("menu-content");
            const mainStyle =
                "flex flex-row justify-between w-full h-[calc(100vh-6rem)]";

            menuContainer.className = "hidden";
            mainContainer.className = mainStyle;
            setMenuIsOpen(false);
        }
    };

    // Open or close burger menu
    const handleToggleMenu = () => {
        const mainContainer = document.getElementById("main-content");
        const menuContainer = document.getElementById("menu-content");
        const mainStyle =
            "flex flex-row justify-between w-full h-[calc(100vh-6rem)]";
        const mainhiddenStyle =
            "hidden lg:flex lg:flex-lg:col lg:content-between lg:w-full lg:h-full";
        const menuStyle = "flex flex-col w-full h-[calc(100vh-6rem)] lg:hidden";

        if (menuIsOpen) {
            menuContainer.className = "hidden";
            mainContainer.className = mainStyle;
        } else {
            mainContainer.className = mainhiddenStyle;
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
