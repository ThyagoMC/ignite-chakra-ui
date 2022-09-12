import { Box, Flex, HStack, Image, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Layout from "../components/Layout";
import TripType from "../components/TripType";
import SwiperContinent from "../components/SwiperContinent";
import SwiperContent from "../components/SwiperContinent";

export default function Home() {
  const [isMin48em] = useMediaQuery("(min-width: 48em)");

  return (
    <Layout>
      <HStack
        w="100%"
        bgImage="url('/background.png')"
        minH="200px"
        p={{ base: "0 25px", md: "0 50px", lg: "0 100px" }}
      >
        <Stack w={{ md: "50%", base: "100%" }}>
          <Text fontSize={"2xl"} fontWeight="500">
            5 Continentes, <br /> infinitas possibilidades.
          </Text>
          <Text maxW={"520px"} fontSize="md">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.{" "}
          </Text>
        </Stack>
        <Flex position="relative" w="50%" h="100%" display={{ base: "none", md: "block" }}>
          <Image src="/airplane.svg" w="80" position={"absolute"} right={0} bottom="-8" alt="airplane" />
        </Flex>
      </HStack>
      <Stack
        w="100%"
        height="auto"
        bg="gray.50"
        p={{ base: "32px 20px", sm: "32px 50px", md: "32px 100px" }}
        flexDir={"column"}
        alignItems="center"
        spacing="20"
      >
        <Flex
          color={"gray.600"}
          fontWeight="700"
          paddingTop="25px"
          w="100%"
          m="0 auto"
          justify={{ base: "center", md: "space-between" }}
          flexWrap={isMin48em ? "nowrap" : "wrap"}
        >
          <TripType src="/cocktail.svg" alt="cocktail" text="vida noturna" />
          <TripType src="/surf.svg" alt="surf" text="praia" />
          <TripType src="/building.svg" alt="building" text="moderno" />
          <TripType src="/museum.svg" alt="museum" text="clássico" />
          <TripType src="/earth.svg" alt="earth" text="e mais..." />
        </Flex>
        <Flex borderBottom={"2px solid"} borderRadius="full" borderColor="gray.600" w={"6%"} />
        <Text color={"gray.600"} textAlign="center" fontWeight={700} fontSize={24}>
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Text>
        <Swiper pagination={true} navigation={true} modules={[Navigation, Pagination]} className="mySwiper">
          <SwiperSlide>
            <SwiperContent img="/europe.jpg" alt="europe" text="Europa" />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperContent img="/asia.jpg" alt="asia" text="Asia" />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperContent img="/oceania.jpg" alt="oceania" text="Oceania" />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperContent img="/north-america.jpg" alt="north-america" text="América do Norte" />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperContent img="/south-america.jpg" alt="south-america" text="América do Sul" />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperContent img="/africa.jpg" alt="africa" text="África" />
          </SwiperSlide>
        </Swiper>
      </Stack>
    </Layout>
  );
}
