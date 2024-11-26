import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import {PaymentTypeForm} from 'src/sections/payment-types/payment-type-form';


// ----------------------------------------------------------------------

export default function Page() {
    return (
        <>
            <Helmet>
                <title> {`Detalle del tipo de pago - ${CONFIG.appName}`}</title>
            </Helmet>

            <PaymentTypeForm />
        </>
    );
}