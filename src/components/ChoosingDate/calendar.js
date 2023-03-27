import  React, { useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
// import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/system";
import BasicTimePicker from "./TimePIcker";
import Username from "./username";
import { Box, Modal,  } from "@mui/material";

export default function Calendarr() {
  const style = {
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p:4
  };

  // const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Stack>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        dateClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <BasicTimePicker/>
          <Username/>
        </Box>
      </Modal>
    </Stack>
  );
}
