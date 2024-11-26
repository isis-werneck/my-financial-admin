import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/iconify';

import CommonTableView from "../../common/common-table-view";


export function IncomeView() {

  const navigate = useNavigate();

  const urlAPI = "https://localhost/incomes";

  const headLabels= [
        { id: 'description', label: 'Descripción' },
        { id: 'value', label: 'Valor' },
        { id: 'created', label: 'Fecha de creación' },
        { id: 'modified', label: 'Fecha de modificación' },
        { id: '' },
      ];

  const tableView = CommonTableView('incomes', urlAPI,
      headLabels);

  return (
    <DashboardContent>
      <Box display="flex" alignItems="center" mb={5}>
        <Typography variant="h4" flexGrow={1}>
          Mis Ingresos
        </Typography>

        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="mingcute:add-line" />}
          onClick={() => navigate('/incomes/create')}
        >
          Nuevo ingreso
        </Button>
      </Box>

      <Card>
        {tableView}
      </Card>
    </DashboardContent>
  );
}