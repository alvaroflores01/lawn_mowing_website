import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <div className="container mx-auto sm:flex sm:p-10 justify-center">
      <div className="sm:w-1/2 p-4 mx-auto ">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;
