import Link from 'next/link'
import React from 'react'

const Navlink = ({href, title}) => {
  return (
    <div>
         <Link href={href}className="text-[#ADB7BE] py-2 pr-4 pl-3 sm:text-xl rounded md:p-0 hover:text-white">{title}</Link>
    </div>
  )
}

export default Navlink