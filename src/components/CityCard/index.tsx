import { Avatar, Box, Flex, Image, Stack, Text, WrapItem } from "@chakra-ui/react";

type CityCardProps = {
  cityImg: string;
  cityName: string;
  countryFlag: string;
  countryName: string;
};

const CityCard = ({ cityImg, cityName, countryFlag, countryName }: CityCardProps) => {
  return (
    <WrapItem>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={cityImg} alt={cityName} />
        <Flex alignItems={"center"} justifyContent={"space-between"} padding={"10px 10%"}>
          <Stack>
            <Text fontSize={30}>{cityName}</Text>
            <Text>{countryName}</Text>
          </Stack>
          <Avatar size="sm" name={countryName} src={countryFlag} />
        </Flex>
      </Box>
    </WrapItem>
  );
};
export default CityCard;
