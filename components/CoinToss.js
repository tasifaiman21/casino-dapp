import {
  Flex,
  Image,
  Text,
  SimpleGrid,
  Link,
  Button,
  Icon,
  Box,
} from "@chakra-ui/react";

import { FaFacebook } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { AiFillLinkedin } from "react-icons/ai";

export default function CoinToss() {
  return (
    /* mother flex for all start */
    <Flex w="100%" h="100%" pb="2rem">
      <Flex w="100%" alignItems="center" justifyContent="center">
        <Flex
          w="20%"
          alignItems="center"
          justifyContent="center"
          bgColor={"black"}
        >
          1
        </Flex>
        {/* flex for 2nd Start */}
        <Flex
          w="40%"
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Text fontSize="5xl" fontWeight="bold" color={"black"} p="2rem">
            Coin Toss
          </Text>

          <Flex
            bgColor={"RGBA(0, 0, 0, 0.64)"}
            w="30rem"
            h="22rem"
            borderRadius="1rem"
            direction={"Column"}
          >
            <Flex direction={"Column"} pt="1.5rem">
              <Text
                textAlign="center"
                fontSize="2xl"
                fontWeight="bold"
                color={"#FFFFFF"}
              >
                Select Your Side!
              </Text>
              <Text textAlign="center" fontSize="xl" color={"#E2E8F0"}>
                Guess Correctly & double your money
              </Text>
            </Flex>

            <Flex
              alignItems="center"
              justifyContent="center"
              gap="2rem"
              p="2rem"
            >
              <Flex direction="column">
                <Text fontSize="sm" fontWeight="bold" color={"#FFFFFF"}>
                  Heads
                </Text>
                <Text fontSize="xs" color={"#E2E8F0"}>
                  Win Rate:
                  <br /> 49,56%
                </Text>
              </Flex>

              <Flex w="5rem" h="5rem" borderRadius="50%" bgColor={"#CBD5E0"}>
                {" "}
              </Flex>

              <Flex w="5rem" h="5rem" borderRadius="50%" bgColor={"#CBD5E0"}>
                {" "}
              </Flex>

              <Flex direction="column">
                <Text fontSize="sm" fontWeight="bold" color={"#FFFFFF"}>
                  Tails
                </Text>
                <Text fontSize="xs" color={"#E2E8F0"}>
                  Win Rate:
                  <br /> 50,44%
                </Text>
              </Flex>
            </Flex>

            <Flex justifyContent={"center"}>
              <Flex
                alignItems="center"
                justifyContent={"center"}
                px="25px"
                h="50px"
                border="none"
                w="200px"
                bgColor="white"
                fontSize="xs"
                color={"black"}
                borderRadius="25px 0 0 25px"
              >
                <Text> 1000 BNB</Text>
              </Flex>

              <Flex
                position={"relative"}
                alignItems="center"
                justifyContent={"center"}
                borderRadius="0 25px 25px 0"
                w="150px"
                h="50px"
                border="none"
                outline="none"
                cursor="pointer"
                bgColor={"black"}
                fontSize="xs"
                color={"white"}
              >
                <Text> Place Your Bet</Text>
              </Flex>
            </Flex>

            <Text textAlign="center" fontSize="xs" color={"white"} p="2rem">
              Winning Payout: 1980.BNB
            </Text>
          </Flex>
        </Flex>
        {/* flex for 2nd Start */}
        <Flex
          w="20%"
          alignItems="center"
          justifyContent="center"
          bgColor={"yellow"}
        >
          3
        </Flex>
      </Flex>
    </Flex>
    /* mother flex for all end */
  );
}
