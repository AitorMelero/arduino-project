export const Sidebar = ({ allReferences = [] }) => {
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
            {allReferences.map((post) => (
                <a href={post.url} key={post.url}>
                    {post.title}
                </a>
            ))}
        </aside>
    );
};
