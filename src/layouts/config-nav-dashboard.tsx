import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor width="100%" height="100%" src={`/assets/icons/navbar/${name}.svg`} />
);

export const navData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: icon('ic-home'),
  },
  {
    title: 'Mis Ingresos',
    path: '/incomes',
    icon: icon('ic-income'),
  },
  {
    title: 'Mis Gastos',
    path: '/outcomes',
    icon: icon('ic-outcome'),
  },
  {
    title: 'Tipos de Gastos',
    path: '/expense-types',
    icon: icon('ic-expense-type'),
  },
  {
    title: 'Tipos de Pago',
    path: '/payment-types',
    icon: icon('ic-payment-type'),
  },
  {
    title: 'Usuarios',
    path: '/users',
    icon: icon('ic-user'),
  },
];
