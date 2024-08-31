import Button from "@/components/ui/Button";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5">
      <h1 className="text-4xl font-bold">Page not found :(</h1>
      <Link className="shadow-2xl" href="/">
        <Button>Go To Home</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
