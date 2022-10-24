import { Button } from "../";
import GoogleIcon from "../../../assets/img/icons/google.svg";
import { ButtonProps } from "../";

type GoogleProps = ButtonProps;

export const GoogleButton: React.FC<GoogleProps> = ({ children, ...props }) => {
    return (
        <Button {...props} variant="text" startIcon={GoogleIcon}>
            {children}
        </Button>
    );
};
