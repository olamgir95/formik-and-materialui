import React, { useEffect, useState } from "react";

import { Button, Stack, InputLabel } from "@mui/material";
import { ErrorMessage, Form, Field, Formik, useFormik } from "formik";
import * as yup from "yup";
import { TextField } from "@material-ui/core";

const validationSchema = yup.object({
  firstName: yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  specialty: yup
    .string("Enter your last name")

    .required("Specialty is required"),
  number: yup
    .string("Enter your phone number")
    .min(9, "Phone number should be of minimum 9 numbers length")
    .required("Phone number is required"),
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
const setField=()=>{

}
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
  formik.setFieldValue("firstName", firstName);
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
      spacing={1}
      sx={{ mt: "100px", width: "100%", alignItems: "center" }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form onSubmit={handleAddDoctorSubmit}>
        <Field sx={{mt:"5px"}}
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

          <InputLabel htmlFor="name">Last name</InputLabel>
          <Field
            sx={{ mt: "5px", border: "1px solid lightgrey" }}
            fullWidth={true}
            type="text"
            name="lastName"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helpertext={formik.touched.lastName && formik.errors.lastName}
          />

          <InputLabel htmlFor="text">Specialty</InputLabel>
          <Field
            sx={{ mt: "5px", border: "1px solid lightgrey" }}
            type="text"
            fullWidth={true}
            name="specialty"
            onChange={(e) => setSpecialty(e.target.value)}
            value={specialty}
            error={formik.touched.specialty && Boolean(formik.errors.specialty)}
            helpertext={formik.touched.specialty && formik.errors.specialty}
          />

          <InputLabel htmlFor="number">Phone number</InputLabel>
          <Field
            sx={{ mt: "5px", border: "1px solid lightgrey" }}
            fullWidth={true}
            type="number"
            name="number"
            onChange={(e) => setNumber(e.target.value)}
            value={number}
            error={formik.touched.number && Boolean(formik.errors.number)}
            helpertext={formik.touched.number && formik.errors.number}
          />

          <InputLabel htmlFor="email">Email</InputLabel>
          <Field
            sx={{ mt: "5px", border: "1px solid lightgrey" }}
            fullWidth={true}
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helpertext={formik.touched.email && formik.errors.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="m-0 text-red ">{formik.errors.email}</p>
          ) : null}

          <Button fullWidth width="%" type="submit"  onClick={setField}>
            Submit
          </Button>
        </Form>
      </Formik>
    </Stack>
  );
}

export default AddDoctor;
