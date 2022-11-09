import { Typography } from "@mui/material";

export const MuiTypograhy = () => {
  return (
    <div>
      <Typography variant="h1">h1 </Typography>
      <Typography variant="h2">h2</Typography>
      <Typography variant="h3">h3</Typography>
      <Typography variant="h4" component="h6" gutterBottom>
        h4
      </Typography>
      <Typography variant="h5">h5</Typography>
      <Typography variant="h6">h6</Typography>

      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim saepe
        nisi, vero ex quaerat molestiae natus corporis aperiam, a earum ipsa
        aliquid consequuntur culpa cupiditate veritatis eaque minima ab illum?
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quis
        veritatis magni mollitia. Ex hic, provident voluptas dolore consequuntur
        nulla, est dolor atque laudantium non molestias repudiandae harum et
        maxime?
      </Typography>
    </div>
  );
};

export default MuiTypograhy;
