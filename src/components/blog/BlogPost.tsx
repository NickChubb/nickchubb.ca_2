import React from 'react'

type BlogPostProps = {
  name: string
}

const BlogPost: React.FC<BlogPostProps> = ({ name }) => {
  return (
    <div>BlogPost</div>
  )
}

export default BlogPost