import { Flex, Image, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const hasGoBack = router.pathname != "/";

  const onClickGoBack = () => {
    router.push("/");
  };

  return (
    <Flex w="100vw" h="100vh" justify="center" overflowX={"hidden"}>
      <Flex flexDir={"column"} w={"min(100%, 1440px)"}>
        <Flex w="100%" bg="gray.50" pos="relative">
          {hasGoBack && (
            <Image
              src="/go-back.svg"
              position="absolute"
              alt="go back"
              top="38px"
              left="38px"
              onClick={onClickGoBack}
              cursor={"pointer"}
            />
          )}
          <Image src="/logo.svg" m={"2rem auto"} alt="logo" />
        </Flex>
        {children}
      </Flex>
    </Flex>
  );
};
export default Layout;
