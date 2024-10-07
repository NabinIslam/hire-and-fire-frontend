import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main>
      <div className="container flex flex-col items-center justify-center">
        <h1 className="text-center text-6xl">404 - error</h1>
        <h3 className="text-center text-4xl">PAGE NOT FOUND</h3>
        <p className="text-center text-sm font-medium">
          Verify the URL or return to homepage.
        </p>
        <Link href="/">
          <button className="rounded-md border-2 border-primary bg-primary px-4 py-3 text-sm duration-200 hover:border-white hover:bg-transparent">
            Back to Home
          </button>
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
