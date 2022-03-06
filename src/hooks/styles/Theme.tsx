import {createTheme, Palette, responsiveFontSizes, Theme, ThemeOptions} from "@mui/material";
import {PaletteOptions, TypeBackground} from "@mui/material/styles/createPalette";

export interface ExtendedTheme extends Theme {
    palette: {
        outline: {
            main: string;
        },
        background: {
            navbar: string;
        } & TypeBackground
    } & Palette,
    navKind: 'elevation' | 'outlined'
}

interface ExtendedThemeOptions extends ThemeOptions {
    palette: {
        outline?: {
            main: string
        },
        background: {
            navbar: string;
        } & Partial<TypeBackground>
    } & PaletteOptions,
    navKind: 'elevation' | 'outlined'
}

const mainOutline = 'rgb(45,55,72)'

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: true; // removes the `xs` breakpoint
        sm: true;
        md: true;
        lg: true;
        xl: true;
        xxl: true;
    }
}

const mainThemeOptions: ExtendedThemeOptions = {
    palette: { // 27354a
        primary: {
            main: '#00FF00',
            // light: '#b000cc',
            // contrastText: '#89348c'
            light: "#ababab"
        },
        secondary: {
            main: '#00FFFF',
            contrastText: '#111828',
            // light: '#79018C'
        },
        text: {
            primary: '#00FF00',
            secondary: '#00FFFF',
            disabled: '#EEEEEEC0'
        },
        background: {
            // default: "linear-gradient(45deg, #cb5cff, #9c61f8)",
            default: "#000000",
            // default: "url(https://wallpaperaccess.com/download/dark-minimalist-568180)",
            // default: "url(https://wallpaperaccess.com/download/minimalist-space-1145565)",
            paper: "#101317",
            navbar: "#000",
            // paper: "#161323"
        },
        outline: {
            main: '#2f3749'
        }
    },
    typography: {
        allVariants: {
            "fontFamily": `'Courier New', source-code-pro, Menlo, Monaco, Consolas, 
            monospace`,
        }
    },
    components: {
        MuiTypography: {
            defaultProps: {
                fontFamily: `'Courier New', source-code-pro, Menlo, Monaco, Consolas,
                monospace`
            }
        },
        MuiButton: {
            styleOverrides: {
                outlined: {
                    fontFamily: `'Courier New', source-code-pro, Menlo, Monaco, Consolas, 
                    monospace`
                },
                text: {
                    fontFamily: `'Courier New', source-code-pro, Menlo, Monaco, Consolas, 
                    monospace`
                },
                // same for other variants
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    // scrollbarColor: "#6b6b6b #2b2b2b",
                    scrollbarGutter: 'stable',
                    '*::-webkit-scrollbar': {
                        // width: '0.4em',
                        // width: 'none',
                        display: 'none',
                        scrollbarWidth: 'none',  /* Firefox */
                    },
                    '*::-webkit-scrollbar-track': {
                        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
                    },
                    '*::-webkit-scrollbar-thumb': {
                        backgroundColor: 'rgba(100,100,100,.2)',
                        // outline: '1px solid slategrey'
                    },
                    "*::-webkit-scrollbar-corner": {backgroundColor: 'transparent',},
                    '*::selection': {
                        color: '#000',
                        backgroundColor: '#FF00FF',
                    }
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '& fieldset': {
                        borderColor: mainOutline,
                        color: "rgba(255, 255, 255, 0.75)",
                    },
                    '& fieldset:disabled': {
                        borderColor: mainOutline,
                        color: "rgba(255, 255, 255, 0.75)",
                    },
                    '& input:disabled': {
                        borderColor: mainOutline,
                        color: "rgba(255, 255, 255, 0.75)",
                    },
                },
            }
        },
        MuiDivider: {
            styleOverrides: {
                light: {
                    borderColor: mainOutline,
                    color: mainOutline,
                },
            }
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
            xxl: 1900
        },
    },
    navKind: 'outlined',
}

export const mainTheme = responsiveFontSizes(createTheme(
    mainThemeOptions
));