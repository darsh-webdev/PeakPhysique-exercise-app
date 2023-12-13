import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/Logo.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack
        gap="40px"
        alignItems="center"
        px="40px"
        pt="24px"
        flexDirection="row"
        justifyContent="center"
      >
        <img src={Logo} alt="logo" width="50px" height="50px" />
        <Typography
          variant="h5"
          color="#ff2625"
          ml="-20px"
          mt="10px"
          fontWeight="bold"
          fontStyle="italic"
        >
          Peak Physique
        </Typography>
      </Stack>
      <Typography variant="h6" textAlign="center" pb="40px" mt="30px">
        Made with ❤️ by Darshan Rajput <br /> &copy; 2023. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
