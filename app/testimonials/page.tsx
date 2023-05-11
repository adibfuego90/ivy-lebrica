import Image from "next/image";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
const cardImg1 =
  "https://res.cloudinary.com/doo2ywmrb/image/upload/v1683815007/lvy%20Lebrica/pexels-photo-15211477_v7afhv.jpg";
const cardImg2 =
  "https://res.cloudinary.com/doo2ywmrb/image/upload/v1683815016/lvy%20Lebrica/pexels-photo-762020_soaevo.webp";
const cardImg3 =
  "https://res.cloudinary.com/doo2ywmrb/image/upload/v1683815808/lvy%20Lebrica/pexels-photo-5480696_ftoycm.webp";
const cardImg4 =
  "https://res.cloudinary.com/doo2ywmrb/image/upload/v1683815816/lvy%20Lebrica/pexels-photo-3387577_fckij1.webp";

const TestimonialsPage = () => {
  return (
    <div className="wrapper my-20 space-y-5">
      <p className="uppercase text-gray-400 text-center">Testimonials</p>
      <h1 className="text-3xl lg:text-4xl font-semibold text-center text-gray-500">
        Our Commitment to Exceptional Beauty Services.
      </h1>
      <p className="text-center w-4/6 mx-auto">
        We place huge value on strong relationship and have seen the benefit
        they bring to our business. Customer feedback is vital in helpiing us to
        get it right
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-10 lg:py-16">
        <div className="bg-red-400/70 rounded-lg flex flex-col items-center gap-5 p-8 text-center text-gray-800 hover:bg-red-500/70 duration-300">
          <Image
            priority
            unoptimized
            src={cardImg2}
            alt={"Background img"}
            height={50}
            width={50}
            className="object-cover object-center h-20 w-20 rounded-full"
          />
          <p>
            <span className="text-2xl inline-block pe-2">
              <ImQuotesLeft />
            </span>
            The staff was incredibly welcoming and made me feel comfortable from
            the moment I walked in. My stylist took the time to understand my
            hair and skin type before recommending treatments, and the results
            were amazing.
            <span className="text-2xl inline-block ps-2">
              <ImQuotesRight />
            </span>
          </p>
          <p className="text-[17px] text-gray-800 font-semibold">
            Nat Reynolds <br />
            <span className="text-sm text-gray-700/70 ">Chief Accountant</span>
          </p>
        </div>
        <div className="bg-yellow-500/80 rounded-lg flex flex-col items-center gap-5 p-8 text-center text-gray-800 hover:bg-yellow-600/90 duration-300">
          <Image
            priority
            unoptimized
            src={cardImg1}
            alt={"Background img"}
            height={50}
            width={50}
            className="object-cover object-center h-20 w-20 rounded-full"
          />
          <p>
            <span className="text-2xl inline-block pe-2">
              <ImQuotesLeft />
            </span>
            I'm glad to hear that you had a positive experience at the salon!
            It's always great to receive personalized recommendations that are
            tailored to your specific needs. It sounds like the staff went above
            and beyond to make sure you were comfortable and happy with the
            results.
            <span className="text-2xl inline-block ps-2">
              <ImQuotesRight />
            </span>
          </p>
          <p className="text-[17px] text-gray-800 font-semibold">
            Nat Reynolds <br />
            <span className="text-sm text-gray-700/70 ">Chief Accountant</span>
          </p>
        </div>
        <div className="bg-lime-500/80 rounded-lg flex flex-col items-center gap-5 p-8 text-center text-gray-800 hover:bg-lime-600/70 duration-300">
          <Image
            priority
            unoptimized
            src={cardImg3}
            alt={"Background img"}
            height={50}
            width={50}
            className="object-cover object-center h-20 w-20 rounded-full"
          />
          <p>
            <span className="text-2xl inline-block pe-2">
              <ImQuotesLeft />
            </span>
            It sounds like you had a great experience at the salon! It's always
            important to have a stylist who takes the time to understand your
            individual needs and make personalized recommendations based on
            them. I'm glad to hear that the staff was welcoming and made you
            feel comfortable from the moment you arrived.
            <span className="text-2xl inline-block ps-2">
              <ImQuotesRight />
            </span>
          </p>
          <p className="text-[17px] text-gray-800 font-semibold">
            Nat Reynolds <br />
            <span className="text-sm text-gray-700/70 ">Chief Accountant</span>
          </p>
        </div>
        <div className="bg-sky-500/80 rounded-lg flex flex-col items-center gap-5 p-8 text-center text-gray-800 hover:bg-sky-600/80 duration-300">
          <Image
            priority
            unoptimized
            src={cardImg4}
            alt={"Background img"}
            height={50}
            width={50}
            className="object-cover object-center h-20 w-20 rounded-full"
          />
          <p>
            <span className="text-2xl inline-block pe-2">
              <ImQuotesLeft />
            </span>
            The hotel staff went above and beyond to make my stay comfortable
            and enjoyable. From the moment I checked in, they were welcoming and
            accommodating to all my requests. The room was spacious and
            well-appointed, with all the amenities I needed.
            <span className="text-2xl inline-block ps-2">
              <ImQuotesRight />
            </span>
          </p>
          <p className="text-[17px] text-gray-800 font-semibold">
            Nat Reynolds <br />
            <span className="text-sm text-gray-700/70 ">Chief Accountant</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
