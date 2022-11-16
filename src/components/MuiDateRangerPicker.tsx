import { Box, TextField, TextFieldProps } from "@mui/material";
import { DateRangePicker, DateRange } from "@mui/lab";
import { SetStateAction, useState } from "react";

export const MuiDateRangePicker = () => {
  const [value, setValue] = useState<DateRange<Date>>([null, null]);
  console.log("value", value);
  return (
    <Box width="500px">
      <DateRangePicker
        startText="Check-in"
        endText="Check-out"
        value={value}
        onChange={(newValue: SetStateAction<DateRange<Date>>) => {
          setValue(newValue);
        }}
        renderInput={(
          startProps: JSX.IntrinsicAttributes & TextFieldProps,
          endProps: JSX.IntrinsicAttributes & TextFieldProps
        ) => (
          <>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </>
        )}
      />
    </Box>
  );
};
