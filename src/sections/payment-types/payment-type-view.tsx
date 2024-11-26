import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/iconify';

import CommonTableView from "../../common/common-table-view";


export function PaymentTypeView() {

  const navigate = useNavigate();

  const urlAPI = "https://localhost/payment_types";

  const headLabels= [
        { id: 'description', label: 'Descripción' },
        { id: 'active', label: 'Activo' },
        { id: 'created', label: 'Fecha de creación' },
        { id: 'modified', label: 'Fecha de modificación' },
        { id: '' },
      ];

  const tableView = CommonTableView('payment-types', urlAPI,
      headLabels);

  return (
    <DashboardContent>
      <Box display="flex" alignItems="center" mb={5}>
        <Typography variant="h4" flexGrow={1}>
          Tipos de Pago
        </Typography>

        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="mingcute:add-line" />}
          onClick={() => navigate('/payment-types/create')}
        >
          Nuevo tipo de pago
        </Button>
      </Box>

      <Card>
        {tableView}
      </Card>
    </DashboardContent>
  );
}