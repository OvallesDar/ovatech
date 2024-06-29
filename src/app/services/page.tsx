
import FullContactPage from "../contact/components/FullContactPage";
import Header from "./components/Header"
import Services from "./components/Services";

export default function page() {
  return (
    <section className="mt-20">
      <Header />
      <Services />
      <FullContactPage />
    </section>
  );
}
