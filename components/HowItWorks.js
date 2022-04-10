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

import { FiShoppingCart } from "react-icons/fi";
import { BsArrowRepeat, BsEmojiSmile } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

export default function HowItWorks() {
  return (
    /* mother flex for all start */
    <Flex
      w="100%"
      h="100%"
      justifyContent="center"
      alignItems={"center"}
      p="2rem"
    >
      {/* mother flex for left potion start */}

      <Flex w="50%" direction={"column"} gap="2rem">
        <Text fontSize="2xl" fontWeight="bold" color={"black"} p="2rem">
          How It Works?
        </Text>

        {/* mother flex for MGtoken start */}
        <Flex w="100%" gap="1rem" pl="1rem">
          <Flex
            w="10%"
            p="1rem"
            bgColor="gray.200"
            borderRadius={"50%"}
            justifyContent="center"
            alignItems={"center"}
          >
            {" "}
            <Icon as={FiShoppingCart} fontSize="xl" color="black" />{" "}
          </Flex>

          <Flex w="90%" direction={"column"}>
            <Text fontSize="md" fontWeight="bold" color={"black"}>
              {" "}
              Buy MGToken{" "}
            </Text>
            <Text fontSize="sm" color={"gray.500"}>
              {" "}
              You need to exchange your tokens to MGToken so you will be able to
              place your bet{" "}
            </Text>
          </Flex>
        </Flex>
 {/* mother flex for MGtoken end*/}

  {/* mother flex for Choose start */}
  <Flex w="100%" gap="1rem" pl="1rem">
  <Flex
    w="10%"
    p="1rem"
    bgColor="gray.200"
    borderRadius={"50%"}
    justifyContent="center"
    alignItems={"center"}
  >
    {" "}
    <Icon as={BsArrowRepeat} fontSize="xl" color="black" />{" "}
  </Flex>

  <Flex w="90%" direction={"column"}>
    <Text fontSize="md" fontWeight="bold" color={"black"}> Choose Your Side
    </Text>
    <Text fontSize="sm" color={"gray.500"}>Make a pic between Tails and Heads. Which one would be a lucky guess for you?
    </Text>
  </Flex>
</Flex>
{/* mother flex for Choose end*/}



  {/* mother flex for Pick start */}
  <Flex w="100%" gap="1rem" pl="1rem">
  <Flex
    w="10%"
    p="1rem"
    bgColor="gray.200"
    borderRadius={"50%"}
    justifyContent="center"
    alignItems={"center"}
  >
    {" "}
    <Icon as={BsArrowRepeat} fontSize="xl" color="black" />{" "}
  </Flex>

  <Flex w="90%" direction={"column"}>
    <Text fontSize="md" fontWeight="bold" color={"black"}> Pick the value of your bet
    </Text>
    <Text fontSize="sm" color={"gray.500"}>It only depends on you how much you're willing to bet on your luck
    </Text>
  </Flex>
</Flex>
{/* mother flex for Pick end*/}





  {/* mother flex for Enjoy start */}
  <Flex w="100%" gap="1rem" pl="1rem">
  <Flex
    w="10%"
    p="1rem"
    bgColor="gray.200"
    borderRadius={"50%"}
    justifyContent="center"
    alignItems={"center"}
  >
    {" "}
    <Icon as={BsEmojiSmile} fontSize="xl" color="black" />{" "}
  </Flex>

  <Flex w="90%" direction={"column"} >
    <Text fontSize="md" fontWeight="bold" color={"black"}> Enjoy
    </Text>
   
  </Flex>
</Flex>
{/* mother flex for Enjoy end*/}

 </Flex>
      {/* mother flex for left potion end */}

      {/* mother flex for Right portion start */}

      <Flex w="50%" justifyContent="center">
        <Flex> Right</Flex>{" "}
      </Flex>
      {/* mother flex for Right portion end */}
    </Flex>
    /* mother flex for all end */
  );
}
