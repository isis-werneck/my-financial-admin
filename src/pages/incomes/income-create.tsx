import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import {IncomeForm} from 'src/sections/incomes/income-form';

// ----------------------------------------------------------------------

export default function Page() {
    return (
        <>
            <Helmet>
                <title> {`Crear un ingreso - ${CONFIG.appName}`}</title>
            </Helmet>

            <IncomeForm />
        </>
    );
}