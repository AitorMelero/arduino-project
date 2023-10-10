import { useEffect, useState } from "react";

export const SectionLink = ({ urlPost, titlePost }) => {
    const id = urlPost.split("/").pop();
    const generalStyles = "pr-2 pl-6 py-3 rounded-r-2xl ";
    const fontClass = "font-medium text-sm ";
    const transitionClass = "transform active:scale-95 transition-transform ";
    const isSelectedClass =
        transitionClass + generalStyles + fontClass + "bg-blue-2 text-blue";
    const isNotSelectedClass =
        transitionClass +
        generalStyles +
        fontClass +
        "hover:bg-gray-4 hover:dark:bg-gray-3";
    const [classStyles, setClassStyles] = useState(isNotSelectedClass);

    useEffect(() => {
        const pathname = window.location.pathname.split("/").pop();

        // Check if the button is focus
        if (id === pathname) {
            setClassStyles(isSelectedClass);
        }
    }, []);

    return (
        <a href={urlPost} className={classStyles}>
            {titlePost}
        </a>
    );
};
