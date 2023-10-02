export const ButtonHeader = ({ id, textButton = "Button", pathURL = "#" }) => {
    return (
        <a id={id} href={pathURL}>
            {textButton}
        </a>
    );
};
