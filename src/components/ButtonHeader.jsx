import { useEffect, useState } from "react";

export const ButtonHeader = ({
    textButton = "Button",
    pathURL = "#",
    generalStyles = "",
}) => {
    const id = textButton.toLowerCase();
    const fontClass = "font-medium ";
    const transitionClass =
        fontClass + "transform active:scale-95 transition-transform ";
    const isSelectedClass =
        transitionClass + generalStyles + "px-3 py-2 bg-blue-2 text-blue";
    const isNotSelectedClass =
        transitionClass +
        generalStyles +
        "px-3 py-2 hover:bg-gray-4 hover:dark:bg-gray-3";
    const [classStyles, setClassStyles] = useState(isNotSelectedClass);

    useEffect(() => {
        const pathname = window.location.pathname;

        // Check if the button is focus
        if (
            pathname === pathURL ||
            (pathURL === "/" && pathname.split("/")[1] === "posts")
        ) {
            setClassStyles(isSelectedClass);
        }
    }, []);

    return (
        <a id={id} href={pathURL} className={classStyles}>
            {textButton}
        </a>
    );
};
