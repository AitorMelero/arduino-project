export const Sidebar = ({ position }) => {
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

    return (
        <>
            <aside
                className={`flex flex-col border border-white h-full text-white fixed w-80 ${position}-0`}
            >
                {articles.map(({ id, title }) => (
                    <a href={`#${id}`} key={id}>
                        {title}
                    </a>
                ))}
            </aside>
        </>
    );
};
