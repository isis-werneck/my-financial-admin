import Typography from '@mui/material/Typography';

import { DashboardContent } from 'src/layouts/dashboard';


// ----------------------------------------------------------------------

export function SummaryView() {
  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
        Hola, Bienvenido/a de vuelta 👋
      </Typography>
    </DashboardContent>
  );
}
