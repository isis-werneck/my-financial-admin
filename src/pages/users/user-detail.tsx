import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import {UserForm} from 'src/sections/users/user-form';


// ----------------------------------------------------------------------

export default function Page() {
    return (
        <>
            <Helmet>
                <title> {`Datos del usuario - ${CONFIG.appName}`}</title>
            </Helmet>

            <UserForm />
        </>
    );
}