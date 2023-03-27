import React, { useEffect, useState } from "react";
import { Space, TimePicker } from 'antd';
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useFormik } from "formik";
import * as yup from "yup";
import { Stack } from "@mui/system";
import moment from "moment";
import dayjs from "dayjs";
import { DateTimePicker } from "@mui/x-date-pickers";

const validationSchema = yup.object({
  StartTime: yup
    .string("Enter time")
    .min(8, "Password should be of minimum 8 characters length")
    .required("First name is required"),
  EndTime: yup
    .string("Enter your last name")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Last name is required"),
});

export default function BasicTimePicker() {
  const [value, setValue] = useState();
  const [value2, setValue2] = useState();

  const formik = useFormik({
    initialValues: {
      StartTime: "",
      EndTime: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const [timeSlots, setTimeSlots] = useState([]);

  const createTimeSlots = (fromTime, toTime) => {
    let StartTime = moment(fromTime, "hh:mm A");
    let EndTime = moment(toTime, "hh:mm A");
    if (EndTime.isBefore(StartTime)) {
      EndTime.add(1, "day");
    }
    let arr = [];
    while (StartTime <= EndTime) {
      arr.push(new moment(StartTime).format("hh:mm A"));
      StartTime.add(20, "minutes");
    }
    return arr;
  };
  useEffect(() => {
    setTimeSlots(createTimeSlots("09:00 AM", "06:00 PM"));
    const res =timeSlots.filter((item, index) =>  console.log(item.replaceAll(" AM",'')));
   
    setValue(res);
    console.log('res', res);
    const res2 =timeSlots.filter((item2, index) => item2.replace("AM/PM",'')===value2);
    setValue2(res2)
    console.log('res2',res2);
  }, []);
  
  return (
    <>
    <Space direction="vertical">
    {/* <TimePicker status="error" /> */}
    {/* <TimePicker status="warning" /> */}
    <TimePicker.RangePicker status="error" />
    <TimePicker.RangePicker status="warning" />
  </Space>
    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      
        <Stack spacing={3}>
          <TimePicker
            renderInput={(params) => <TextField {...params} />}
            label="Start Time"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            minTime={dayjs('09:00')}
          />
          <TimePicker
            renderInput={(params) => <TextField {...params} />}
            label="End Time"
            value={value2}
            onChange={(newValue2) => {
              setValue2(newValue2);
            }}
          />
        </Stack>
      
    </LocalizationProvider> */}
    </>
  );
}
