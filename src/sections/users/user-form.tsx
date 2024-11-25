import React from "react";
import {useLocation} from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {DashboardContent} from "../../layouts/dashboard";
import {userFormFieldsList} from "../../utils/form-fields";
import {CommonForm} from "../../common/form/common-form";


export function UserForm() {

    const userData = {
        userIdentifier: '',
        email: '',
        password: '',
        userType: '',
        userRoles: [] as string[],
    };

    const userErrors = {
        userIdentifier: false,
        email: false,
        password: false,
        userType: false,
        userRoles: false,
    };

    const location = useLocation();

    const formAction = location.pathname.split('/')[2];

    const userId = location.pathname.split('/')[3];


    return (
        <DashboardContent >
            <Box display="flex" alignItems="center" mb={5}>
                <Typography variant="h4" flexGrow={1}>
                    {formAction === 'create' ? 'Crear usuario' : formAction === 'detail' ? 'Datos del usuario' : 'Editar usuario'}
                </Typography>
            </Box>
            <CommonForm
                key="user-form-key"
                section="users"
                formAction={formAction}
                resourceId={userId}
                formFields={userFormFieldsList}
                errors={userErrors}
                data={userData} />
        </DashboardContent>
    );
}

