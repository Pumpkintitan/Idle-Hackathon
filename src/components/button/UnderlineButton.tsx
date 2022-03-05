import {Button, ButtonProps, Theme, Typography} from "@mui/material";
import {useTheme} from "@mui/styles";
import {UnderlineLink} from "../typography/UnderlineLink";

export function UnderlineButton(props: ButtonProps) {
    const theme: Theme = useTheme()

    return (
        <Button {...props}>
            <UnderlineLink color={props.color}>
                {props.children}
            </UnderlineLink>
        </Button>
    )
}