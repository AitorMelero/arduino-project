import { ButtonHeader } from "./ButtonHeader";

export const Header = ({ pageTitle = "Arduino Project" }) => {
    return (
        <header className="text-white border border-white sticky h-24 flex flex-row justify-between">
            <h1 className="flex items-center text-4xl text-center">
                {pageTitle}
            </h1>
            <div className="flex flex-row justify-center items-center">
                <ButtonHeader textButton="About" />
                <ButtonHeader textButton="Mode" />
                <ButtonHeader textButton="GitHub" />
            </div>
        </header>
    );
};
