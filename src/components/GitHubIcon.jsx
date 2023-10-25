import { IconBrandGithubFilled } from "@tabler/icons-react";

export const GitHubIcon = ({ url, stylesClasses = "" }) => {
    return (
        <a href={url} target="_blank" className={stylesClasses} >
            <IconBrandGithubFilled />
        </a>
    );
};
