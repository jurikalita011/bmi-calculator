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
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signin } from "../redux/auth/action";

export const Login = () => {
  const toast = useToast();

  const locations = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth, registeredUsers } = useSelector((store) => store.authReducer);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  console.log(locations);
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signin(user));
    setTimeout(() => {
      navigate(locations.state);
      // window.location.reload();
    }, 2000);

    setUser({
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    if (isAuth) {
      toast({
        title: "User Logged in",
        description: "Logged in Successful",
        status: "success",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [isAuth]);
  return (
    <Box>
      <Center>
        <Card w={"30%"} bg={"#E3F2FD"} variant="outline" borderColor="#d0d7de">
          <CardHeader>
            <Heading size="md" color={"#1565C0"}>
              Please Log In Here
            </Heading>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSubmit}>
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
                Sign In
              </Button>
            </form>
            <HStack>
              <Text>Are you a new user?</Text>
              <Text>Sign Up</Text>
              <Box as="span" color={"#1565C0"}>
                <Link to={"/signup"}>Here</Link>
              </Box>
              <Text>first</Text>
            </HStack>
          </CardBody>
        </Card>
      </Center>
    </Box>
  );
};
