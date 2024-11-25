import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import {ExpenseTypeForm} from 'src/sections/expense-type/expense-type-form';

// ----------------------------------------------------------------------

export default function Page() {
    return (
        <>
            <Helmet>
                <title> {`Crear tipo de gasto - ${CONFIG.appName}`}</title>
            </Helmet>

            <ExpenseTypeForm />
        </>
    );
}