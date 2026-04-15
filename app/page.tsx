import { Stack } from "@mantine/core";
import Flamtun from "./Flamtun/flamtun";
import Footer from "./Footer/footer";


export default function Page() {
  return (
    <Stack w={"100%"} h={"100%"}  bg={"gray.2"}>
      <Flamtun/>
      <Footer/>
    </Stack>
    
  );
}
