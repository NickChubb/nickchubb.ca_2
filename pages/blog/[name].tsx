import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../src/components/blog/Layout'

const BlogPost: React.FC = () => {
  const router = useRouter()
  return (
    <Layout>
      <BlogPost name={router.query.name}/>
    </Layout>
  )
}

export default BlogPost