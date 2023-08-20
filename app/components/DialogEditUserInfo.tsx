// ** React Imports
import { ReactElement, Ref, forwardRef, useState } from "react";

// ** MUI Imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Fade, { FadeProps } from "@mui/material/Fade";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const Transition = forwardRef(function Transition(
  props: FadeProps & { children?: ReactElement<any, any> },
  ref: Ref<unknown>,
) {
  return <Fade ref={ref} {...props} />;
});

const DialogEditUserInfo = ({ show, name, setShow, onSave }) => {
  // ** States
  const [value, setValue] = useState<string>(name);

  return (
    <Card>
      <Button variant="contained" onClick={() => setShow(true)}>
        Edit
      </Button>
      <Dialog
        fullWidth
        open={show}
        maxWidth="sm"
        scroll="body"
        onClose={() => setShow(false)}
        TransitionComponent={Transition}
        onBackdropClick={() => setShow(false)}
      >
        <DialogContent
          sx={{
            position: "relative",
            pb: (theme) => `${theme.spacing(8)} !important`,
            pt: (theme) => [
              `${theme.spacing(8)} !important`,
              `${theme.spacing(12.5)} !important`,
            ],
          }}
        >
          <Box sx={{ mb: 8, textAlign: "center" }}>
            <Typography sx={{ fontSize: 24, mb: 3, lineHeight: "2rem" }}>
              Edit his/her Name temporarily in detail page
            </Typography>
          </Box>
          <Grid container spacing={6}>
            <Grid item sm={12} xs={12}>
              <TextField
                fullWidth
                defaultValue={value}
                onChange={(e) => setValue(e.target.value)}
                label="Name"
                placeholder="John"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: "center",
            px: (theme) => [
              `${theme.spacing(5)} !important`,
              `${theme.spacing(15)} !important`,
            ],
            pb: (theme) => [
              `${theme.spacing(8)} !important`,
              `${theme.spacing(12.5)} !important`,
            ],
          }}
        >
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => setShow(false)}
          >
            Discard
          </Button>
          <Button
            variant="contained"
            sx={{ mr: 2 }}
            onClick={() => onSave(value)}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default DialogEditUserInfo;
