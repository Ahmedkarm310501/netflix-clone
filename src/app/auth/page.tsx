import AuthWrapper from "@/components/AuthWrapper";

const page = () => {
  return (
    <div className="min-h-full flex flex-col h-fit w-full bg-[url('/images/heroo.jpg')] bg-no-repeat bg-center bg-cover">
      <div className=" flex-grow bg-black w-full h-full md:bg-opacity-50">
        <nav className="px-4 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center  mb-5">
          <div className="bg-black/70 p-16 self-center mt-2 md:w-2/5 md:max-w-md rounded-md w-full">
            <AuthWrapper />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
