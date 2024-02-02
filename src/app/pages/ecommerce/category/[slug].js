import React from 'react'

import { useRouter } from 'next/router'

const category = () => {
    const router = usseRouter();
    const { slug } = router.query;

  return (
    <div>category</div>
  )
}

export default category