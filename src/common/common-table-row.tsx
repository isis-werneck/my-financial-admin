import {useNavigate} from "react-router-dom";
import {useState, useCallback} from 'react';

import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import MenuList from '@mui/material/MenuList';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import MenuItem, {menuItemClasses} from '@mui/material/MenuItem';

import {Iconify} from 'src/components/iconify';

// ----------------------------------------------------------------------


export type TableRowProps = {
    id: string,
    row: any[],
    selected: boolean,
    onSelectRow: () => void,
    section: string,
    dataProps: any[]
};

export function CommonTableRow({id, row, selected, onSelectRow, section, dataProps}: TableRowProps) {

    const navigate = useNavigate();

    const [openPopover, setOpenPopover] = useState<HTMLButtonElement | null>(null);

    const handleOpenPopover = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        setOpenPopover(event.currentTarget);
    }, []);

    const handleClosePopover = useCallback(() => {
        setOpenPopover(null);
    }, []);

    const handleSeeDetail = useCallback(() => {
        navigate(`/${section}/detail/${id}`);
    }, [navigate, section, id]);

    const handleEditRow = useCallback(() => {
        setOpenPopover(null);
        navigate(`/${section}/edit/${id}`);
    }, [navigate, section, id]);

    const handleDeleteRow = useCallback(() => {

        if (window.confirm('¿Desea eliminar este registro?')) {
            fetch(`https://ecam-api.ddev.site/api/${section}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/ld+json'
                },
            });
        }
        setOpenPopover(null);
    }, [section, id]);

    return (
        <>
            <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
                <TableCell padding="checkbox">
                    <Checkbox disableRipple checked={selected} onChange={onSelectRow}/>
                </TableCell>
                {dataProps.map((cell) => (
                    cell.id !== '' && <TableCell key={`data_${cell.id}_${row[cell.id]}`}>{row[cell.id]}</TableCell>
                ))}

                <TableCell align="right">
                    <IconButton onClick={handleOpenPopover}>
                        <Iconify icon="eva:more-vertical-fill"/>
                    </IconButton>
                </TableCell>
            </TableRow>

            <Popover
                open={!!openPopover}
                anchorEl={openPopover}
                onClose={handleClosePopover}
                anchorOrigin={{vertical: 'top', horizontal: 'left'}}
                transformOrigin={{vertical: 'top', horizontal: 'right'}}
            >
                <MenuList
                    disablePadding
                    sx={{
                        p: 0.5,
                        gap: 0.5,
                        width: 140,
                        display: 'flex',
                        flexDirection: 'column',
                        [`& .${menuItemClasses.root}`]: {
                            px: 1,
                            gap: 2,
                            borderRadius: 0.75,
                            [`&.${menuItemClasses.selected}`]: {bgcolor: 'action.selected'},
                        },
                    }}
                >
                    <MenuItem onClick={handleEditRow}>
                        <Iconify icon="solar:pen-bold"/>
                        Editar
                    </MenuItem>

                    <MenuItem onClick={handleSeeDetail}>
                        <Iconify icon="solar:eye-bold"/>
                        Ver datos
                    </MenuItem>

                    <MenuItem onClick={handleDeleteRow} sx={{color: 'error.main'}}>
                        <Iconify icon="solar:trash-bin-trash-bold"/>
                        Eliminar
                    </MenuItem>
                </MenuList>
            </Popover>
        </>
    );
}
