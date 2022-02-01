import { NextPage } from "next";
import ContactForm from "../components/contact/contact-form";

interface IContactProps {}

const Contact: NextPage<IContactProps> = (props) => {
  return <ContactForm />;
};

export default Contact;
