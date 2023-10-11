import { IconChevronLeft } from "@tabler/icons-react";
import { IconChevronRight } from "@tabler/icons-react";

export const NextPreviousButton = ({ isNext = true, url, title }) => {
    const flowString = isNext ? "Siguiente" : "Anterior";
    const flexDirection = isNext ? "flex-row-reverse" : "flex-row";
    const alignItems = isNext ? "items-end" : "items-start";

    return (
        <a
            href={url}
            className={
                "py-6 px-5 w-full md:w-80 flex items-center gap-x-6 " +
                flexDirection
            }
        >
            {isNext ? <IconChevronRight /> : <IconChevronLeft />}
            <div
                className={
                    "flex flex-col content-between text-lg " + alignItems
                }
            >
                <p>{flowString}</p>
                <p>{title}</p>
            </div>
        </a>
    );
};
