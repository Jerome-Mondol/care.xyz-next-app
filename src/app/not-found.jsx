import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-xl mx-auto text-center p-8">
        <h1 className="text-6xl font-extrabold text-blue-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-6">Sorry, the page you are looking for doesn't exist or has been moved.</p>
        <div className="flex gap-4 justify-center">
          <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium">Return Home</Link>
          <Link href="/contact" className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-lg">Contact Support</Link>
        </div>
      </div>
    </div>
  );
}
