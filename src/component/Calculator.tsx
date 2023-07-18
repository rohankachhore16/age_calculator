import { ArrowBack, ArrowDownward, Delete } from "@mui/icons-material";
import {
  Box,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { Form, Formik } from "formik";
import { useState } from "react";


interface ValuesProps {
  day: string;
  month: string;
  year: string;
}

const TextFiledCss = {
  input: {
    color: "gray",
    "&::placeholder": {
      color: "black",
      fontWeight: "bold",
      fontSize: "20px"
    },
  },
};
const SubmitButton = {
  marginTop: "20px",
  padding: "20px", background: "#8450f9",
  '&:hover': {
    backgroundColor: "#8450f9"
  }
}

type CountAgeProps = {
  currentDate: string;
  currentMonth: string;
  currentYear: string;
  month: string[]
}
const Calculator = () => {
  const [dob, setDob] = useState([0, 0, 0])
  function CountAge(birthDate: any, birthMonth: any, birthYear: any) {


    let date = new Date();
    let currentDate = date.getDate();
    let currentMonth = 1 + date.getMonth();
    let currentYear = date.getFullYear();
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (birthDate > currentDate) {
      currentDate = currentDate + month[currentMonth - 1];
      currentMonth = currentMonth - 1;
    }
    if (birthMonth > currentMonth) {
      currentMonth = currentMonth + 12;
      currentYear = currentYear - 1;
    }
    let d = currentDate - birthDate;
    let m = currentMonth - birthMonth;
    let y = currentYear - birthYear;

    console.log(d, m, y, "000000000")
    setDob([y, m, d])

  }
  return (
    <>
      <Box sx={{ bgcolor: "#f0f0f0", width: "100%" }}>
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

          }}
        >


          <Formik
            initialValues={{
              day: "",
              month: "",
              year: "",
            }}
            onSubmit={(values: ValuesProps) => {
              // const Age = values.month + "/" + values.day + "/" + values.year
              // const dob = new Date(Age)

              CountAge(values.day, values.month, values.year)


            }}
          >
            {({ values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit, }) => (
              <Form onSubmit={handleSubmit}>
                <Box
                  sx={{
                    bgcolor: "white",
                    p: 5,
                    maxWidth: "500px",
                    minWidth: "400px",
                    borderRadius: "20px",
                    borderEndEndRadius: "100px",
                  }}
                >
                  {/* <Stack mb={3} > */}

                  <Box sx={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
                    <Box width={100} maxWidth={120}>
                      <FormLabel id="demo-radio-buttons-group-label">
                        Day
                      </FormLabel>
                      <TextField
                        type="text"
                        placeholder="DD"
                        size="small"

                        name="day"
                        onChange={handleChange}
                        value={values.day}
                        sx={TextFiledCss}
                      />
                    </Box>

                    <Box width={100} maxWidth={120}>
                      <FormLabel id="demo-radio-buttons-group-label">
                        Month
                      </FormLabel>

                      <TextField
                        type="text"
                        placeholder="MM"
                        size="small"
                        name="month"
                        onChange={handleChange}
                        value={values.month}
                        sx={TextFiledCss}
                      />
                    </Box>

                    <Box width={100} maxWidth={120}>
                      <FormLabel id="demo-radio-buttons-group-label">
                        Year
                      </FormLabel>

                      <TextField
                        type="text"
                        placeholder="YYYY"
                        size="small"
                        name="year"
                        onChange={handleChange}
                        value={values.year}
                        sx={TextFiledCss}
                      />
                    </Box>
                  </Box>
                  {/* </Stack> */}
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "end",

                    }}
                  >
                    <IconButton type="submit"
                      aria-label="delete"
                      // sx={{ padding: "20px", background: "#8450f9" }}
                      sx={SubmitButton}
                    >
                      <ArrowDownward sx={{ color: "white" }} fontSize="large" />
                    </IconButton>
                  </Box>

                  <Stack>
                    <Box>
                      <Typography
                        sx={{ color: "#8450f9" }}
                        variant="h3"
                        component={"span"}
                      >
                        {dob[0] ?? "-- --"}
                      </Typography>
                      <Typography variant="h3" component={"span"}>
                        Years
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{ color: "#8450f9" }}
                        variant="h3"
                        component={"span"}
                      >
                        {dob[1] ?? "-- --"}
                      </Typography>
                      <Typography variant="h3" component={"span"}>
                        Months
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{ color: "#8450f9" }}
                        variant="h3"
                        component={"span"}
                      >
                        {dob[2] ?? "-- --"}
                      </Typography>
                      <Typography variant="h3" component={"span"}>
                        Days
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Form>
            )}
          </Formik>


        </Box>
      </Box>
    </>
  );
};

export default Calculator;
