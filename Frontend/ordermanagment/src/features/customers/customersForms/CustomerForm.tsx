import React, { useState } from 'react'
import { Customer } from '../../../graphql/generated/schema';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import {Form, Formik } from 'formik';
import { Grid } from '@mui/material';
import OmTextField from '../../../components/FormsUI/OmTextField';
import OmSelect from '../../../components/FormsUI/OmSelect';
import OmSubmitButton from '../../../components/FormsUI/OmSubmitButton';
import Countires from '../../../data/countries.json';

interface CustomerFormProps {
    customer: Customer
}

const FORM_VALIDATION = yup.object().shape({
    firstname: yup.string()
    .required("First name is required"),
    lastname: yup.string()
    .required("Last name is required"),
    contactNumber: yup.string()
    .required("Contact number is required"),
    email: yup.string()
    .email("Invalid email format")
    .required("Email is required"),
    addressLine1: yup.string()
    .required("Address line is required"),
    addressLine2: yup.string()
    .required("Address line is required"),
    state: yup.string()
    .required("state is required"),
    country: yup.string()
    .required("country is required"),
    city: yup.string()
    .required("city is required"),

});

export default function CustomerForm({customer} : CustomerFormProps){

    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const INITIAL_FORM_STATE = {
        id: customer.id,
        firstname: customer.firstname || '',
        lastname: customer.lastname || '',
        contactNumber: customer.contactNumber || '',
        email: customer.email || '',
        addressLine1: customer.address?.addressLine1 || '',
        addressLine2: customer.address?.addressLine2 || '',
        city: customer.address?.city || '',
        state: customer.address?.state || '',
        country: customer.address?.country || ''

    }

    function addorUpdateCustomerDetails(values: any){
        console.log(values);
    }

    return (
        <Container>
            <div>
                <Formik initialValues={INITIAL_FORM_STATE}
                        validationSchema={FORM_VALIDATION}
                        onSubmit={addorUpdateCustomerDetails}
                >
                    <Form>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <OmTextField 
                                name="firstname"
                                otherProps={{label: "First Name"}}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <OmTextField 
                                name="lastname"
                                otherProps={{label: "First Name"}}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <OmTextField 
                                name="email"
                                otherProps={{label: "Email"}}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <OmTextField 
                                name="contactNumber"
                                otherProps={{label: "Contact Number"}}
                                />
                                <Grid item xs={12}>
                                    <Typography>Address </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <OmTextField 
                                    name="addressLine1"
                                    otherProps={{label: "Address Line1"}}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <OmTextField 
                                    name="addressLine2"
                                    otherProps={{label: "Address Line2"}}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <OmTextField 
                                    name="city"
                                    otherProps={{label: "City"}}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <OmTextField 
                                    name="state"
                                    otherProps={{label: "State"}}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <OmSelect 
                                    name="country"
                                    otherProps={{label: "Country"}}
                                    options={Countires}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <OmSubmitButton 
                                    otherProps={{}}
                                    >
                                        {!customer.id ? "Add New Customer" : "Update Customer"}
                                    </OmSubmitButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Form>
                </Formik>
            </div>
        </Container>
    );

}
