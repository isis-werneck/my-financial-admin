import {useCallback, useEffect, useState} from "react";

import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TablePagination from "@mui/material/TablePagination";

import {Scrollbar} from "../components/scrollbar";
import {CommonTableHead} from "./common-table-head";
import {CommonTableRow} from "./common-table-row";
import {CommonTableEmptyRows} from "./common-table-empty-rows";
import {applyFilter, emptyRows, getComparator} from "../utils/utils";
import {CommonTableNoData} from "./common-table-no-data";
import {CommonTableToolbar} from "./common-table-toolbar";


export default function CommonTableView(section: string, urlAPI: string, headLabels: any[]) {

    const [filterName, setFilterName] = useState('');
    const table = useTable();

    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const fetchInfo = async () => {
            const res = await fetch(urlAPI);
            const d = await res.json();

            return setTableData(d.member);
        };

        fetchInfo();

    }, [urlAPI]);

    const dataFiltered: any[] = applyFilter({
        inputData: tableData,
        comparator: getComparator(table.order, table.orderBy),
        filterName,
    });

    const notFound = !dataFiltered.length && !!filterName;

    return (
        <>
        <CommonTableToolbar
            numSelected={table.selected.length}
            filterName={filterName}
            onFilterName={(event: React.ChangeEvent<HTMLInputElement>) => {
                setFilterName(event.target.value);
                table.onResetPage();
            }}
        />
        <Scrollbar>
            <TableContainer sx={{overflow: 'unset'}}>
                <Table sx={{minWidth: 800}}>
                    <CommonTableHead
                        order={table.order}
                        orderBy={table.orderBy}
                        rowCount={tableData.length}
                        numSelected={table.selected.length}
                        onSort={table.onSort}
                        onSelectAllRows={(checked) =>
                            table.onSelectAllRows(
                                checked,
                                tableData.map((field: any) => field.id)
                            )
                        }
                        headLabel={headLabels}
                    />
                    <TableBody>
                        {dataFiltered
                            .slice(
                                table.page * table.rowsPerPage,
                                table.page * table.rowsPerPage + table.rowsPerPage
                            )
                            .map((row) => (
                                <CommonTableRow
                                    key={row.id}
                                    id={row.id}
                                    row={row}
                                    selected={table.selected.includes(row.id)}
                                    onSelectRow={() => table.onSelectRow(row.id)}
                                    section={section}
                                    dataProps={headLabels}/>
                            ))}

                        <CommonTableEmptyRows
                            height={68}
                            emptyRows={emptyRows(table.page, table.rowsPerPage, 0)}
                        />

                        {notFound && <CommonTableNoData searchQuery={filterName}/>}
                    </TableBody>
                </Table>
            </TableContainer>
        </Scrollbar>

        <TablePagination
            component="div"
            page={table.page}
            count={tableData.length}
            rowsPerPage={table.rowsPerPage}
            onPageChange={table.onChangePage}
            rowsPerPageOptions={[5, 10, 25]}
            onRowsPerPageChange={table.onChangeRowsPerPage}
        />
    </>
    )
};
// ----------------------------------------------------------------------

export function useTable() {
    const [page, setPage] = useState(0);
    const [orderBy, setOrderBy] = useState('name');
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [selected, setSelected] = useState<string[]>([]);
    const [order, setOrder] = useState<'asc' | 'desc'>('asc');

    const onSort = useCallback(
        (id: string) => {
            const isAsc = orderBy === id && order === 'asc';
            setOrder(isAsc ? 'desc' : 'asc');
            setOrderBy(id);
        },
        [order, orderBy]
    );

    const onSelectAllRows = useCallback((checked: boolean, newSelecteds: string[]) => {
        if (checked) {
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    }, []);

    const onSelectRow = useCallback(
        (inputValue: string) => {
            const newSelected = selected.includes(inputValue)
                ? selected.filter((value) => value !== inputValue)
                : [...selected, inputValue];

            setSelected(newSelected);
        },
        [selected]
    );

    const onResetPage = useCallback(() => {
        setPage(0);
    }, []);

    const onChangePage = useCallback((event: unknown, newPage: number) => {
        setPage(newPage);
    }, []);

    const onChangeRowsPerPage = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setRowsPerPage(parseInt(event.target.value, 10));
            onResetPage();
        },
        [onResetPage]
    );

    return {
        page,
        order,
        onSort,
        orderBy,
        selected,
        rowsPerPage,
        onSelectRow,
        onResetPage,
        onChangePage,
        onSelectAllRows,
        onChangeRowsPerPage,
    };
}