import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../redux/auth/action";

export const Signup = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const registeredUser = useSelector(
    (store) => store.authReducer.registeredUser
  );
  console.log(registeredUser);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(user));
    setUser({
      name: "",
      email: "",
      password: "",
    });
  };
  useEffect(() => {
    if (registeredUser) {
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
      setTimeout(() => {
        navigate("/login");
        window.location.reload();
      }, 2000);
    }
  }, [registeredUser]);
  return (
    <Box>
      <Center>
        <Card w={"30%"} bg={"#E3F2FD"} variant="outline" borderColor="#d0d7de">
          <CardHeader>
            <Heading size="md" color={"#1565C0"}>
              Please Sign Up Here
            </Heading>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSubmit}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter your name"
                  bg={"white"}
                  name="name"
                  value={user.name}
                  onChange={(e) => handleChange(e)}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  bg={"white"}
                  name="email"
                  value={user.email}
                  onChange={(e) => handleChange(e)}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  bg={"white"}
                  name="password"
                  value={user.password}
                  onChange={(e) => handleChange(e)}
                />
              </FormControl>
              <Button
                type="submit"
                w={"100%"}
                mt={"10px"}
                textAlign={"center"}
                bg={"#1565C0"}
                _hover={{ bg: "#1976D2" }}
              >
                Sign Up
              </Button>
            </form>
            <HStack>
              <Text>Already got an account?</Text>
              <Text>Sign In</Text>
              <Box as="span" color={"#1565C0"}>
                <Link to={"/login"}>Here</Link>
              </Box>
            </HStack>
          </CardBody>
        </Card>
      </Center>
    </Box>
  );
};
