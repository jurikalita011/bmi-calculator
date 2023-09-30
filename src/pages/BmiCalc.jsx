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
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postBmi } from "../redux/bmi/action";

export const BmiCalc = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.authReducer.loggedInUsers);
  console.log(user[0].id, "id");
  const usersId = user[0].id;

  const [heightFt, setHeightFt] = useState(0);
  const [weight, setWeight] = useState(0);
  const [result, setResult] = useState(null);
  const [data, setData] = useState({
    bmiResult: "",
    date: "",
    height: 0,
    wt: 0,
    userId: "",
  });
  const calculateBMI = () => {
    const heightMeters = heightFt * 0.3048;

    const bmi = weight / heightMeters ** 2;

    setResult(bmi.toFixed(2));
  };
  console.log(result, "result");
  useEffect(() => {
    console.log(result, "result useefct");
    setData({
      ...data,
      bmiResult: +result,
      date: new Date().toLocaleString(),
      height: +heightFt,
      wt: +weight,
      userId: usersId,
    });
  }, [Date, heightFt, weight]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postBmi(data));
    setHeightFt("");
    setWeight("");
  };
  return (
    <Box>
      <Center>
        <Card w={"30%"} bg={"#F3E5F5"} variant="outline" borderColor="#d0d7de">
          <CardHeader>
            <Heading size="md" color={"#1565C0"}>
              BMI Calculator
            </Heading>
          </CardHeader>
          {result ? (
            <Text fontSize={"20px"} fontWeight={600}>
              Current BMI: {result}
            </Text>
          ) : (
            <Text>Enter your details first...</Text>
          )}
          <CardBody>
            <form onSubmit={handleSubmit}>
              <FormControl isRequired>
                <FormLabel>Height (in feet):</FormLabel>
                <Input
                  bg={"white"}
                  type="number"
                  name="height"
                  value={heightFt}
                  onChange={(e) => setHeightFt(e.target.value)}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Weight (in kg):</FormLabel>
                <Input
                  bg={"white"}
                  type="number"
                  name="weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </FormControl>

              <Button
                type="submit"
                w={"100%"}
                mt={"10px"}
                textAlign={"center"}
                bg={"#1565C0"}
                _hover={{ bg: "#1976D2" }}
                onClick={calculateBMI}
              >
                Calculate BMI
              </Button>
            </form>
          </CardBody>
        </Card>
      </Center>
    </Box>
  );
};
