import {
  Box,
  Button,
  Flex,
  Input,
  Link,
  Text,
  Tooltip,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { FormEvent } from "react";

type IntroProps = {
  onSubmit: (event: FormEvent) => Promise<void>;
};

function Intro({ onSubmit }: IntroProps) {
  const borderColor = useColorModeValue("gray.400", "gray.900");
  const backgroundColor = useColorModeValue("white", "gray.700");
  const warningBackgroundColor = useColorModeValue("blue.50", "whiteAlpha.50");

  return (
    <Flex
      direction={{ md: "column", base: "column-reverse" }}
      width="100%"
      maxWidth={"768px"}
      margin="auto"
      mt={10}
      backgroundColor={backgroundColor}
      borderRadius={10}
      px={{ md: 5, base: 2 }}
      py={8}
      border="1px solid"
      borderColor={borderColor}
    >
      <Text fontWeight="bold" fontSize="sm" textAlign="center">
        Click on the Text button to begin your adventure.
      </Text>

      <br />

      <Text>
        Omegle, is a place where you get to meet pedos and stuff but dont
        because i dont want a sue speed run pls!! (A.H.) 
        if you want to sue me, email me at 5neo@tuta.io and i will ignore it
      </Text>

      <br />

      <Text>
        Chats attempts to be anonymous by searching for the first room
        available, if it does not exist one will be created for you. The next
        user will automagically be joined in a FIFO style (First in, First out).
        To prevent predictions on who will be joining theres a random delay
        applied to each user. Your messages are sent and received through
        websockets and only the rooms ids are stored in database for no longer
        than one day.
      </Text>

      <br />

      <Box
        margin="0 auto"
        p={4}
        borderRadius={10}
        border="1px solid"
        backgroundColor={warningBackgroundColor}
        borderColor={borderColor}
      >
        <Text textAlign="center">
          Based on OmeDEV{" "}
          <Link
            href="https://github.com/mateusabelli/omedev"
            rel="noreferrer"
            target="_blank"
          >
            Source Code!
          </Link>
        </Text>
      </Box>

      <br />

      <Flex justifyContent={"space-between"} gap={5}>
        <Box width="100%" display={{ md: "unset", base: "none" }}>
          <Text fontSize={"lg"} mb={2} textAlign={"center"}>
            What do you wanna talk about?
          </Text>

          <Tooltip label="hell nah...">
            <Input
              disabled
              placeholder="Add your interests (Optional)"
              height="60px"
            />
          </Tooltip>
        </Box>

        <Box width="100%">
          <Text fontSize={"lg"} mb={2} textAlign={"center"}>
            Start chatting:
          </Text>
          <Flex justifyContent={"center"} gap={2}>
            <Button
              height={"60px"}
              width={"150px"}
              border={"1px solid"}
              onClick={onSubmit}
              backgroundColor={"blue.500"}
              color="white"
            >
              Text
            </Button>

            <Text mt={4} fontWeight="bold">
              or
            </Text>

            <Flex direction={"column"}>
              <Tooltip label="do you think i want to be sued??">
                <Button
                  height={"60px"}
                  width={"150px"}
                  border={"1px solid"}
                  disabled
                >
                  Video
                </Button>
              </Tooltip>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              >
                <Button p={0} width="150px" fontSize="sm" variant={"ghost"}>
                  Unmoderated section
                </Button>
              </a>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Intro;
