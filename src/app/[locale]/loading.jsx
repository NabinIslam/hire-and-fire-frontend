import Image from "next/image";

const Loading = () => {
  return (
    <div className="-mt-[70px] flex min-h-screen items-center justify-center bg-transparent backdrop-blur-md">
      <Image
        className="animate-pulse"
        src="/images/Logo.png"
        alt="Hire and Fire"
        height={100}
        width={100}
      />
    </div>
  );
};

export default Loading;
