import { Box, Button, Grid, Text, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import { FormEvent, useContext, useState } from "react";
import Chat from "../components/Chat";
import Header from "../components/Header";
import Intro from "../components/Intro";
import { PusherContext } from "../context/pusherContext";

export default function Home() {
  const backgroundColor = useColorModeValue("orange.50", "gray.800");
  const [redirectToChat, setRedirectToChat] = useState(false);

  const { setStartPusher } = useContext(PusherContext);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setStartPusher(true);

    setRedirectToChat(true);
  }

  return (
    <>
      <Head>
        <title>Omegle: Talk to strangers!</title>
        <link rel="icon" href="/icon.png" type="image/png" />
        
      </Head>
      <Grid
        templateRows="max-content 1fr"
        minHeight="100vh"
        backgroundColor={backgroundColor}
      >
        <Header />
        {redirectToChat ? <Chat /> : <Intro onSubmit={onSubmit} />}
      </Grid>
    </>
  );
}
