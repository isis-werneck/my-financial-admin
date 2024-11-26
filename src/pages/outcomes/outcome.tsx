import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import {OutcomeView} from "../../sections/outcomes";

// ----------------------------------------------------------------------

export default function Page() {
    return (
        <>
            <Helmet>
                <title> {`Mis Gastos - ${CONFIG.appName}`}</title>
            </Helmet>

            <OutcomeView />
        </>
    );
}