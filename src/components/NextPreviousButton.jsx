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
                "group py-6 px-5 w-full md:w-80 flex items-center gap-x-6 border-transparent border-2 rounded-lg hover:bg-gray-4 hover:dark:bg-gray-3 focus:bg-blue focus:bg-opacity-30 focus:border-blue focus:ring-1 focus:ring-offset-4 focus:border-opacity-100 active:ring-0 active:ring-offset-0 " +
                flexDirection
            }
        >
            {isNext ? <IconChevronRight /> : <IconChevronLeft />}
            <div
                className={
                    "flex flex-col content-between text-lg " + alignItems
                }
            >
                <p className="text-gray-5 dark:text-gray-4 tracking-wide uppercase font-bold text-sm no-underline">
                    {flowString}
                </p>
                <p className="text-blue-3 dark:text-blue text-lg font-normal group-hover:underline">
                    {title}
                </p>
            </div>
        </a>
    );
};
