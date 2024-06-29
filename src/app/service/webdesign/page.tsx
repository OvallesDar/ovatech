import FullContactPage from "@/app/contact/components/FullContactPage";
import ExplanationWeb from "./components/ExplanationWeb";

export default function page() {
  return (
    <section className="mt-24">
      <ExplanationWeb />
      <FullContactPage />
    </section>
  );
}
