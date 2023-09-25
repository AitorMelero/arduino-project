export const Sidebar = ({ position = "left" }) => {
    const articles = [
        {
            id: "project-1",
            title: "Project 1",
        },
        {
            id: "project-2",
            title: "Project 2",
        },
        {
            id: "project-3",
            title: "Project 3",
        },
    ];
    const asideClass =
        "flex flex-col border border-white h-full w-80 text-white";

    return (
        <aside className={asideClass}>
            {articles.map(({ id, title }) => (
                <a href={`#${id}`} key={id}>
                    {title}
                </a>
            ))}
        </aside>
    );
};
