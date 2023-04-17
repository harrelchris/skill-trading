import Header from "./Header";
import Inputs from "./Inputs";
import Outputs from "./Outputs";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Footer from "./Footer";

function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <Box
          pt={2}
          sx={{
            display: "flex",
            flexDirection: {xs: "column", md: "row"}
          }}>
          <Inputs />
          <Outputs />
        </Box>
        <Footer />
      </Container>
    </>
  );
}

export default Dashboard
