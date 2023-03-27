import React, { useEffect, useState } from "react";

import { Button, Stack,  Box } from "@mui/material";
import { ErrorMessage, Form, Field, Formik, useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  firstName: yup.string("Enter your first name"),
  lastName: yup
    .string("Enter your last name")

    .required("Last name is required"),
  specialty: yup
    .string("Enter your last name")

    .required("Specialty is required"),
  number: yup
    .string("Enter your phone number")
    .min(9, "Phone number should be of minimum 9 numbers length")
    .required("Phone number is required"),
  email: yup
    .string("Enter your email")
    .email("Invalid email format")
    .required("Email is required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  specialty: "",
  number: "",
};
export const getDatafromLS = () => {
  const data = localStorage.getItem("doctors");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
getDatafromLS();

function AddDoctor() {
  const onSubmit = (values) => {
   formik.setFieldValue(values);
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  // const click = () => {
  //   const obj = {
  //     firstName: formik.values.firstName,
  //     lastName: formik.values.lastName,
  //     email: formik.values.email,
  //     specialty: formik.values.specialty,
  //   };

  // };

  // main array of objects state || books state || books array of objects
  const [doctors, setDoctors] = useState(getDatafromLS());

  // input field states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [number, setNumber] = useState("");

  // form submit event
  const handleAddDoctorSubmit = (e) => {
    e.preventDefault();
    // creating an object
    let doctor = {
      firstName,
      lastName,
      email,
      specialty,
      number,
    };
    setDoctors([...doctors, doctor]);
    setFirstName("");
    setLastName("");
    setSpecialty("");
    setEmail("");
    setNumber("");
  };
  useEffect(() => {
    localStorage.setItem("doctors", JSON.stringify(doctors));
  }, [doctors]);
  return (
    <Stack
      spacing={2}
      sx={{ mt: "100px", width: "100%", alignItems: "center" }}
    >
      <Formik initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      <Form onSubmit={handleAddDoctorSubmit}>
       <Box sx={{display:'flex', direction:'column'}}>
       <Field
          sx={{ mt: "5px" }}
          fullWidth
          required
          variant="outlined"
          id="firstName"
          name="firstName"
          type="text"
          label="First name"
          value={firstName}
          
          onChange={(e) => setFirstName(e.target.value)}
      />
      <ErrorMessage name="firstName"/>
       </Box>
       <Box sx={{display:'flex', direction:'column'}}>
       <Field
          sx={{ mt: "5px" }}
          fullWidth
          variant="outlined"
          id="lastname"
          type="text"
          name="lastName"
          label="Last name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helpertext={formik.touched.lastName && formik.errors.lastName}
        />
       </Box>
        <Box sx={{display:'flex', direction:'column'}}>
        <Field
          sx={{ mt: "5px" }}
          type="text"
          fullWidth
          variant="outlined"
          id="specialty"
          name="specialty"
          label="Specialty"
          onChange={(e) => setSpecialty(e.target.value)}
          value={specialty}
          error={formik.touched.specialty && Boolean(formik.errors.specialty)}
          helpertext={formik.touched.specialty && formik.errors.specialty}
        />
        </Box>
      <Box sx={{display:'flex', direction:'column'}}>
      <Field
          sx={{ mt: "5px" }}
          fullWidth
          variant="outlined"
          id="number"
          type="number"
          name="number"
          label="Phone number"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helpertext={formik.touched.number && formik.errors.number}
        />
      </Box>
        <Box sx={{display:'flex', direction:'column'}} >
          <label htmlFor="email">Email</label>
          <Field
            sx={{ mt: "5px" }}
            fullWidth
            variant="outlined"
            type="email"
            id="email"
            name="email"
            label=""
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helpertext={formik.touched.email && formik.errors.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="m-0 text-red ">{formik.errors.email}</p>
          ) : null}
        </Box>
        <Button fullWidth width="%" type="submit">
          Submit
        </Button>
      </Form>
      </Formik>
    </Stack>
  );
}

export default AddDoctor;
