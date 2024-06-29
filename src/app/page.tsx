
import Header from "@/app/components/Header";
import Services from "./components/Services";
import AboutTeam from "./components/AboutTeam";
import Clients from "./components/Clients";

export default function Home() {
  return (
    <>
      <Header />
      <AboutTeam />
      <Services />
      <Clients />
    </>
  );
}
