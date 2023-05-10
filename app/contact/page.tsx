import Button from "@/components/Button";

const ContactPage = () => {
  return (
    <div>
      <h3 className="text-5xl mx-auto pt-10 text-center text-emerald-700">
        Contact
      </h3>
      <p className="text-center text-emerald-800">
        Get in touch with one of our team today
      </p>

      <form className="flex flex-row gap-10 px-20 mt-12">
        <div className="left w-1/2">
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 mb-2">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="Write your first name"
              required
              className="firstName w-full p-4 outline-none text-gray-700  border border-gray-300 focus:border-gray-600 duration-300"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700 mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Write your last name"
              required
              className="lastName w-full p-4 outline-none text-gray-700  border border-gray-300 focus:border-gray-600 duration-300"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Write your phone number"
              required
              className="phone w-full p-4 outline-none text-gray-700  border border-gray-300 focus:border-gray-600 duration-300"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Write your email"
              required
              className="email w-full p-4 outline-none text-gray-700  border border-gray-300 focus:border-gray-600 duration-300"
            />
          </div>
        </div>

        <div className="right w-1/2">
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Write your message"
              required
              className="message w-full p-4 outline-none text-gray-700  border border-gray-300 focus:border-gray-600 duration-300 resize-none h-80"
            />
          </div>

          <Button
            href={`/packages/{id}`}
            placeholder="Submit"
            variant="organic"
          ></Button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
