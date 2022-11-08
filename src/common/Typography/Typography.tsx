import styles from "./Typography.module.css";

import classnames from "classnames";

interface TypographyProps {
    variant?:
        | "title"
        | "sub-title"
        | "title-regular"
        | "body"
        | "sub-body"
        | "title-body";
    Tagname?: "p" | "h1" | "h2" | "h3";
    children: React.ReactNode;
    className?: string;
}

export const Typography: React.FC<TypographyProps> = ({
    variant = "title",
    Tagname = "h1",
    children,
    className,
}) => {
    const classes = classnames(className, styles[variant]);

    return <Tagname className={classes}>{children}</Tagname>;
};
