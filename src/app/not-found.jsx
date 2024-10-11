import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main>
      <div className="container flex min-h-[90vh] flex-col items-center justify-center gap-4">
        <h1 className="text-center text-6xl">404 - error</h1>
        <h3 className="text-center text-4xl">PAGE NOT FOUND</h3>
        <p className="text-center text-sm font-medium">
          Verify the URL or return to homepage.
        </p>
        <div>
          <Link href="/">
            <button className="rounded-md border-2 border-primary bg-primary px-4 py-3 text-sm text-white duration-200 hover:bg-transparent hover:text-primary">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
