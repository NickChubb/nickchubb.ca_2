import React from 'react'
import { HeaderImage, HeaderTitle } from '../nav/nav.styled'

const BlogNavigation = () => {
  return (
    <div>
      <HeaderImage src="/me_coding.png" width={200} height={200} alt="me" priority />
      <HeaderTitle>chubb.blog</HeaderTitle>
    </div>
  )
}

export default BlogNavigation
