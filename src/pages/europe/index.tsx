import { Avatar, Box, Flex, HStack, Image, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import CityCard from "../../components/CityCard";
import Layout from "../../components/Layout";

const textShadow = "-2px 0 2px #1F2029, 0 2px  2px #1F2029, 2px 0  2px #1F2029, 0 -2px  2px #1F2029;";

const Europe = () => {
  return (
    <Layout>
      <Stack>
        <Flex
          position={"relative"}
          w={"100%"}
          h={"24em"}
          backgroundImage="/london.jpg"
          backgroundPosition={"center"}
          backgroundSize="100%"
          backgroundRepeat={"no-repeat"}
        >
          <Text
            position={"absolute"}
            bottom={"1em"}
            left={{ base: "5%", md: "1em" }}
            fontSize={"4em"}
            textShadow={textShadow}
          >
            Europa
          </Text>
        </Flex>
        <Flex wrap={"wrap"} justifyContent="space-evenly" paddingTop="40px">
          <Text
            w={{ base: "calc(100% - 2em)", md: "calc(50% - 1.5em)" }}
            paddingLeft={{ base: 0, md: "3em" }}
            textAlign="justify"
            fontSize={"1.25em"}
          >
            A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia,
            a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar
            Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
          <Flex w={{ base: "calc(100% - 2em)", md: "calc(50% - 1em)" }} justifyContent="space-evenly">
            <Stack justifyContent={"center"}>
              <Text textAlign={"center"} color={"yellow.400"} fontSize="2em" fontWeight={"600"}>
                50
              </Text>
              <Text>países</Text>
            </Stack>
            <Stack justifyContent={"center"}>
              <Text textAlign={"center"} color={"yellow.400"} fontSize="2em" fontWeight={"600"}>
                60
              </Text>
              <Text>línguas</Text>
            </Stack>
            <Stack justifyContent={"center"}>
              <Text textAlign={"center"} color={"yellow.400"} fontSize="2em" fontWeight={"600"}>
                27
              </Text>
              <Text>cidades + 100</Text>
            </Stack>
          </Flex>
        </Flex>
        <Stack padding={"40px 72px"}>
          <Text fontSize="3em">Cidades +100</Text>
          <Wrap spacing={8}>
            <CityCard
              cityImg="/london2.jpg"
              cityName="Londres"
              countryName="Reino Unido"
              countryFlag="/flags/england.svg"
            />
            <CityCard
              cityImg="/london2.jpg"
              cityName="Londres"
              countryName="Reino Unido"
              countryFlag="/flags/england.svg"
            />
            <CityCard
              cityImg="/london2.jpg"
              cityName="Londres"
              countryName="Reino Unido"
              countryFlag="/flags/england.svg"
            />
            <CityCard
              cityImg="/london2.jpg"
              cityName="Londres"
              countryName="Reino Unido"
              countryFlag="/flags/england.svg"
            />
            <CityCard
              cityImg="/london2.jpg"
              cityName="Londres"
              countryName="Reino Unido"
              countryFlag="/flags/england.svg"
            />
          </Wrap>
        </Stack>
      </Stack>
    </Layout>
  );
};
export default Europe;
