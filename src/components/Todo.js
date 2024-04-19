import { Card, CardContent, IconButton, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
// Icons
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export function Todo({ title, description }) {
  return (
    <>
      <Card sx={{ marginTop: 2, background: "#283593", color: "#fff", minWidth: "275" }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid xs={8}>
              <Typography variant='h6' sx={{ textAlign: "right", fontSize: "20px" }} >
                {title}
              </Typography>
              <Typography variant='h5' sx={{ textAlign: "right", fontSize: "20px" }} >
                {description}
              </Typography>
              {/* Action Button */}
            </Grid>
            <Grid xs={4} display={"flex"} alignItems={"center"} justifyContent={"space-evenly"}>
              <IconButton style={{ background: "#FFF", color: "#8bc34a", border: "solid 1px #8bc34a" }} >
                <CheckOutlinedIcon />
              </IconButton>
              <IconButton style={{ background: "#FFF", color: "#1769aa", border: "solid 1px #1769aa" }} >
                <EditOutlinedIcon />
              </IconButton>
              <IconButton style={{ background: "#FFF", color: "#b23c17", border: "solid 1px #b23c17" }} >
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}