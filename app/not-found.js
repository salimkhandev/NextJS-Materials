// app/404.js
export default function NotFound() {
    
    return (
        <div className="flex items-center justify-center h-screen bg-black text-white">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-red-500">404</h1>
                <h2 className="mt-4 text-2xl">Page Not Found</h2>
                <p className="mt-2 text-gray-400">
                    Sorry, the page you are looking for does not exist.
                </p>
                <a
                    href="/"
                    className="mt-6 inline-block px-4 py-2 text-black bg-red-500 rounded hover:bg-red-600"
                >
                    Go back to Home
                </a>
            </div>
        </div>
    );
}
