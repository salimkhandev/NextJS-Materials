import RestApi from "@/hooks/useGetQuery";
import Link from "next/link";

export default async function Page(props) {
    const user = RestApi();
    const data = await user;

    let currentUser = props.params.slug - 1;
    let userData = data[currentUser];
    console.log(userData);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">User Details</h1>
                <ul className="space-y-2">
                    <li className="text-gray-700">
                        <span className="font-semibold">Name:</span> {userData.name}
                    </li>
                    <li className="text-gray-700">
                        <span className="font-semibold">Username:</span> {userData.username}
                    </li>
                    <li className="text-gray-700">
                        <span className="font-semibold">Email:</span> {userData.email}
                    </li>
                </ul>
                <Link 
                    href="/" 
                    className="mt-4 block text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                >
                    Go Back
                </Link>
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    const data = await RestApi();
    return data.map(user => ({ slug: user.id.toString() }));
}
