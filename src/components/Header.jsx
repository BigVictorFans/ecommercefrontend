import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router";

const Header = (props) => {
  const {current} = props;
  const location = useLocation();
  return (
    <>
    <Box
      sx={{
        py: 4,
        textAlign: "center",
        borderBottom: "1px solid #ddd",
        mb: 3,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "700",
        }}
      >
        {location.pathname === "/cart" ? "Cart" : "Welcome to My Homepage"}
      </Typography>
      {/* buttons */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
        <Button variant="contained" sx={{backgroundColor:"lightblue", color:"#5C95D3." }} href="/">Home</Button>
        <Button variant="contained" sx={{color:"white", backgroundColor:"#5C95D3."}} href="/cart">Cart</Button>
      </Box>
    </Box>
    </>
  );
};

export default Header;
