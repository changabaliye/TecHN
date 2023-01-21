import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import Logo from "../../assets/tech.png";
const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="0.7rem 6%"
        textAlign="center"
        sx={{ border: "2px solid yellow" }}
      >
        <Typography fontWeight="bold" fontSize="42px" color="primary">
          TecHN
        </Typography>
        <Box
          width="100px"
          height="100px"
          position="absolute"
          top="3px"
          left="10px"
        >
          <img
            src={Logo}
            alt="Logo"
            style={{
              width: "80px",
              height: "80px",
              borderRadius:"50px"
            }}
          />
        </Box>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
        sx={{ border: "4px solid yellow" }}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to TechN
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
