import React from 'react'

export default function Footer() {
  return (
    <section id="footer" className='flex flex-col justify-center items-center p-8 w-min(100%,35rem)'>
      <p className='text-md mb-2'>@2035. All rights reserved.</p>
      <p className='text-sm'><strong>About this website: </strong> This website was entiry build using Next.js & React (App Routing, Server Actions), Tailwind CSS, Framer Motion, React Email.</p>
    </section>
  )
}
