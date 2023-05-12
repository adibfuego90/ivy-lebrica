import PackagesPage from "../packages/page";

const HomePage = () => {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <PackagesPage />
    </div>
  );
};

export default HomePage;
