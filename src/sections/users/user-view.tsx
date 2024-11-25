import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { DashboardContent } from 'src/layouts/dashboard';
import { Iconify } from 'src/components/iconify';
import CommonTableView from "../../common/common-table-view";


export function UserView() {

  const navigate = useNavigate();

  const urlAPI = "https://ecam-api.ddev.site/api/users";

  const headLabels= [
        { id: 'userIdentifier', label: 'Nombre' },
        { id: 'email', label: 'Email' },
        { id: 'type', label: 'Tipo' },
        { id: 'roles', label: 'Roles' },
        { id: '' },
      ];

  const tableView = CommonTableView('users', urlAPI,
      headLabels);

  return (
    <DashboardContent>
      <Box display="flex" alignItems="center" mb={5}>
        <Typography variant="h4" flexGrow={1}>
          Usuarios
        </Typography>

        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="mingcute:add-line" />}
          onClick={() => navigate('/users/create')}
        >
          Nuevo usuario
        </Button>
      </Box>

      <Card>
        {tableView}
      </Card>
    </DashboardContent>
  );
}