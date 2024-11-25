import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import {ExpenseTypeForm} from "../../sections/expense-type/expense-type-form";
// ----------------------------------------------------------------------

export default function Page() {
    return (
        <>
            <Helmet>
                <title> {`Editar usuario - ${CONFIG.appName}`}</title>
            </Helmet>

            <ExpenseTypeForm />
        </>
    );
}