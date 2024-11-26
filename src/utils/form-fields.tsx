export const userFormFieldsList = [
    {
        id: "id",
        name: "userIdentifier",
        label: "Nombre de usuario",
        type: "text",
        required: true,
        multiple: false,
    },
    {
        id: "id",
        name: "email",
        label: "Email",
        type: "text",
        required: true,
        multiple: false,
    },
    {
        id: "id",
        name: "password",
        label: "Contraseña",
        type: "password",
        required: true,
        multiple: false,
    },
    {
        id: "id",
        name: "userType",
        label: "Tipo de usuario",
        type: "select",
        required: true,
        multiple: false,
        options: ["Profesor", "Estudiante", "Administrador"],
    },
    {
        id: "id",
        name: "userRoles",
        label: "Roles de usuario",
        type: "select",
        required: true,
        multiple: true,
        options: ['Ver', 'Crear', 'Editar', 'Eliminar'],
    },
];

export const expenseTypeFormFieldsList = [
    {
        id: "id",
        name: "description",
        label: "Descripción",
        type: "text",
        required: true,
        multiple: false,
    },
    {
        id: "id",
        name: "active",
        label: "Activo",
        type: "select",
        required: true,
        multiple: false,
        options: ['Si', 'No'],
    },
];

export const paymentTypeFormFieldsList = [
    {
        id: "id",
        name: "description",
        label: "Descripción",
        type: "text",
        required: true,
        multiple: false,
    },
    {
        id: "id",
        name: "active",
        label: "Activo",
        type: "select",
        required: true,
        multiple: false,
        options: ['Si', 'No'],
    },
];

export const incomeFormFieldsList = [
    {
        id: "id",
        name: "description",
        label: "Descripción",
        type: "text",
        required: true,
        multiple: false,
    },
    {
        id: "id",
        name: "value",
        label: "Valor",
        type: "text",
        required: true,
        multiple: false,
    },
];

export const outcomeFormFieldsList = [
    {
        id: "id",
        name: "description",
        label: "Descripción",
        type: "text",
        required: true,
        multiple: false,
    },
    {
        id: "id",
        name: "value",
        label: "Valor",
        type: "text",
        required: true,
        multiple: false,
    },
    {
        id: "id",
        name: "expenseType",
        label: "Tipo de gasto",
        type: "text",
        required: true,
        multiple: false,
    },
    {
        id: "id",
        name: "paymentType",
        label: "Tipo de pago",
        type: "text",
        required: true,
        multiple: false,
    },
];