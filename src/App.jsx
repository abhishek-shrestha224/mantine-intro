import {
  Loader,
  MantineProvider,
  Paper,
  Text,
  createTheme,
} from "@mantine/core";
import React from "react";
import Demo from "./Components/Demo";

const myTheme = createTheme({
  fontFamily: "Open Sans",
  forceColorScheme: "dark",
});
export default function App() {
  return (
    <MantineProvider
      theme={myTheme}
      // forceColorScheme="dark"
      // cssVariablesSelector=".myCssSelector"
    >
      <Paper>
        <Text>Hello</Text>
        <Text>World</Text>
      </Paper>
      <Loader />

      <Demo />
    </MantineProvider>
  );
}
