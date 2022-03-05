import React, {MouseEventHandler} from "react";
import {
    Box,
    Checkbox,
    Grid,
    Table,
    TableBody,
    tableCellClasses,
    TableContainer,
    TableHead,
    TableRow,
    TableSortLabel,
    Theme
} from "@mui/material";
import {visuallyHidden} from "@mui/utils";
import {useTheme} from "@mui/styles";
import {TransparentHeaderCell} from "./TransparentHeaderCell";
import {SxProps} from "@mui/system";
import {ExtendedTheme} from "../../hooks/styles/Theme";
import {HeadCell} from "./PaginatedTable";

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
): (
    a: { [key in Key]: any },
    b: { [key in Key]: any },
) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

export interface EnhancedTableProps<T> {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof T) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
    headCells: readonly HeadCell<T>[];
    disableSelect?: boolean;
}

function EnhancedTableHead<T>(props: EnhancedTableProps<T>) {
    const {onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, headCells, disableSelect} =
        props;
    const createSortHandler =
        (property: keyof T) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <TableHead>
            <TableRow>
                {
                    disableSelect ? null :
                        <TransparentHeaderCell padding="checkbox">
                            <Checkbox
                                color="primary"
                                indeterminate={numSelected > 0 && numSelected < rowCount}
                                checked={rowCount > 0 && numSelected === rowCount}
                                onChange={onSelectAllClick}
                                inputProps={{
                                    'aria-label': 'select all desserts',
                                }}
                            />
                        </TransparentHeaderCell>
                }

                {headCells.map((headCell, hcindex) => (
                    <TransparentHeaderCell
                        key={headCell.id.toString()}
                        align={hcindex === headCells.length - 1 ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}

                        sx={{
                            minWidth: headCell.minWidth
                        }}
                    >
                        {
                            !headCell.noSort &&
                            <TableSortLabel
                                active={orderBy === headCell.id}
                                direction={orderBy === headCell.id ? order : 'asc'}
                                onClick={createSortHandler(headCell.id)}
                            >
                                {headCell.label}
                                {orderBy === headCell.id ? (
                                    <Box component="span" sx={visuallyHidden}>
                                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                    </Box>
                                ) : null}
                            </TableSortLabel>
                        }

                    </TransparentHeaderCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

export function ScrollableTable<T>(
    props: {
        rows: T[],
        initialSort: keyof T,
        initialDirection?: Order
        keyAttr: keyof T,
        headCells: readonly HeadCell<T>[],
        disableSelect?: boolean,
        sx?: SxProps<Theme>,
        generateRow: (props: {
            row: T,
            index: number,
            onClick?: MouseEventHandler,
            isItemSelected: boolean,
            labelId: string
        }) => JSX.Element
    }
) {
    const {rows, keyAttr, initialSort, headCells, generateRow, disableSelect} = props
    const [order, setOrder] = React.useState<Order>(props.initialDirection || 'asc');
    const [orderBy, setOrderBy] = React.useState<keyof T>(initialSort);
    const [selected, setSelected] = React.useState<readonly (T[keyof T])[]>([]);
    const theme = useTheme<ExtendedTheme>()

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof T,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n[keyAttr]);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event: React.MouseEvent<unknown>, name: T[keyof T]) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected: readonly (T[keyof T])[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const isSelected = (name: T[keyof T]) => selected.indexOf(name) !== -1;

    return (
        <Grid item xs={12}>
            <TableContainer sx={{width: '100%', overflow: 'scroll', ...props.sx}}>
                <Table
                    sx={{
                        borderRadius: 2,
                        [`& .${tableCellClasses.root}`]: {
                            borderColor: theme.palette.outline.main
                        }
                    }}
                    aria-labelledby="tableTitle"
                    size={'medium'}
                    stickyHeader
                >
                    <EnhancedTableHead
                        numSelected={selected.length}
                        order={order}
                        orderBy={orderBy as string}
                        onSelectAllClick={handleSelectAllClick}
                        onRequestSort={handleRequestSort}
                        rowCount={rows.length}
                        headCells={headCells}
                        disableSelect={disableSelect}
                    />
                    <TableBody>
                        {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.slice().sort(getComparator(order, orderBy)) */}
                        {rows.slice().sort(getComparator(order, orderBy))
                            .map((row, index) => {
                                const isItemSelected = isSelected(row[keyAttr]);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    generateRow({
                                        row: row,
                                        index: index,
                                        onClick: (event) => {
                                            handleClick(event, row[keyAttr])
                                        },
                                        isItemSelected: isItemSelected,
                                        labelId: labelId
                                    })
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}