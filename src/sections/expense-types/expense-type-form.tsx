import React from "react";
import {useLocation} from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import {DashboardContent} from "../../layouts/dashboard";
import {CommonForm} from "../../common/form/common-form";
import {expenseTypeFormFieldsList} from "../../utils/form-fields";


export function ExpenseTypeForm() {

    const expenseTypeData = {
        description: '',
        active: false,
    };

    const expenseTypeErrors = {
        description: false,
        active: false,
    };

    const location = useLocation();

    const formAction = location.pathname.split('/')[2];

    const expenseTypeId = location.pathname.split('/')[3];


    return (
        <DashboardContent >
            <Box display="flex" alignItems="center" mb={5}>
                <Typography variant="h4" flexGrow={1}>
                    {formAction === 'create' ? 'Crear tipo de gasto' : formAction === 'detail' ? 'Datos del tipo de gasto' : 'Editar tipo de gasto'}
                </Typography>
            </Box>
            <CommonForm
                key="expense-type-form-key"
                section="expense-types"
                formAction={formAction}
                resourceId={expenseTypeId}
                formFields={expenseTypeFormFieldsList}
                errors={expenseTypeErrors}
                data={expenseTypeData} />
        </DashboardContent>
    );
}

