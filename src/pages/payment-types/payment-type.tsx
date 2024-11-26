import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import {PaymentTypeView} from "../../sections/payment-types";

// ----------------------------------------------------------------------

export default function Page() {
    return (
        <>
            <Helmet>
                <title> {`Tipos de pago - ${CONFIG.appName}`}</title>
            </Helmet>

            <PaymentTypeView />
        </>
    );
}