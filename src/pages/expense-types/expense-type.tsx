import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import {ExpenseTypeView} from "../../sections/expense-types";

// ----------------------------------------------------------------------

export default function Page() {
    return (
        <>
            <Helmet>
                <title> {`Tipos de gastos - ${CONFIG.appName}`}</title>
            </Helmet>

            <ExpenseTypeView />
        </>
    );
}