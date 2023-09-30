import { Box, Button, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/auth/action";

export const Navbar = () => {
  const toast = useToast();

  const dispatch = useDispatch();
  const { isAuth } = useSelector((store) => store.authReducer);

  const handleLogout = () => {
    dispatch(logout());
  };
  useEffect(() => {
    if (!isAuth) {
      toast({
        title: "User Logged out",
        description: "User has been Logged out,please log in again",
        status: "success",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    }
  }, [isAuth]);
  return (
    <Box>
      <Link to="/">Calculate BMI</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
      <Link to="/history">BMI History</Link>
      <Link to="/profile">Profile</Link>
      <Button onClick={handleLogout}>Log Out</Button>
    </Box>
  );
};
