import { Card as Item, Stack } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import Calendarr from "./calendar";

const ChoosingDate = ({ doctors, setDoctors }) => {
  const params = useParams();
  console.log('params', params);
  const [data, setData] = useState([]);
  useEffect(() => {
    const res = doctors.filter((value, index) => index == params.index,
    );
    setData(res)
    }, [doctors,params.index]);
    console.log(data)

  return (
    <Container sx={{ paddingTop: "80px" }}>
      <Stack
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Item
          variant="outlined"
          sx={{ width: "20%", height: "fit-content", textAlign: "left" }}
        >
          <img
            style={{ width: "100%", height: "150px" }}
            src="data:image/jpeg;base64,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"
            alt=""
          />{" "}
          {data.map((item, index) => (
            <Box key={index} sx={{ margin: "5px" }}>
              <p>
                Name:{" "}
                <strong>
                  {item.firstName} {item.lastName}
                </strong>
              </p>
              <p>Phone: {item.number}</p>
              <p>Email: {item.email}</p>
              <p>Specialty: {item.specialty}</p>{" "}
            </Box>
          ))}
        </Item>
      </Stack>
      <Stack sx={{ width: "80%", marginX: "auto" }}>
        <Calendarr sx={{ paddingTop: "100px" }} />
      </Stack>
    </Container>
  );
};

export default ChoosingDate;
