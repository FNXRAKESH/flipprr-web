import React, { useEffect, useState } from 'react';
import { Button, Input, Textarea } from "@nextui-org/react";
import { useForm, ValidationError } from "@formspree/react";
 
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const[submitted, setSubmitted] = useState(false);
  const [state, handleSubmit] = useForm("mvojwrrw");
  // if (state.succeeded) {
  //   setName('');
  //   setEmail('');
  //   setDescription('');
  // }
  useEffect(() => {
    if (state.succeeded) {
      setName("");
      setEmail("");
      setDescription("");
      setSubmitted(true);
    }
  },[state])
    return (
      <div id="contact" className="flex flex-wrap lg:flex-nowrap pt-12">
        <div className="md:flex-1 my-10 md:my-0 text-center">
          <h1 className="text-4xl text-amber-500">Get in touch</h1>
          <h2 className="text-lg py-5">
            Exploring flipprr ahead of the crowd? Have an innovative concept to
            enhance flipprr? Interested in collaborating with us to create a
            more pleasant banking experience? Whatever you bring to the table,
            we're open for discussions
          </h2>
          <h2 className="text-lg">
            You can write to us at our email address:{" "}
            <a href="mailto:krishna@flipprr.com" className="text-amber-500">
              krishna@flipprr.com
            </a>
          </h2>
        </div>
        {/* <form className="flex-1" onSubmit={handleSubmit}>
          <Input
            type="text"
            variant="bordered"
            color="warning"
            label="Name"
            name="Name"
            className="mb-5"
            isRequired
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <Input
            type="email"
            variant="bordered"
            color="warning"
            label="Email"
            name="Email"
            className="mb-5"
            isRequired
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Textarea
            label="Description"
            name="Description"
            labelPlacement="inside"
            variant="bordered"
            color="warning"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <div className="flex items-center">
            <Button
              variant="bordered"
              color="warning"
              className="mt-5"
              disabled={state.submitting}
              type="submit"
            >
              Submit
            </Button>
            {submitted ? (
              <p className="text-green-500 ps-5">
                Thank you for your submission!
              </p>
            ) : null}
          </div>
        </form> */}
      </div>
    );
}

export default Contact;