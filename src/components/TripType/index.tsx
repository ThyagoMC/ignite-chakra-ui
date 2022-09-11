import { Image, LayoutProps, Stack, StackDirection, Text, useMediaQuery } from "@chakra-ui/react";

type TripTypeProps = {
  src: string;
  alt: string;
  text: string;
};

const TripType = ({ src, alt, text }: TripTypeProps) => {
  const [isMin48em] = useMediaQuery("(min-width: 48em)");

  return (
    <Stack
      w={{ base: "50%", md: "145px" }}
      justify="center"
      alignItems={"center"}
      minHeight="80px"
      direction={isMin48em ? "column" : "row"}
    >
      <Image display={{ base: "none", md: "flex" }} src={src} alt={alt} h="85px" />
      <Image display={{ base: "flex", md: "none" }} src={"./circle.svg"} alt={"dot"} h="15px" />
      <Text w={{ base: "auto", md: "100%" }} textAlign={"center"}>
        {text}
      </Text>
    </Stack>
  );
};

export default TripType;
