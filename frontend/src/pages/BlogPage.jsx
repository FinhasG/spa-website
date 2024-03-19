import React, { useState, useEffect } from "react";
import { createClient } from "contentful";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const client = createClient({
  space: "4przepv332rr",
  accessToken: "i1SB-ZBJunnyHCpd2O8SA9l4hUUdGXA69azXB6bOG9Y",
});

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    client
      .getEntries({
        content_type: "blogPost",
      })
      .then((response) => {
        if (response.items && response.items.length > 0) {
          const data = response.items.map((item) => ({
            id: item.sys.id,
            image: item.fields.blogImage.fields.file.url,
            title: item.fields.blogTitle,
            author: item.fields.blogAuthor,
            date: item.fields.createdDate,
            content: item.fields.blogContent,
            summary: item.fields.blogSummary,
          }));
          const sortedBlogs = data.sort(
            (a, b) => new Date(b.date) - new Date(a.date)
          );
          setBlogs(sortedBlogs);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data. Please try again later.");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-6">
      <div className="header">
        <h1 className="text-3xl font-bold mb-2">Blog</h1>
      </div>
      <div className="flex mt-2">
        <div className="w-3/4 p-4">
          {loading && <p>Loading...</p>}
          {error && <p className="text-red-600">{error}</p>}
          {!loading && !error && (
            <>
              <div className="mb-4">
                {blogs.length > 0 && (
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <img className="w-full h-96" src={blogs[0].image} alt="Image" />
                    <div className="p-2">
                      <h2 className="text-xl font-semibold mb-1">{blogs[0].title}</h2>
                      <p className="text-gray-700 mb-1">{blogs[0].summary}</p>
                      <p className="text-gray-600 mb-1">{blogs[0].author}</p>
                      <p className="text-gray-600">{blogs[0].date}</p>
                      <Link to="/another-page" className="btn  mt-4">Read More</Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-wrap">
                {blogs.slice(1).map((blog, index) => (
                  <div key={index} className="w-1/3 mb-4 px-2">
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full">
                      <img className="w-full" src={blog.image} alt="Image" />
                      <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                        <p className="text-gray-700 mb-2">{blog.summary}</p>
                        <p className="text-gray-600 mb-2">{blog.author}</p>
                        <p className="text-gray-600">{blog.date}</p>
                        <Link to="/another-page" className="btnmt-4">Read More</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        <div className="w-1/4 p-4">
          <h1>Popular Blogs</h1>
          {blogs.slice(0, 4).map((blog, index) => (
            <div key={index} className="mb-4">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img className="w-full" src={blog.image} alt="Image" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                </div>
              </div>
            </div>
          ))}
          <div className="mb-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Subscribe to Our Newsletter</h2>
                <p className="text-gray-700 mb-4">Receive updates and exclusive content straight to your inbox.</p>
                <button className="btn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;

// import React, { useState, useEffect } from "react";
// import { createClient } from "contentful";

// const client = createClient({
//   space: "4przepv332rr",
//   accessToken: "i1SB-ZBJunnyHCpd2O8SA9l4hUUdGXA69azXB6bOG9Y",
// });

// const Blog = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null); // Add this line to declare error state

//   useEffect(() => {
//     client
//       .getEntries({
//         content_type: "blogPost",
//       })
//       .then((response) => {
//         if (response.items && response.items.length > 0) {
//           const data = response.items.map((item) => ({
//             id: item.sys.id,
//             image: item.fields.blogImage.fields.file.url,
//             title: item.fields.blogTitle,
//             author: item.fields.blogAuthor,
//             date: item.fields.createdDate,
//             content: item.fields.blogContent,
//             summary: item.fields.blogSummary,
//           }));

//           const sortedBlogs = data.sort(
//             (a, b) => new Date(b.date) - new Date(a.date)
//           );

//           setBlogs(sortedBlogs);
//           setLoading(false);
//         } else {
//           setLoading(false);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div className="container mx-auto">Loading...</div>;
//   }

//   if (error) {
//     return <div className="container mx-auto">Error: {error}</div>;
//   }

//   return (
// <div className="flex flex-col items-center justify-center ">
//   <div className="mb-8 w-full ">

//     {/* Header content */}
// <div className="header">
//   <h1 className="text-3xl font-bold mb-4">Blog</h1>
// </div>
//   </div>

//       <div className="flex flex-1 justify-center w-full">
//         <div className="w-70 min-w-200px flex flex-col p-4 bg-gray-100 rounded-lg shadow-md m-4">
//           <div className=" mb-8">
//             <h2 className="text-xl font-semibold">Top Row</h2>
//             {/* Content for the top row */}
//             {blogs.slice(0, 1).map((blog) => (
//               <div
//                 key={blog.id}
//                 className="bg-white rounded-lg overflow-hidden shadow-md"
//               >
//                 <img
//                   src={blog.image}
//                   alt={blog.title}
//                   className="w-full h-48 object-cover object-center"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
//                   <div className="text-gray-600">
//                     <p>{blog.summary}</p>
//                     <p>Date: {blog.date}</p>
//                     <p>By {blog.author}</p>
//                   </div>
//                   <button className="text-green-500 hover:underline mt-2 block">
//                     Read more
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div>
//             <h2 className="text-xl font-semibold mb-4">Bottom Row</h2>
//             {/* Content for the bottom row */}
//             <div className="flex flex-wrap">
//               {/* Loop through your data to generate cards */}
//               {blogs.slice(1).map((blog) => (
//                 <div
//                   key={blog.id}
//                   className="flex-0 flex-0 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4"
//                 >
//                   <div className="bg-white rounded-lg overflow-hidden shadow-md">
//                     <img
//                       src={blog.image}
//                       alt={blog.title}
//                       className="w-full h-48 object-cover object-center"
//                     />
//                     <div className="p-4">
//                       <h3 className="text-lg font-semibold mb-2">
//                         {blog.title}
//                       </h3>
//                       <div className="text-gray-600">
//                         <p>{blog.summary}</p>
//                         <p>Date: {blog.date}</p>
//                         <p>By {blog.author}</p>
//                       </div>
//                       <button className="text-green-500 hover:underline mt-2 block">
//                         Read more
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* <div className="w-30 max-w-30% p-4 bg-gray-100 rounded-lg shadow-md m-4">
//           <h2 className="text-xl font-semibold mb-4">Right Section</h2>

//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Blog;
