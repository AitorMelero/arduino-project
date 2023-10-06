export const Sidebar = ({ allReferences = [] }) => {
    const asideClass =
        "flex flex-col border border-gray-2 dark:border-white h-full w-80";

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
