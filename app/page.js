import React from "react";
import lets from "../hooks/useGetQuery";
import Link from "next/link";

async function Page(props) {
  console.log(props.searchParams, "props");

  // Fetching data
  const data = await lets();

  return (
    <div className="h-full bg-gray-100 p-4"> {/* Added background and padding */}
      <ul className="space-y-4"> {/* Space between list items */}
        {data.map((item, index) => (
          <li key={index} className="bg-white shadow-md p-4 rounded-md"> {/* List item styling */}
            <Link href={`/blogpost/${item.id}`} className="text-blue-500 hover:underline"> {/* Link styling */}
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Page;
