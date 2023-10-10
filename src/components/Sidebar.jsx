import { SectionLink } from "./SectionLink";

export const Sidebar = ({
    allReferences = [],
    classStyles = "",
    title = "",
}) => {
    return (
        <aside className={classStyles}>
            <h2 className="my-3 px-4 font-bold text-sm uppercase text-gray-5 dark:text-gray-4">
                {title}
            </h2>
            {allReferences.map(({ url, title }) => (
                <SectionLink key={url} urlPost={url} titlePost={title} />
            ))}
        </aside>
    );
};
