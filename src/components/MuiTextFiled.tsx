import React from "react";
import { InputAdornment, Stack, TextField } from "@mui/material";
import { useState } from "react";
export const MuiTextFiled = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="승" variant="outlined" />
        <TextField label="철" variant="filled" />
        <TextField label="name" variant="standard" />
      </Stack>

      {/* textField  비밀번호   */}
      <Stack direction="row" spacing={2}>
        <TextField label="Small secondary" size="small" color="secondary" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Form Input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          //   value 값이 없다면 required 있다면 두번째거
          helperText={
            !value ? "Required" : "Do not share your password with anyone"
          }
        />
        <TextField
          label="Password"
          type="password"
          helperText="do not share your password with anyone"
          disabled
        />
        <TextField label="Read only" InputProps={{ readOnly: true }} />
      </Stack>
      {/* textField 에 글자 넣기 
        달러 kg 예시  */}
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start"> $</InputAdornment>
            ),
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end"> kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};
