import { useEffect, useState } from "react";

export const ButtonHeader = ({
    id,
    textButton = "Button",
    pathURL = "#",
    generalStyles = "",
}) => {
    const [classStyles, setClassStyles] = useState(
        generalStyles + "px-3 py-2 "
    );

    useEffect(() => {
        const pathname = window.location.pathname;

        // Check if the button is focus
        if (
            pathname === pathURL ||
            (id === "projects" && pathname.split("/")[1] === "posts")
        ) {
            setClassStyles(classStyles + "bg-blue-2 text-blue");
        } else {
            setClassStyles(
                classStyles + "hover:bg-gray-4 hover:dark:bg-gray-3"
            );
        }
    }, []);

    return (
        <a id={id} href={pathURL} className={classStyles}>
            {textButton}
        </a>
    );
};
