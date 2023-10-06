import { IconMoon, IconSun } from "@tabler/icons-react";

export const ThemeButton = ({ classStyles }) => {
    // Change the theme
    const handleToggleModeDark = () => {
        const element = document.documentElement;
        element.classList.toggle("dark");

        const isDark = element.classList.contains("dark");
        const mainTheme = isDark ? "dark" : "light";
        localStorage.setItem("theme", mainTheme);
    };

    return (
        <button className={classStyles} onClick={handleToggleModeDark}>
            <IconSun className="hidden dark:block" />
            <IconMoon className="block dark:hidden" />
        </button>
    );
};
