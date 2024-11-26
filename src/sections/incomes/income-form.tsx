import React from "react";
import {useLocation} from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import {DashboardContent} from "../../layouts/dashboard";
import {CommonForm} from "../../common/form/common-form";
import {incomeFormFieldsList} from "../../utils/form-fields";


export function IncomeForm() {

    const incomeData = {
        description: '',
        value: '',
    };

    const incomeErrors = {
        description: false,
        value: false,
    };

    const location = useLocation();

    const formAction = location.pathname.split('/')[2];

    const incomeId = location.pathname.split('/')[3];


    return (
        <DashboardContent >
            <Box display="flex" alignItems="center" mb={5}>
                <Typography variant="h4" flexGrow={1}>
                    {formAction === 'create' ? 'Crear ingreso' : formAction === 'detail' ? 'Datos del ingreso' : 'Editar ingreso'}
                </Typography>
            </Box>
            <CommonForm
                key="income-form-key"
                section="incomes"
                formAction={formAction}
                resourceId={incomeId}
                formFields={incomeFormFieldsList}
                errors={incomeErrors}
                data={incomeData} />
        </DashboardContent>
    );
}

