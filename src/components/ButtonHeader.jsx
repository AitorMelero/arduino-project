import { useEffect, useState } from "react";

export const ButtonHeader = ({
    id,
    textButton = "Button",
    pathURL = "#",
    generalStyles = "",
}) => {
    const isSelectedClass = generalStyles + "px-3 py-2 bg-blue-2 text-blue";
    const isNotSelectedClass =
        generalStyles + "px-3 py-2 hover:bg-gray-4 hover:dark:bg-gray-3";
    const [classStyles, setClassStyles] = useState(isNotSelectedClass);

    useEffect(() => {
        const pathname = window.location.pathname;

        // Check if the button is focus
        if (
            pathname === pathURL ||
            (id === "projects" && pathname.split("/")[1] === "posts")
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
