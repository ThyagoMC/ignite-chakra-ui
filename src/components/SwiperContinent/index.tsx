import { Flex, Image, Text } from "@chakra-ui/react";
import { SwiperSlide } from "swiper/react";

const textShadow = "-2px 0 2px #1F2029, 0 2px  2px #1F2029, 2px 0  2px #1F2029, 0 -2px  2px #1F2029;";

type SwiperContinentProps = {
  img: string;
  alt: string;
  text: string;
};

const SwiperContent = ({ img, alt, text }: SwiperContinentProps) => {
  return (
    <Flex justify={"center"} alignItems="center">
      <Image src={img} alt={alt} />
      <Flex direction={"column"} position={"absolute"} alignItems="center">
        <Text color="white" fontSize={"5em"} textShadow={textShadow} fontWeight={"600"}>
          {text}
        </Text>
      </Flex>
    </Flex>
  );
};
export default SwiperContent;
