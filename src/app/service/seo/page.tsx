import FullContactPage from "@/app/contact/components/FullContactPage";
import ExplanationSEO from "./components/ExplanationSEO";

export default function page() {
  return (
    <section className="mt-24">
      <ExplanationSEO />
      <FullContactPage />
    </section>
  );
}
