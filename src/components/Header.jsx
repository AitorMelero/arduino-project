import { ArduinoLogo, ButtonHeader, GitHubIcon } from "./";
import { ThemeButton } from "./ThemeButton";
import { BurgerButton } from "./BurgerButton";

export const Header = ({ pageTitle = "Arduino Project" }) => {
    // Buttons styles
    const buttonGeneralStyle = "mx-5 text-base rounded-full ";
    const buttonLinkDynamicStyle = buttonGeneralStyle + "hidden lg:block ";
    const hoverIconStyle =
        buttonGeneralStyle + "p-3 hover:bg-gray-4 hover:dark:bg-gray-3 ";
    const menuBurguerStyle = hoverIconStyle + "self-center lg:hidden ";

    return (
        <header className="shadow-[0_16px_32px_-16px_rgba(0,0,0,.1),0_0_0_1px_rgba(0,0,0,.1)] dark:shadow-[0_16px_32px_-16px_rgba(0,0,0,.1),0_0_0_1px_hsla(0,0%,100%,.05)] sticky top-0 h-24 flex flex-row justify-between z-10 bg-white dark:bg-gray-1">
            <BurgerButton classStyles={menuBurguerStyle} />

            <div className="flex grow sm:grow-0 items-center text-center mx-5">
                <ArduinoLogo />
            </div>
            <h1 className="hidden sm:flex grow items-center text-4xl text-center font-medium">
                {pageTitle}
            </h1>

            <div className="flex flex-row justify-center items-center">
                <ButtonHeader
                    textButton="Proyectos"
                    pathURL="/"
                    generalStyles={buttonLinkDynamicStyle}
                />
                <ButtonHeader
                    textButton="Acerca de"
                    pathURL="/about"
                    generalStyles={buttonLinkDynamicStyle}
                />
                <ThemeButton classStyles={hoverIconStyle} />
                <GitHubIcon
                    url={"https://github.com/AitorMelero/arduino-project"}
                    stylesClasses={hoverIconStyle}
                />
            </div>
        </header>
    );
};
