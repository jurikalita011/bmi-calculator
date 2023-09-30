import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBmi } from "../redux/bmi/action";
import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export const BmiHistory = () => {
  const dispatch = useDispatch();
  const bmiData = useSelector((store) => store.bmiReducer.bmi);
  const user = useSelector((store) => store.authReducer.loggedInUsers);
  console.log(bmiData, "bmi history");

  const usersId = (user && user[0]?.id) || user.id;
  const data = bmiData.filter((el) => el.userId === usersId);
  console.log(user, "check id");
  useEffect(() => {
    dispatch(getBmi());
  }, []);

  console.log(data, "data");
  return (
    <Box w={"70%"} margin={"20px auto"} bg={"#E0F2F1"} p={"5px"}>
      {data.length > 0 ? (
        <Box>
          <Text fontWeight={700} fontSize={"24px"}>
            Your BMI history
          </Text>
          <TableContainer marginTop={"40px"}>
            <Table size="sm" variant={"unstyled"}>
              <Thead>
                <Tr>
                  <Th textAlign={"center"} fontSize={"15px"}>
                    Date
                  </Th>
                  <Th isNumeric textAlign={"center"} fontSize={"15px"}>
                    Height(in Kg)
                  </Th>
                  <Th isNumeric textAlign={"center"} fontSize={"15px"}>
                    Weight(in Kg)
                  </Th>

                  <Th
                    isNumeric
                    textAlign={"center"}
                    fontSize={"15px"}
                    textColor={"#2E7D32"}
                  >
                    Calculated BMI
                  </Th>
                </Tr>
              </Thead>
              {data?.map((el) => {
                return (
                  <Tbody key={el.id}>
                    <Tr>
                      <Td textAlign={"center"}>{el.date}</Td>
                      <Td isNumeric textAlign={"center"}>
                        {el.height}
                      </Td>
                      <Td isNumeric textAlign={"center"}>
                        {el.wt}
                      </Td>
                      <Td isNumeric textAlign={"center"}>
                        {el.bmiResult}
                      </Td>
                    </Tr>
                  </Tbody>
                );
              })}
            </Table>
          </TableContainer>
        </Box>
      ) : (
        <Text fontWeight={700} fontSize={"24px"}>
          You don't have any recent history
        </Text>
      )}
    </Box>
  );
};
