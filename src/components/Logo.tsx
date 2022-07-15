import { SxProps } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const styles: SxProps = {
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  marginTop: "50px",
};

export default function Logo(): JSX.Element {
  return (
    <Container sx={styles} maxWidth="sm" component="h1">
      <Typography variant="h2">
        Your
        <br />
        Customers
      </Typography>
    </Container>
  );
}
