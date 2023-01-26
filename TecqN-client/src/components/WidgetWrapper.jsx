import { Box } from "@mui/material";
import { styled } from "@mui/system";

const WidgetWrapper = styled(Box)(({ theme }) => ({
  padding: "0.75rem 0.75rem 0.75rem 0.75rem",
  backgroundColor: theme.palette.background.alt,
  borderRadius: "0.75rem",
  marginTop:"18px",
  border: "3px solid yellow",
}));

export default WidgetWrapper;
