import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import {UserForm} from "../../sections/users/user-form";
// ----------------------------------------------------------------------

export default function Page() {
    return (
        <>
            <Helmet>
                <title> {`Editar usuario - ${CONFIG.appName}`}</title>
            </Helmet>

            <UserForm />
        </>
    );
}