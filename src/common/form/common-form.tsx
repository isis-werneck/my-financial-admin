import type {FormEvent} from "react";

import { useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

import Box from "@mui/material/Box";
import {FormControl} from "@mui/material";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

import {Label} from "../../components/label";
import {Iconify} from "../../components/iconify";


export function CommonForm({section, formAction, resourceId, formFields, errors, data}: any) {
    const navigate = useNavigate();

    const urlAPI = resourceId ? `https://localhost/${section}/${resourceId}` : "";

    const [formData, setFormData] = useState(data);

    const [formErrors, setFormErrors] = useState(errors);

    const [dataset, setDataset] = useState<string[]>([]);

    const fetchInfo = async () => {
        const res = await fetch(urlAPI);
        const d = await res.json();
        return setFormData(d);
    };

    useEffect(() => {
        if (resourceId) fetchInfo();
    });

    const validateForm = () => {
        Object.keys(formData).forEach((key: string) => {
            errors = {...errors, [key]: formData[key].length === 0};
        })

        setFormErrors({...errors});
    };


    const handleSubmitForm = (e: FormEvent) => {
        e.preventDefault();
        validateForm();

        if (Object.keys(errors).every((key: string | number) => errors[key] === false)) {
            submitForm();
        }
    }

    const submitForm = async () => {

        if (formAction === 'create') {
            setFormData({...formData, "created": new Date().toISOString(), "modified": new Date().toISOString()});

            fetch(`https://localhost/${section}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/ld+json'
                },
                body: JSON.stringify(formData)
            }).then((response) => {
                if (response.status === 201) navigate(`/${section}`);

            });
        } else {
            setFormData({...formData, "modified": new Date().toISOString()});
            await fetch(`https://localhost/${section}/${formData.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/ld+json'
                },
                body: JSON.stringify(formData)
            })
        }
    }

    const handleChange = (event: any) => {

        const {target: {name, value}} = event;

        if (typeof formData[name] === 'object') {
            setDataset(value);
            setFormData({...formData, [name]: [...formData[name],value]})
        }
        else {
            setFormData({...formData, [name]: value})
        }
    };

    return (

        <Box
            key="custom-form"
            component="form"
            onSubmit={handleSubmitForm}
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            width="90%">

            {formFields.map((field: any) => (

                (formAction === 'detail') &&
                <FormControl>
                    <Label sx={{mb: 1}}>{field.label}</Label>
                    <TextField
                        sx={{mb: 3}}
                        variant="standard"
                        size="small"
                        value={formData[field.name]}
                        disabled/>
                </FormControl>
                ||
                <FormControl key={`fc_${field.name}`} sx={{width: 500, height: 50, mb: 3}}>
                    <TextField
                        fullWidth
                        error={formErrors[field.name]}
                        helperText={formErrors[field.name] ? 'Campo requerido' : ''}
                        name={field.name}
                        label={field.label}
                        required={field.required}
                        InputLabelProps={{shrink: true}}
                        size="small"
                        sx={{mb: 3}}
                        {...(field.type === 'select' && {select: true,
                            SelectProps: {
                            multiple: field.multiple,
                                native: false,
                                value: typeof formData[field.name] === 'object' ? dataset : formData[field.name],}})}
                        onChange={handleChange}
                        {...(field.type === 'text' || field.type === 'password') && { type: field.type, value: formData[field.name]}}
                    >
                        {field.type === 'select' && field.options.map((option: string) => (
                            <MenuItem key={option} value={option}>{option}</MenuItem>
                        ))}
                        </TextField>
                </FormControl>
            ))}

            {(formAction !== 'detail') &&
                <Button
                    type="submit"
                    variant="contained"
                    color="inherit"
                    startIcon={<Iconify icon="mingcute:save-2-fill" />}
                    onClick={handleSubmitForm}
                >
                    Guardar
                </Button>
            }
        </Box>
    );
}