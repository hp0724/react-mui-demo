import { Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";

export const MuiLoadingButton = () => {
  return (
    <Stack spacing={2} direction="row">
      <LoadingButton variant="outlined">Submit </LoadingButton>;
      <LoadingButton loading variant="outlined">
        Submit
      </LoadingButton>
    </Stack>
  );
};
