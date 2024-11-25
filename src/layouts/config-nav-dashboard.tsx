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
    title: 'Tipos de Gastos',
    path: '/expense-type',
    icon: icon('ic-home'),
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: icon('ic-user'),
  },
];
