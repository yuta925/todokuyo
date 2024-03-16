import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import dayjs from "dayjs";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";

export const SelectLocation = () => {
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value as string);
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DemoItem>
            <MobileDatePicker defaultValue={dayjs()} />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>

      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">場所</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={location}
            label="場所"
            onChange={handleChange}
          >
            <MenuItem value={10}>京都産業大学</MenuItem>
            <MenuItem value={20}>関西学院大学</MenuItem>
            <MenuItem value={30}>国際信州学院大学</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="名前" variant="outlined" />
      </Box>
      <Button
        variant="contained"
        endIcon={<SendIcon />}
        onClick={() => navigate("/order")}
      >
        送信
      </Button>
    </>
  );
};
