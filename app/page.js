// "use client"

import React from "react";
import lets from "../hooks/useGetQuery"
import Link from "next/link";

async function Page(props) {
  console.log(props.searchParams,"props");
  
  // throw new err
  const data= await lets()
  // console.log(data,"data")


  return <div className="h-full">

<ul>
  {data.map((item, index)=>(

    <li key={index}>
      <Link href={`/blogpost/${item.id}`}> <a>{item.name}</a></Link>
    </li>

  ))}
</ul>
  </div>;
}

export default Page;
