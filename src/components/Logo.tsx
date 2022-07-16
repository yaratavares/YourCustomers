import { SxProps } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const styles: SxProps = {
  width: "600px",
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  marginTop: "50px",
  "@media (max-width:600px)": {
    width: "400px",
  },
  "@media (max-width:400px)": {
    width: "200px",
  },
};

export default function Logo(): JSX.Element {
  return (
    <Container sx={styles} component="h1">
      <Typography variant="h2">
        Your
        <br />
        Customers
      </Typography>
    </Container>
  );
}
