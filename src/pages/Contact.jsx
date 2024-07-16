import ContactForm from "../composants/contactPage/contactForm";
import HeroContact from "../composants/contactPage/heroContact";

export default function Contact() {
  return (
    <div className="bg-[#f6f6f6] pb-4">
      <HeroContact />
      <ContactForm />
    </div>
  );
}
