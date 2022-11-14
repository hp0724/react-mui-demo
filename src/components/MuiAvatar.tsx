import { Stack, Avatar, AvatarGroup } from "@mui/material";

export const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={1}>
        <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>Ck</Avatar>
      </Stack>

      <Stack direction="row" spacing={1}>
        <AvatarGroup max={4}>
          <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>Ck</Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Jane Doe"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/women/51.jpg"
            alt="Jane Doe"
          />
        </AvatarGroup>
      </Stack>

      <Stack direction="row" spacing={1}>
        <Avatar
          variant="square"
          sx={{ bgcolor: "primary.light", width: 48, height: 48 }}
        >
          BW
        </Avatar>
        <Avatar sx={{ bgcolor: "success.light", width: 48, height: 48 }}>
          Ck
        </Avatar>
      </Stack>
    </Stack>
  );
};
