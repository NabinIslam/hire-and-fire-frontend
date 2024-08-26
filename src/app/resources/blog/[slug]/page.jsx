import PageBanner from "@/components/PageBanner";

const BlogDetails = ({ params }) => {
  const { slug } = params;
  return (
    <main>
      <PageBanner title={"Blog Detail"} />
    </main>
  );
};

export default BlogDetails;
