import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import {IncomeForm} from "../../sections/incomes/income-form";
// ----------------------------------------------------------------------

export default function Page() {
    return (
        <>
            <Helmet>
                <title> {`Editar ingreso - ${CONFIG.appName}`}</title>
            </Helmet>

            <IncomeForm />
        </>
    );
}