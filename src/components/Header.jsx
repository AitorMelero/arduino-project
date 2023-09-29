import { useEffect, useState } from "react";
import { IconBrandGithubFilled, IconMoon, IconSun } from "@tabler/icons-react";

import { ButtonHeader } from "./ButtonHeader";

export const Header = ({ pageTitle = "Arduino Project" }) => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        let mainTheme = "light";

        // Get the theme
        if (
            typeof localStorage !== "undefined" &&
            localStorage.getItem("theme")
        ) {
            mainTheme = localStorage.getItem("theme");
        }

        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            mainTheme = "dark";
        }

        if (mainTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        window.localStorage.setItem("theme", mainTheme);
        setTheme(mainTheme);
    }, []);

    // Change the theme
    const handleToggleModeDark = () => {
        const element = document.documentElement;
        element.classList.toggle("dark");

        const isDark = element.classList.contains("dark");
        const mainTheme = isDark ? "dark" : "light";
        localStorage.setItem("theme", mainTheme);
        setTheme(mainTheme);
    };

    return (
        <header className="border border-gray-2 dark:border-white sticky top-0 h-24 flex flex-row justify-between">
            <h1 className="flex items-center text-4xl text-center">
                {pageTitle}
            </h1>
            <div className="flex flex-row justify-center items-center">
                <ButtonHeader textButton="About" />
                <a href="#" className="mx-10" onClick={handleToggleModeDark}>
                    {theme === "dark" ? <IconSun /> : <IconMoon />}
                </a>
                <a href="#" className="mx-10">
                    <IconBrandGithubFilled />
                </a>
            </div>
        </header>
    );
};
