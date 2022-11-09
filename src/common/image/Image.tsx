import classNames from "classnames";

import styles from "./Image.module.css";

type ImgReactProps = React.ComponentPropsWithRef<"img">;

interface ImageProps extends Omit<ImgReactProps, "src"> {
    src?: string | null;
    variant?: "pokemon" | "small-pokemon" | "avatar" | "small-round-avatar";
}

const NOT_FIND_IMAGE = "http://dummyimage.com/120";

export const Image: React.FC<ImageProps> = ({
    src,
    alt,
    variant = "avatar",
    className,
    ...props
}) => {
    const wrapperClasses = classNames(
        styles.imageBlock,
        className,
        styles[variant]
    );

    return (
        <div className={wrapperClasses}>
            <img src={src ?? NOT_FIND_IMAGE} {...props} alt={alt ?? "image"} />
        </div>
    );
};
