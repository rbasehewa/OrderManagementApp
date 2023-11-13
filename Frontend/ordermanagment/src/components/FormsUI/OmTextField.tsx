import { TextField } from '@mui/material';
import { useField } from 'formik';
import React from 'react';


interface OmTextfieldProps {

    name: string,
    otherProps: any
}


export default function OmTextField({name, otherProps} : OmTextfieldProps){

    const [field, meta] = useField(name);

    const configTextField = {
        ...field,
        ...otherProps,
        fullWidth: true,
        variant: 'outlined'
    };

    if(meta && meta.touched && meta.error){
        configTextField.error = true;
        configTextField.helperText = meta.error;
    }

    return (

        <TextField {...configTextField} />

    );
}