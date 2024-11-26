import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import {ExpenseTypeForm} from 'src/sections/expense-types/expense-type-form';


// ----------------------------------------------------------------------

export default function Page() {
    return (
        <>
            <Helmet>
                <title> {`Detalle del tipo de gasto - ${CONFIG.appName}`}</title>
            </Helmet>

            <ExpenseTypeForm />
        </>
    );
}