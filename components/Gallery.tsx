import Image from "next/image";

const image1 =
  "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const image2 =
  "https://images.pexels.com/photos/3993330/pexels-photo-3993330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const image3 =
  "https://images.pexels.com/photos/6560277/pexels-photo-6560277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const image4 =
  "https://images.pexels.com/photos/5240341/pexels-photo-5240341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const image5 =
  "https://images.pexels.com/photos/3993324/pexels-photo-3993324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const image6 =
  "https://images.pexels.com/photos/3985344/pexels-photo-3985344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const image7 =
  "https://images.pexels.com/photos/3865827/pexels-photo-3865827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const image8 =
  "https://images.pexels.com/photos/5069407/pexels-photo-5069407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const image9 =
  "https://images.pexels.com/photos/6954962/pexels-photo-6954962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const image10 =
  "https://images.pexels.com/photos/7984818/pexels-photo-7984818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const Gallery = () => {
  return (
    <div className="my-20 wrapper">
      <div className="title text-center text-6xl font-semibold">Gallery</div>
      <div className="gallery m-16">
        <div className="image">
          <Image
            priority
            unoptimized
            src={image1}
            alt="image1"
            height={50}
            width={50}
            className="imgSize"
          />
        </div>
        <div className="image">
          <Image
            priority
            unoptimized
            src={image2}
            alt="image2"
            height={50}
            width={50}
            className="imgSize"
          />
        </div>
        <div className="image">
          <Image
            priority
            unoptimized
            src={image3}
            alt="image3"
            height={50}
            width={50}
            className="imgSize rounded-[100%]"
          />
        </div>
        <div className="image">
          <Image
            priority
            unoptimized
            src={image4}
            alt="image4"
            height={50}
            width={50}
            className="imgSize rounded-[100%]"
          />
        </div>
        <div className="image">
          <Image
            priority
            unoptimized
            src={image5}
            alt="image5"
            height={50}
            width={50}
            className="imgSize"
          />
        </div>
        <div className="image">
          <Image
            priority
            unoptimized
            src={image6}
            alt="image6"
            height={50}
            width={50}
            className="imgSize"
          />
        </div>
        <div className="image">
          <Image
            priority
            unoptimized
            src={image7}
            alt="image7"
            height={50}
            width={50}
            className="imgSize rounded-[100%]"
          />
        </div>
        <div className="image">
          <Image
            priority
            unoptimized
            src={image8}
            alt="image8"
            height={50}
            width={50}
            className="imgSize"
          />
        </div>
        <div className="image">
          <Image
            priority
            unoptimized
            src={image9}
            alt="image9"
            height={50}
            width={50}
            className="imgSize h-[50%] rounded-[100%]"
          />
        </div>
        <div className="image">
          <Image
            priority
            unoptimized
            src={image10}
            alt="image10"
            height={50}
            width={50}
            className="imgSize"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
