import { useState } from "react";
import {
    IconBrandGithubFilled,
    IconMenu2,
    IconMoon,
    IconSun,
    IconX,
} from "@tabler/icons-react";

import { ArduinoLogo } from "./ArduinoLogo";
import { ButtonHeader } from "./ButtonHeader";

export const Header = ({ pageTitle = "Arduino Project" }) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const transitionClass = "transform active:scale-95 transition-transform ";
    const buttonGeneralStyle = "mx-5 text-base rounded-full " + transitionClass;
    const buttonLinkDynamicStyle = buttonGeneralStyle + "hidden lg:block ";
    const hoverIconStyle =
        buttonGeneralStyle + "p-3 hover:bg-gray-4 hover:dark:bg-gray-3 ";
    const menuBurguerStyle = hoverIconStyle + "lg:hidden ";

    // Change the theme
    const handleToggleModeDark = () => {
        const element = document.documentElement;
        element.classList.toggle("dark");

        const isDark = element.classList.contains("dark");
        const mainTheme = isDark ? "dark" : "light";
        localStorage.setItem("theme", mainTheme);
    };

    // Open or close burguer menu
    const handleToggleMenu = () => {
        const mainContainer = document.getElementById("main-content");
        const menuContainer = document.getElementById("menu-content");
        const mainStyle = "flex flex-col content-between w-full h-full";
        const menuStyle = "flex flex-col w-full h-[calc(100vh-6rem)]";

        if (menuIsOpen) {
            menuContainer.className = "hidden";
            mainContainer.className = mainStyle;
        } else {
            mainContainer.className = "hidden";
            menuContainer.className = menuStyle;
        }

        setMenuIsOpen(!menuIsOpen);
    };

    return (
        <header className="shadow-[0_16px_32px_-16px_rgba(0,0,0,.1),0_0_0_1px_rgba(0,0,0,.1)] dark:shadow-[0_16px_32px_-16px_rgba(0,0,0,.1),0_0_0_1px_hsla(0,0%,100%,.05)] sticky top-0 h-24 flex flex-row justify-between">
            <div className="flex flex-row justify-center items-center">
                <button className={menuBurguerStyle} onClick={handleToggleMenu}>
                    {menuIsOpen ? (
                        <IconX color="rgb(20, 158, 202)" />
                    ) : (
                        <IconMenu2 />
                    )}
                </button>
            </div>
            <ArduinoLogo />
            <h1 className="hidden sm:flex grow items-center text-4xl text-center">
                {pageTitle}
            </h1>
            <div className="flex flex-row justify-center items-center">
                <ButtonHeader
                    id="projects"
                    textButton="Projects"
                    pathURL="/"
                    generalStyles={buttonLinkDynamicStyle}
                />
                <ButtonHeader
                    id="about"
                    textButton="About"
                    pathURL="/about"
                    generalStyles={buttonLinkDynamicStyle}
                />
                <button
                    className={hoverIconStyle}
                    onClick={handleToggleModeDark}
                >
                    <IconSun className="hidden dark:block" />
                    <IconMoon className="block dark:hidden" />
                </button>
                <a
                    href="https://github.com/AitorMelero/arduino-project"
                    target="_blank"
                    className={hoverIconStyle}
                >
                    <IconBrandGithubFilled />
                </a>
            </div>
        </header>
    );
};
