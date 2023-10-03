import { IconBrandGithubFilled, IconMoon, IconSun } from "@tabler/icons-react";

import { ButtonHeader } from "./ButtonHeader";

export const Header = ({ pageTitle = "Arduino Project" }) => {
    const buttonGeneralStyle = "mx-5 text-base rounded-full ";
    const hoverIconStyle =
        buttonGeneralStyle + "p-3 hover:bg-gray-4 hover:dark:bg-gray-3 ";

    // Change the theme
    const handleToggleModeDark = () => {
        const element = document.documentElement;
        element.classList.toggle("dark");

        const isDark = element.classList.contains("dark");
        const mainTheme = isDark ? "dark" : "light";
        localStorage.setItem("theme", mainTheme);
    };

    return (
        <header className="border border-gray-2 dark:border-white sticky top-0 h-24 flex flex-row justify-between">
            <h1 className="flex items-center text-4xl text-center">
                {pageTitle}
            </h1>
            <div className="flex flex-row justify-center items-center">
                <ButtonHeader
                    id="projects"
                    textButton="Projects"
                    pathURL="/"
                    generalStyles={buttonGeneralStyle}
                />
                <ButtonHeader
                    id="about"
                    textButton="About"
                    pathURL="/about"
                    generalStyles={buttonGeneralStyle}
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
