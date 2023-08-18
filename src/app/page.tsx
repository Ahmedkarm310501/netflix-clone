import Billboard from "@/components/Billboard";
import NavBar from "@/components/NavBar";
import UserCard from "@/components/UserCard";
import getSession from "@/lib/getSession";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getSession();
  console.log(session);
  if (!session) {
    redirect("/auth");
  }

  return (
    <>
      <NavBar />
      <Billboard />
      <div className="">ahmed karam hassan</div>
    </>
  );
}
