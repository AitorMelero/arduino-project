import { IconBrandGithubFilled, IconMoon, IconSun } from "@tabler/icons-react";

import { ButtonHeader } from "./ButtonHeader";

export const Header = ({ pageTitle = "Arduino Project" }) => {
    return (
        <header className="bg-gray-800 text-white border border-white sticky top-0 h-24 flex flex-row justify-between">
            <h1 className="flex items-center text-4xl text-center">
                {pageTitle}
            </h1>
            <div className="flex flex-row justify-center items-center">
                <ButtonHeader textButton="About" />
                <a href="#" className="mx-10">
                    <IconSun />
                    {/* <IconMoon /> */}
                </a>
                <a href="#" className="mx-10">
                    <IconBrandGithubFilled />
                </a>
            </div>
        </header>
    );
};
