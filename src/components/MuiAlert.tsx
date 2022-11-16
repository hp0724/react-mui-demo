import { Stack, Alert, AlertTitle, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { fontSize } from "@mui/system";
export const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error"> this is an error alert </Alert>
      <Alert severity="warning"> this is an error alert </Alert>
      <Alert severity="info"> this is an error alert </Alert>
      <Alert severity="success"> this is an error alert </Alert>

      <Alert variant="outlined" severity="error">
        {" "}
        this is an error alert{" "}
      </Alert>
      <Alert variant="outlined" severity="warning">
        {" "}
        this is an error alert{" "}
      </Alert>
      <Alert variant="outlined" severity="info">
        {" "}
        this is an error alert{" "}
      </Alert>
      <Alert variant="outlined" severity="success">
        {" "}
        this is an error alert{" "}
      </Alert>

      <Alert
        variant="filled"
        severity="error"
        onClose={() => alert("close alert")}
      >
        <AlertTitle>Error</AlertTitle> this is an error alert{" "}
      </Alert>
      <Alert variant="filled" severity="warning">
        <AlertTitle>warning</AlertTitle> this is an warning alert{" "}
      </Alert>
      <Alert variant="filled" severity="info">
        <AlertTitle>info</AlertTitle> this is an info alert{" "}
      </Alert>
      <Alert
        variant="filled"
        severity="success"
        icon={<CheckIcon fontSize="inherit" />}
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        <AlertTitle>success</AlertTitle> this is an success alert{" "}
      </Alert>
    </Stack>
  );
};
