import { NextPreviousButton } from ".";

export const NextPreviousSection = ({
    previousPost = null,
    nextPost = null,
}) => {
    const flexDirection = !previousPost ? "flex-row-reverse" : "flex-row";

    return (
        <div
            className={
                "md:flex md:justify-between py-12 mx-auto max-w-7xl " + flexDirection
            }
        >
            {previousPost ? (
                <NextPreviousButton isNext={false} {...previousPost} />
            ) : (
                <></>
            )}
            {nextPost ? (
                <NextPreviousButton isNext={true} {...nextPost} />
            ) : (
                <></>
            )}
        </div>
    );
};
