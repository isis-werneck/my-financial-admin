import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import { varAlpha } from 'src/theme/styles';
import { AuthLayout } from 'src/layouts/auth';
import { DashboardLayout } from 'src/layouts/dashboard';

// ----------------------------------------------------------------------

export const HomePage = lazy(() => import('src/pages/home'));
export const IncomePage = lazy(() => import('src/pages/incomes/income'));
export const IncomeCreatePage = lazy(() => import('src/pages/incomes/income-create'));
export const IncomeEditPage = lazy(() => import('src/pages/incomes/income-edit'));
export const IncomeDetailPage = lazy(() => import('src/pages/incomes/income-detail'));
export const OutcomePage = lazy(() => import('src/pages/outcomes/outcome'));
export const OutcomeCreatePage = lazy(() => import('src/pages/outcomes/outcome-create'));
export const OutcomeEditPage = lazy(() => import('src/pages/outcomes/outcome-edit'));
export const OutcomeDetailPage = lazy(() => import('src/pages/outcomes/outcome-detail'));
export const ExpenseTypePage = lazy(() => import('src/pages/expense-types/expense-type'));
export const ExpenseTypeCreatePage = lazy(() => import('src/pages/expense-types/expense-type-create'));
export const ExpenseTypeEditPage = lazy(() => import('src/pages/expense-types/expense-type-edit'));
export const ExpenseTypeDetailPage = lazy(() => import('src/pages/expense-types/expense-type-detail'));
export const PaymentTypePage = lazy(() => import('src/pages/payment-types/payment-type'));
export const PaymentTypeCreatePage = lazy(() => import('src/pages/payment-types/payment-type-create'));
export const PaymentTypeEditPage = lazy(() => import('src/pages/payment-types/payment-type-edit'));
export const PaymentTypeDetailPage = lazy(() => import('src/pages/payment-types/payment-type-detail'));
export const UserPage = lazy(() => import('src/pages/users/user'));
export const UserCreatePage = lazy(() => import('src/pages/users/user-create'));
export const UserEditPage = lazy(() => import('src/pages/users/user-edit'));
export const UserDetailPage = lazy(() => import('src/pages/users/user-detail'));
export const SignInPage = lazy(() => import('src/pages/sign-in'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

const renderFallback = (
  <Box display="flex" alignItems="center" justifyContent="center" flex="1 1 auto">
    <LinearProgress
      sx={{
        width: 1,
        maxWidth: 320,
        bgcolor: (theme) => varAlpha(theme.vars.palette.text.primaryChannel, 0.16),
        [`& .${linearProgressClasses.bar}`]: { bgcolor: 'text.primary' },
      }}
    />
  </Box>
);

export function Router() {
  return useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense fallback={renderFallback}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <HomePage />, index: true },

        { path: 'incomes', element: <IncomePage /> },
        { path: 'incomes/create', element: <IncomeCreatePage /> },
        { path: 'incomes/edit/:incomeId', element: <IncomeEditPage /> },
        { path: 'incomes/detail/:incomeId', element: <IncomeDetailPage /> },

        { path: 'outcomes', element: <OutcomePage /> },
        { path: 'outcomes/create', element: <OutcomeCreatePage /> },
        { path: 'outcomes/edit/:outcomeId', element: <OutcomeEditPage /> },
        { path: 'outcomes/detail/:outcomeId', element: <OutcomeDetailPage /> },

        { path: 'expense-types', element: <ExpenseTypePage /> },
        { path: 'expense-types/create', element: <ExpenseTypeCreatePage /> },
        { path: 'expense-types/edit/:expenseTypeId', element: <ExpenseTypeEditPage /> },
        { path: 'expense-types/detail/:expenseTypeId', element: <ExpenseTypeDetailPage /> },

        { path: 'payment-types', element: <PaymentTypePage /> },
        { path: 'payment-types/create', element: <PaymentTypeCreatePage /> },
        { path: 'payment-types/edit/:paymentTypeId', element: <PaymentTypeEditPage /> },
        { path: 'payment-types/detail/:paymentTypeId', element: <PaymentTypeDetailPage /> },

        { path: 'users', element: <UserPage /> },
        { path: 'users/create', element: <UserCreatePage /> },
        { path: 'users/edit/:userId', element: <UserEditPage /> },
        { path: 'users/detail/:userId', element: <UserDetailPage /> },
      ],
    },
    {
      path: 'sign-in',
      element: (
        <AuthLayout>
          <SignInPage />
        </AuthLayout>
      ),
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}
