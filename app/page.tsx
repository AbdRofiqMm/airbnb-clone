import Navbar from "@/components/base/Navbar";
import Categories from "@/components/commons/Categories";

export default async function Home() {
  return (
    <>
      <h1>
        <Navbar />
        <Categories />
      </h1>
    </>
  );
}
