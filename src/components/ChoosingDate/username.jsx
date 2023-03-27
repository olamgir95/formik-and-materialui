import {   Box, Stack,  } from "@mui/material";
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import React from "react";


const validationSchema = yup.object({
  firstName: yup
    .string('Enter your first name')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('First name is required'),
    lastName: yup
    .string('Enter your last name')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Last name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
});


function Username(props) {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email:''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Stack spacing={3} sx={{ alignItems:"center", mt:"5px"}} >
      <Box onSubmit={formik.handleSubmit}
      component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '46.9ch' }, display:"flex", flexDirection:"column"
        }}
        noValidate
        autoComplete="off"
     >
        <TextField sx={{mt:"5px"}}
          fullWidth
          variant="outlined"
          id="firstName"
          name="firstName"
          label="First name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField sx={{mt:"5px"}}
          fullWidth
          variant="outlined"
          id="outlined-error"
          name="lastName"
          label="Last name"
        value={formik.values.lastName}
        onChange={formik.handleChange}
        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
        helperText={formik.touched.lastName && formik.errors.lastName}
        />
            <TextField   sx={{mt:"5px"}}
          fullWidth
          variant="outlined"
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      <Button   sx={{mt:"5px"}} color="primary" variant="contained" fullWidth type="submit" >
          Submit
        </Button>
      </Box>
    </Stack>
  );
}

export default Username;
