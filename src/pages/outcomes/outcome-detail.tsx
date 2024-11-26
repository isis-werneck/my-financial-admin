import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import {OutcomeForm} from 'src/sections/outcomes/outcome-form';


// ----------------------------------------------------------------------

export default function Page() {
    return (
        <>
            <Helmet>
                <title> {`Detalle del gasto - ${CONFIG.appName}`}</title>
            </Helmet>

            <OutcomeForm />
        </>
    );
}