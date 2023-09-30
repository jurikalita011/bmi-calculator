import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserProfile } from "../redux/auth/action";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useToast,
} from "@chakra-ui/react";

export const UserProfile = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const loggedInUser = useSelector((store) => store.authReducer.loggedInUsers);
  const isUpdated = useSelector((store) => store.authReducer.isUpdated);
  console.log(loggedInUser, "logged");
  console.log(isUpdated, "updatedornot");

  const [formData, setFormData] = useState({
    name: loggedInUser && loggedInUser[0] ? loggedInUser[0].name : "",
    email: loggedInUser && loggedInUser[0] ? loggedInUser[0].email : "",
    password: loggedInUser && loggedInUser[0] ? loggedInUser[0].password : "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loggedInUser && loggedInUser[0] && loggedInUser[0].id) {
      const updatedUserData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };

      dispatch(updateUserProfile(loggedInUser[0].id, updatedUserData));
    }
  };
  useEffect(() => {
    if (isUpdated) {
      toast({
        title: "User profile update successful!",
        description: "User profile has been updated",
        status: "success",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    }
  }, [isUpdated]);
  return (
    <Box>
      <Center>
        <Card w={"30%"} bg={"#FAFAFA"} variant="outline" borderColor="#d0d7de">
          <CardHeader>
            <Heading size="md" color={"#1565C0"}>
              User Profile
            </Heading>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSubmit}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  bg={"white"}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  bg={"white"}
                  value={formData.email}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  bg={"white"}
                  value={formData.password}
                  onChange={handleChange}
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
                Update User
              </Button>
            </form>
          </CardBody>
        </Card>
      </Center>
    </Box>
  );
};
