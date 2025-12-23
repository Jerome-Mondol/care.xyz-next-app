import Link from 'next/link';

export const metadata = {
  title: 'Special & Sick Care — Care.xyz',
  description: 'Specialized in-home care for sick or disabled family members with trained nurses and monitoring.'
};

export default function SickCarePage() {
  return (
    <div className="min-h-screen py-20 bg-gray-50 text-gray-700 flex justify-center items-center">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white shadow rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="text-6xl">🏥</div>
            <div>
              <h1 className="text-3xl font-bold">Special & Sick Care Service</h1>
              <p className="text-gray-600 mt-2 max-w-2xl">
                Our specialized caregivers and trained nurses provide medical and supportive care for patients recovering at home. Services include medication management, therapy assistance, monitoring and post-op care.
              </p>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">What we offer</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Trained nurses and medical assistants</li>
                <li>• 24/7 monitoring options</li>
                <li>• Therapy support and medication administration</li>
                <li>• Medical equipment handling & coordination</li>
              </ul>
            </div>

            <div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">৳400 / hour</div>
                <div className="text-sm text-gray-500 mb-4">Starting rate</div>
                <Link href="/booking/3" className="inline-block w-full bg-blue-600 text-white py-3 rounded-lg font-semibold">
                  Book This Service
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold mb-2">Quality & Safety</h3>
            <p className="text-gray-700">
              Care plans are tailored by our medical team and caregivers follow strict safety protocols. We work closely with families and healthcare providers to ensure continuity of care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
