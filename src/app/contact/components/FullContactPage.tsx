
import ButtonsContact from "./ButtonsContact";
import FormContact from "./FormContact";

export default function FullContactPage() {
  return (
    <section className="container flex flex-col justify-center gap-5">
      <div className="flex flex-col lg:flex-row justify-center gap-10 items-center my-5">
        <FormContact />
        <ButtonsContact />
      </div>
    </section>
  );
}
