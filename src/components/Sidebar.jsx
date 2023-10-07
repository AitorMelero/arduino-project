import { SectionLink } from "./SectionLink";

export const Sidebar = ({ allReferences = [], classStyles = "" }) => {
    return (
        <aside className={classStyles}>
            {allReferences.map(({ url, title }) => (
                <SectionLink key={url} urlPost={url} titlePost={title} />
            ))}
        </aside>
    );
};
