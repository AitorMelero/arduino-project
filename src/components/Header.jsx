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
                    <i class="ti ti-sun"></i>
                    {/* <i class="ti ti-moon"></i> */}
                </a>
                <a href="#" className="mx-10">
                    <i class="ti ti-brand-github-filled"></i>
                </a>
            </div>
        </header>
    );
};
