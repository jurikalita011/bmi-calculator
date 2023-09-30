import { Box, Button, Flex, Text, useToast } from "@chakra-ui/react";
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
    <Flex
      justifyContent={"space-evenly"}
      p={"10px 0px"}
      border={"2px solid green"}
      bg={"#0277BD"}
    >
      <Flex justifyContent={"space-evenly"} w={"70%"}>
        <Text fontWeight={700} fontSize={"18px"} color={"white"}>
          {" "}
          <Link to="/">Calculate BMI</Link>
        </Text>
        <Text fontWeight={700} fontSize={"18px"} color={"white"}>
          {" "}
          <Link to="/history">BMI History</Link>
        </Text>
      </Flex>
      <Flex justifyContent={"space-around"} alignItems={"center"} w={"40%"}>
        <Text fontWeight={700} fontSize={"18px"} color={"white"}>
          <Link to="/profile">Profile</Link>
        </Text>
        <Flex>
          <Text fontWeight={700} fontSize={"18px"} color={"white"}>
            <Link to="/login">Login</Link>
          </Text>
          <Box as="span" fontWeight={700} fontSize={"18px"} color={"white"}>
            /
          </Box>
          <Text fontWeight={700} fontSize={"18px"} color={"white"}>
            {" "}
            <Link to="/signup">Signup</Link>
          </Text>
        </Flex>
        <Button onClick={handleLogout} bg={"none"} _hover={{ bg: "#0288D1" }}>
          <Text
            fontWeight={700}
            fontSize={"18px"}
            color={isAuth ? "red" : "black"}
          >
            {" "}
            Log Out
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
};
