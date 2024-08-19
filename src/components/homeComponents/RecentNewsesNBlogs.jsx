import ReactPlayer from "react-player";
import Button from "../ui/Button";

const RecentNewsesNBlogs = () => {
  return (
    <section className="py-[50px] space-y-8">
      <div className="container space-y-4">
        <h2 className="text-center text-5xl font-semibold">
          Recent Newses & Blogs
        </h2>
        <p className="text-center text-sm">
          Stay updated with the latest news articles and trending stories.
        </p>
      </div>
      <div className="container">
        <div className="p-4">
          <ReactPlayer url={"https://youtu.be/CpCN9lTFHc4"} />
        </div>
      </div>
      <div className="flex justify-center">
        <Button>View All Blogs & Newses</Button>
      </div>
    </section>
  );
};

export default RecentNewsesNBlogs;
