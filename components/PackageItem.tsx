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
    <div>
      <div>
        <Image src={image} alt={title} width={320} height={180} priority />
      </div>

      <div>
        <h3>{title}</h3>
        <p>
          Specialits:{" "}
          {specialists.map((sp, i, arr) => (
            <span key={sp.id}>
              {sp.name}
              {i === arr.length - 1 ? "" : ", "}
            </span>
          ))}
        </p>
        <p>{description}</p>
        <p>{hashtagMaker(tags)}</p>

        <div>
          <p>{currencyConverter(price)}</p>
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
