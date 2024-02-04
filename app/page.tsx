import Navbar from "@/components/base/Navbar";
import Categories from "@/components/commons/Categories";
import Toast from "@/components/commons/Toast";

export default async function Home() {
  return (
    <>
      <h1>
        <Toast />
        <Navbar />
        <Categories />
      </h1>
    </>
  );
}
