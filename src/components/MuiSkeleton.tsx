import { Stack, Skeleton, Box, Avatar, Typography } from "@mui/material";
import { useState, useEffect } from "react";
export const MuiSkeleton = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Stack spacing={1} width="250px">
      <Skeleton variant="text" animation="wave" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton
        variant="rectangular"
        width={200}
        height={125}
        animation="wave"
      />
    </Stack>
  );
};
