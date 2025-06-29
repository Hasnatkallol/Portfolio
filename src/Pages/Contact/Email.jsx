import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Email = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [statusMsg, setStatusMsg] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setStatusMsg(null);

    emailjs
      .sendForm(
        "service_pcqi5vo",
        "template_tf9iikp",
        form.current,
        "WnuEXm7xf77Rsb7Dn"
      )
      .then(
        () => {
          setStatusMsg({
            type: "success",
            text: "✅ Message sent successfully!",
          });
          form.current.reset();
          setSending(false);
        },
        () => {
          setStatusMsg({
            type: "error",
            text: "❌ Message failed. Please try again.",
          });
          setSending(false);
        }
      );
  };

  return (
    <div className="py-10 px-4 sm:px-6" id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white p-5 sm:p-8 rounded-2xl shadow-lg grid gap-4 text-left w-full"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="p-4 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#263040] transition"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="p-4 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#263040] transition"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="p-4 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#263040] transition"
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            className="p-4 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#263040] transition resize-none"
          ></textarea>

          <button
            type="submit"
            disabled={sending}
            className={`w-full py-3 rounded-full text-white font-semibold transition ${
              sending
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#263040] hover:bg-[#1b2432]"
            }`}
          >
            {sending ? "Sending..." : "Send Message"}
          </button>

          {statusMsg && (
            <p
              className={`text-center mt-4 font-medium ${
                statusMsg.type === "success" ? "text-green-600" : "text-red-600"
              }`}
              role="alert"
            >
              {statusMsg.text}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Email;
