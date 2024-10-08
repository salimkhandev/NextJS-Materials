import RestApi from "@/hooks/useGetQuery";
import Link from "next/link";
export default async function Page(props) {

const user=  RestApi()
const data= await user
// console.log(data);

    let currentUser = props.params.slug-1
   let userData=data[currentUser]
   console.log(userData);
   
    


return (
    <div>
        <ul>
          

<li> <strong> ID: {userData.id}</strong> </li>
<li>Name:{userData.name}</li>
<li>username: {userData.username}</li>
<li>Email:{userData.email}</li>
            <Link href="/" className="bg-blue-500  text-white py-2 px-4 rounded hover:bg-blue-600"   >Go Back</Link>
        </ul>
    </div>
)

}
export async function generateStaticParams(){
    const data= await RestApi()
    return data.map(user=>({slug:user.id.toString()}))

}

