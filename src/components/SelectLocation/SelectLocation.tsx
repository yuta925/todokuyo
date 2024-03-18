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
import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import { Locations } from "../../assets/Locations";

export const SelectLocation = () => {
  const [location, setLocation] = useState<string>("");
  const navigate = useNavigate();

  const handleChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value as string);
  };

  return (
    <form>
      <div className="flex basis-8 grow flex-col gap-y-10">
        <div>
          <p>日程を入力してください</p>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              components={["DatePicker"]}
              sx={{
                display: "flex",
                width: "80%",
                marginLeft: "10%",
              }}
            >
              <DemoItem>
                <MobileDatePicker defaultValue={dayjs()} />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </div>

        <div>
          <p>場所を入力してください</p>
          <Box
            sx={{
              minWidth: 120,
            }}
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">場所</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={location}
                label="場所"
                onChange={handleChange}
              >
                {Locations.map((location) => (
                  <MenuItem value={location.id} key={location.address}>
                    {location.name}
                  </MenuItem>
                ))}
                {/* <MenuItem value={10}>京都産業大学</MenuItem>
                <MenuItem value={20}>関西学院大学</MenuItem>
                <MenuItem value={30}>国際信州学院大学</MenuItem> */}
              </Select>
            </FormControl>
          </Box>
        </div>

        <div>
          <p>名前を入力してください</p>
          <Grid container direction="column" justifyContent="center">
            <Box
              component="form"
              sx={
                {
                  // minWidth: 120,
                }
              }
              noValidate
              autoComplete="off"
            />
            <TextField id="outlined-basic" label="名前" variant="outlined" />
            {/* </Box> */}
          </Grid>
        </div>

        <Grid container direction="column" justifyContent="center">
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={() => navigate("/order")}
            sx={{
              // display: "flex",
              // flexDirection: "column",
              // alignItems: "center",
              justifyContent: "center",
            }}
          >
            送信
          </Button>
        </Grid>
      </div>
    </form>
  );
};
