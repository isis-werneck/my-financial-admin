import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import {IncomeView} from "../../sections/incomes";

// ----------------------------------------------------------------------

export default function Page() {
    return (
        <>
            <Helmet>
                <title> {`Ingresos - ${CONFIG.appName}`}</title>
            </Helmet>

            <IncomeView />
        </>
    );
}