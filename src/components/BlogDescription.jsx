import parse from "html-react-parser";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

// const options = {
//   replace: (domNode) => {
//     // Handle paragraph (<p>) elements
//     if (domNode.name === "p") {
//       return (
//         <p className={`${montserrat.className} my-4 text-sm text-red-700`}>
//           {domToReact(domNode.children)}
//         </p>
//       );
//     }

//     // Handle heading 1 (<h1>) elements
//     if (domNode.name === "h1") {
//       return (
//         <h1 className="my-6 text-3xl font-bold">
//           {domToReact(domNode.children)}
//         </h1>
//       );
//     }

//     // Handle heading 2 (<h2>) elements
//     if (domNode.name === "h2") {
//       return (
//         <h2 className="my-5 text-2xl font-semibold">
//           {domToReact(domNode.children)}
//         </h2>
//       );
//     }

//     // Add more cases for other elements if needed
//   },
// };

const BlogDescription = ({ description }) => {
  return (
    <div className="prose">
      <div
        dangerouslySetInnerHTML={{ __html: description }}
        className={`${montserrat.className}`}
      ></div>
    </div>
  );
};

export default BlogDescription;
