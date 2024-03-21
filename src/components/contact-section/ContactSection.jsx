import React from "react";
import SectionTitle from "../section/SectionTitle";
import SectionParagraf from "../section/SectionParagraf";
import ContactItem from "./ContactItem";
import Field from "./Field";
import Button from "../button/Button";

function ContactSection() {
  return (
    <section className="pt-28 container mx-auto px-10">
      <div className="rounded-lg bg-dust flex flex-wrap">
        <div className="py-14 px-[73px] border-r border-dust-200 w-6/12">
          <SectionTitle left>Contact</SectionTitle>
          <SectionParagraf left>Beberapa cara me nghubungi saya.</SectionParagraf>

          <ContactItem label="Mail" value="devapande66@gmail.com" icon="./logo/mail.svg" className="mt-11 mb-9" />
          <ContactItem label="Phone" value="081234567890" icon="./logo/phone.svg" className="mb-7" />
          <ContactItem label="Twitter" value="@k1llopps" icon="./logo/twitter.svg" />
        </div>

        <div className="w-6/12">
          <form className="p-16">
            <div className="flex -mx-4 flex-wrap">
              <div className="w-6/12 px-4">
                <Field label="Name" name="name" type="text" />
              </div>
              <div className="w-6/12 px-4">
                <Field label="Email" name="email" type="text" />
              </div>
            </div>

            <Field label="Subject" name="subject" type="text" />

            <Field label="Message" name="message" type="textarea" className="h-40" />

            <div className="text-right -mt-4">
              <Button variant="black">Send</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
