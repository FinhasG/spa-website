import React, { useState, useEffect } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { createClient } from 'contentful';

const client = createClient({
  space: 'YOUR_CONTENTFUL_SPACE_ID',
  accessToken: 'YOUR_CONTENTFUL_ACCESS_TOKEN',
});

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client.getEntries()
      .then((response) => {
        setPosts(response.items);
      })
      .catch(console.error);
  }, []);

  const [expandedPosts, setExpandedPosts] = useState([]);

  const toggleExpand = (postId) => {
    if (expandedPosts.includes(postId)) {
      setExpandedPosts(expandedPosts.filter((id) => id !== postId));
    } else {
      setExpandedPosts([...expandedPosts, postId]);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Latest Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.sys.id} className="bg-white shadow-lg rounded-md overflow-hidden">
            {post.fields.image && (
              <img
                src={post.fields.image.fields.file.url}
                alt={post.fields.image.fields.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.fields.title}</h2>
              <div className="text-gray-600 mb-4">{post.fields.publishDate}</div>
              <div className={`text-gray-800 ${expandedPosts.includes(post.sys.id) ? '' : 'truncate'}`}>
                {documentToReactComponents(post.fields.content)}
              </div>
              <button
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
                onClick={() => toggleExpand(post.sys.id)}
              >
                {expandedPosts.includes(post.sys.id) ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;