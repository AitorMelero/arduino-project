export const ButtonHeader = ({
    textButton = "Button",
    isSelected = false,
    pathURL = "#",
}) => {
    const classIsSelected = isSelected
        ? "bg-blue-2 text-blue"
        : "hover:bg-gray-4 hover:dark:bg-gray-3";

    return (
        <a
            href={pathURL}
            className={
                "mx-10 text-base rounded-full px-3 py-2 " + classIsSelected
            }
        >
            {textButton}
        </a>
    );
};
