import Image from "next/image";
import PagesContainer from "./PagesContainer";
import type { AppProps } from "next/app";
import WelcomeScreen from "./screens/Components/WelcomeScreen";

export default function Home() {
  return (
    <main>
      <WelcomeScreen />
      <PagesContainer />
    </main>
  );
}
