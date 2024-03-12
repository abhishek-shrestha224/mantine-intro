import { Button, MantineProvider, Paper, Text } from "@mantine/core";
import React from "react";

const mtTheme = {};
export default function App() {
  return (
    <MantineProvider>
      <Paper>
        <Text>Hello</Text>
        <Text>World</Text>
        <Button>Click Me</Button>
      </Paper>
    </MantineProvider>
  );
}
