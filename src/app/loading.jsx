import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
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
