

const BlogRenderer = ({ blog }) => {

  return (
   
     <div
        dangerouslySetInnerHTML={{ __html: blog.content }}
        className="blog-html-content"
      />
  );

};

export default BlogRenderer;
