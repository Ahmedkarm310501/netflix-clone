import getSession from "@/lib/getSession";
import { redirect } from "next/navigation";
import UserCard from "@/components/UserCard";


type Props = {};

const page = async (props: Props) => {
  const session = await getSession();
  console.log(session);
  if (!session) {
    redirect("/auth");
  }

 

  return (
    <div className="flex items-center h-full justify-center">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-6xl text-white text-center">
          Who&#39;s watching?
        </h1>
        <div className="flex items-center justify-center gap-8 mt-10">
          <div>
            <UserCard name={session?.user?.name!} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
