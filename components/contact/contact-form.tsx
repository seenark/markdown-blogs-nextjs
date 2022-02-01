import { FormEvent, FormEventHandler, useEffect, useState } from "react";
import classes from "./contact-form.module.css";
import axios from "axios";
import Notification from "../ui/notification";

interface IContactFormProps {}

async function sendMessageData(email: string, name: string, message: string) {
  const url = "/api/contact";
  const body = {
    email,
    name,
    message,
  };
  const data = await axios.post<{ message: string }>(url, body);
  if (data.status !== 201) {
    throw new Error("something wrong");
  }
  return data.data;
}

const ContactForm: React.FC<IContactFormProps> = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState<
    "pending" | "success" | "error" | undefined
  >();
  const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        if (requestStatus === 'success' || requestStatus === "error") {
            const to = setTimeout(() => {
                setRequestStatus(undefined)
            }, 3000);

            return () => clearTimeout(to)
        }
        
    }, [requestStatus])


  async function sendMessageHandler(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
      setRequestStatus("pending");
    try {
      await sendMessageData(email, name, message);
      setRequestStatus("success");
    } catch (error:any) {
        setErrorMessage(error.message)
      setRequestStatus("error");
    }
  }

  let notification: {status: "pending" | "success" | "error" | undefined; title:string;message:string} | undefined

  if (requestStatus === 'pending') {
      notification = {
          status: 'pending',
          title: "Sending message...",
          message: "Your message is on it's way"
      }
  }
  
  if (requestStatus === "success") {
      notification = {
          status: "success",
          title: "Success!",
          message: "Message send successfully"
      }
  }

  if (requestStatus === "error") {
      notification = {
          status: "error",
          title: "Error",
          message: errorMessage
      }
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        </div>

        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows={5}
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button type="submit">Send message</button>
        </div>
      </form>
      {
          notification && <Notification title={notification.title} message={notification.message} status={notification.status} />
      }
    </section>
  );
};

export default ContactForm;
