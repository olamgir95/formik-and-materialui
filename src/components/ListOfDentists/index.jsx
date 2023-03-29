import { Box, Button, Card as Item, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ListOfDentists({ doctors, setDoctors }) {
  const navigate = useNavigate();
  const [state, setState] = useState([]);

  useEffect(() => {
    setState(doctors);
  }, [doctors]);
  const onHandleBook = (index) => {
    navigate(`/choosingdate/${index}`);
  };

  return (
    <Stack sx={{ paddingTop: "100px", textAlign: "center", width: "100%" }}>
      <Typography
        letterSpacing="3px"
        sx={{ color: "primary.main", fontSize: "30px", fontWeight: "600" }}
      >
        Our Team
      </Typography>
      <Stack
        direction="row"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "space-between",
          margin: "50px",
        }}
      >
        {state.length > 0 ? (
          state.map((users, index) => {
            return (
              <Item
                variant="outlined"
                sx={{ width: "23%",  textAlign: "left" }}
                key={index}
              >
                <img
                  style={{ width: "100%", height: "250px" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk6DSg8WvTLfZSMf5eyj9oY1wgaSTF2DIWvQhwSQpJomxIypNzlrcLm9TwYb3kNXyBIRM&usqp=CAU"
                  alt=""
                />
                <Box sx={{ margin: "5px" }}>
                  <p>
                    Name:
                    <strong>
                      {users.firstName} {users.lastName}
                    </strong>
                  </p>
                  <p>Phone: {users.number}</p>
                  <p>Email: {users.email}</p>
                  <p>Specialty: {users.specialty}</p>
                </Box>
                <Button
                  onClick={() => onHandleBook(index)}
                  sx={{ marginRight: "auto !important" }}
                >
                  Book
                </Button>
              </Item>
            );
          })
        ) : (
          <h1>LOADING...</h1>
        )}
      </Stack>
    </Stack>
  );
}
