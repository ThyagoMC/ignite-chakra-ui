import { Box, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" justify="center" overflowX={"hidden"}>
      <Flex flexDir={"column"} w={"min(100%, 1440px)"}>
        <Flex w="100%" bg="gray.50">
          <Image src="/logo.svg" m={"2rem auto"} alt="logo" />
        </Flex>
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
          <Flex color={"gray.600"} fontWeight="700" paddingTop="25px" w="100%" m="0 auto" justify={"space-between"}>
            <Stack w="145px">
              <Image src="/cocktail.svg" alt="cocktail" h="85px" />
              <Text w="100%" textAlign={"center"}>
                vida noturna
              </Text>
            </Stack>
            <Stack w="145px">
              <Image src="/surf.svg" alt="surf" h="85px" />
              <Text w="100%" textAlign={"center"}>
                praia
              </Text>
            </Stack>
            <Stack w="145px">
              <Image src="/building.svg" alt="building" h="85px" />
              <Text w="100%" textAlign={"center"}>
                moderno
              </Text>
            </Stack>
            <Stack w="145px">
              <Image src="/museum.svg" alt="museum" h="85px" />
              <Text w="100%" textAlign={"center"}>
                clássico
              </Text>
            </Stack>
            <Stack w="145px">
              <Image src="/earth.svg" alt="earth" h="85px" />
              <Text w="100%" textAlign={"center"}>
                e mais...
              </Text>
            </Stack>
          </Flex>
          <Flex borderBottom={"2px solid"} borderRadius="full" borderColor="gray.600" w={"6%"} />
          <Text color={"gray.600"} textAlign="center" fontWeight={700} fontSize={24}>
            Vamos nessa?
            <br />
            Então escolha seu continente
          </Text>
          <Swiper pagination={true} navigation={true} modules={[Navigation, Pagination]} className="mySwiper">
            <SwiperSlide>
              <Image src="/europe.jpg" alt="europe" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/asia.jpg" alt="asia" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/oceania.jpg" alt="oceania" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/north-america.jpg" alt="north america" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/south-america.jpg" alt="south america" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/africa.jpg" alt="africa" />
            </SwiperSlide>
          </Swiper>
        </Stack>
      </Flex>
    </Flex>
  );
}
