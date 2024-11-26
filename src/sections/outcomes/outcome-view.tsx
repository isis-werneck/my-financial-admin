import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/iconify';

import CommonTableView from "../../common/common-table-view";


export function OutcomeView() {

  const navigate = useNavigate();

  const urlAPI = "https://localhost/outcomes";

  const headLabels= [
        { id: 'description', label: 'Descripción' },
        { id: 'value', label: 'Valor' },
        { id: 'expenseType', label: 'Tipo de gasto' },
        { id: 'paymentType', label: 'Tipo de pago' },
        { id: 'created', label: 'Fecha de creación' },
        { id: 'modified', label: 'Fecha de modificación' },
        { id: '' },
      ];

  const tableView = CommonTableView('outcomes', urlAPI,
      headLabels);

  return (
    <DashboardContent>
      <Box display="flex" alignItems="center" mb={5}>
        <Typography variant="h4" flexGrow={1}>
          Mis Gastos
        </Typography>

        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="mingcute:add-line" />}
          onClick={() => navigate('/outcomes/create')}
        >
          Nuevo gasto
        </Button>
      </Box>

      <Card>
        {tableView}
      </Card>
    </DashboardContent>
  );
}