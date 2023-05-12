import PackageItem from "@/components/PackageItem";
import prisma from "@/libs/prisma";

const PackagesPage = async () => {
  const packages = await prisma.package.findMany({
    include: {
      specialists: true,
    },
  });

  return (
    <div className="wrapper py-10">
      <h2 className="text-2xl font-semibold">Packages</h2>

      <div className="flex flex-wrap gap-10 mt-10">
        {packages.map((pkg) => (
          <PackageItem
            key={pkg.id}
            id={pkg.id}
            image={pkg.image1}
            title={pkg.title}
            description={pkg.description}
            tags={pkg.tags}
            price={pkg.price}
            specialists={pkg.specialists}
          />
        ))}
      </div>
    </div>
  );
};

export default PackagesPage;
