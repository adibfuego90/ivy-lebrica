import currencyConverter from "@/utils/currencyConverter";
import hashtagMaker from "@/utils/hashtagMaker";
import Image from "next/image";
import { FC } from "react";
import Button from "./Button";

interface PackageItemProps {
  id: string;
  image: string;
  title: string;
  price: number;
  tags: string;
  description: string;
  specialists: any[];
}

const PackageItem: FC<PackageItemProps> = ({
  id,
  image,
  title,
  price,
  tags,
  description,
  specialists,
}) => {
  return (
    <div className="w-full lg:w-[30rem] overflow-hidden shadow-md rounded-lg">
      <div className="w-full h-[20rem] overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={320}
          height={180}
          priority
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5 space-y-2">
        <h3 className="text-2xl font-semibold truncate">{title}</h3>
        <p>
          <strong>Specialists:</strong>{" "}
          {specialists.map((sp, i, arr) => (
            <span key={sp.id} className="text-pink-500">
              {sp.name}
              {i === arr.length - 1 ? "" : ", "}
            </span>
          ))}
        </p>
        <p className="text-gray-500">{description.substring(0, 100)}...</p>
        <p className="text-cyan-500">{hashtagMaker(tags)}</p>

        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">{currencyConverter(price)}</p>
          <Button
            href={`/packages/${id}`}
            placeholder="View Details"
            variant="organic"
            size="default"
          />
        </div>
      </div>
    </div>
  );
};

export default PackageItem;
