import FullContactPage from "@/app/contact/components/FullContactPage";
import ExplanationMarketing from "./components/ExplanationMarketing";


export default function page() {
  return (
    <section className="mt-24">
      <ExplanationMarketing />
      <FullContactPage />
    </section>
  )
}