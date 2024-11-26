import React from "react";
import {useLocation} from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import {DashboardContent} from "../../layouts/dashboard";
import {CommonForm} from "../../common/form/common-form";
import {paymentTypeFormFieldsList} from "../../utils/form-fields";


export function PaymentTypeForm() {

    const paymentTypeData = {
        description: '',
        active: false,
    };

    const paymentTypeErrors = {
        description: false,
        active: false,
    };

    const location = useLocation();

    const formAction = location.pathname.split('/')[2];

    const paymentTypeId = location.pathname.split('/')[3];


    return (
        <DashboardContent >
            <Box display="flex" alignItems="center" mb={5}>
                <Typography variant="h4" flexGrow={1}>
                    {formAction === 'create' ? 'Crear tipo de pago' : formAction === 'detail' ? 'Datos del tipo de pago' : 'Editar tipo de pago'}
                </Typography>
            </Box>
            <CommonForm
                key="payment-type-form-key"
                section="payment-types"
                formAction={formAction}
                resourceId={paymentTypeId}
                formFields={paymentTypeFormFieldsList}
                errors={paymentTypeErrors}
                data={paymentTypeData} />
        </DashboardContent>
    );
}

