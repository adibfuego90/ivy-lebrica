import PackageItem from "@/components/PackageItem";
import prisma from "@/libs/prisma";

const PackagesPage = async () => {
  const packages = await prisma.package.findMany({
    include: {
      specialists: true,
    },
  });

  return (
    <section>
      {/* SECTION TITLE GOES HERE*/}

      {/* PACKAGES WRAPPER*/}
      <div>
        {packages.map((pkg) => (
          <PackageItem key={pkg.id} />
        ))}
      </div>
    </section>
  );
};

export default PackagesPage;
