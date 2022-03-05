import {styled} from "@mui/styles";
import {TableCell, tableCellClasses, Theme} from "@mui/material";

export const TransparentHeaderCell = styled(TableCell)((props: {theme: Theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#1f2938",
        color: props.theme.palette.text.primary,
        textTransform: 'uppercase',
        fontSize: '0.75em',
        fontWeight: '700',
        paddingTop: 1,
        paddingBottom: 1,
    },
    // [`&.${tableCellClasses.body}`]: {
    //     fontSize: 14,
    // },
}));