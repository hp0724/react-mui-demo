import { Tooltip, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
export const MuiTooltip = () => {
  return (
    <Tooltip
      title="Delete"
      placement="bottom-end"
      arrow
      enterDelay={500}
      leaveDelay={100}
    >
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
};
