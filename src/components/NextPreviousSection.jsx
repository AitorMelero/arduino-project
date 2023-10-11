import { NextPreviousButton } from ".";

export const NextPreviousSection = ({
    previousPost = null,
    nextPost = null,
}) => {
    const flexDirection = !previousPost ? "flex-row-reverse" : "flex-row";

    return (
        <div className={"flex justify-between py-12 px-5 " + flexDirection}>
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
