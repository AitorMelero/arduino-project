export const Sidebar = ({ allReferences = [], classStyles = "" }) => {

    return (
        <aside className={classStyles}>
            {allReferences.map((post) => (
                <a href={post.url} key={post.url}>
                    {post.title}
                </a>
            ))}
        </aside>
    );
};
