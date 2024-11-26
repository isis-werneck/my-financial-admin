import React from "react";
import {useLocation} from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import {DashboardContent} from "../../layouts/dashboard";
import {CommonForm} from "../../common/form/common-form";
import {outcomeFormFieldsList} from "../../utils/form-fields";


export function OutcomeForm() {

    const outcomeData = {
        description: '',
        value: '',
        expenseType: '',
        paymentType: '',
    };

    const outcomeErrors = {
        description: false,
        value: false,
        expenseType: false,
        paymentType: false,
    };

    const location = useLocation();

    const formAction = location.pathname.split('/')[2];

    const outcomeId = location.pathname.split('/')[3];


    return (
        <DashboardContent >
            <Box display="flex" alignItems="center" mb={5}>
                <Typography variant="h4" flexGrow={1}>
                    {formAction === 'create' ? 'Crear gasto' : formAction === 'detail' ? 'Datos del gasto' : 'Editar gasto'}
                </Typography>
            </Box>
            <CommonForm
                key="outcome-form-key"
                section="outcomes"
                formAction={formAction}
                resourceId={outcomeId}
                formFields={outcomeFormFieldsList}
                errors={outcomeErrors}
                data={outcomeData} />
        </DashboardContent>
    );
}

