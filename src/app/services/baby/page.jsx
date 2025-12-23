import Link from 'next/link';

export const metadata = {
  title: 'Baby Care — Care.xyz',
  description: 'Professional and trusted baby care services. Find experienced babysitters and nannies near you.'
};

export default function BabyCarePage() {
  return (
    <div className="min-h-screen py-20 bg-gray-50 text-gray-700 flex justify-center items-center">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white shadow rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="text-6xl">👶</div>
            <div>
              <h1 className="text-3xl font-bold">Baby Care Service</h1>
              <p className="text-gray-600 mt-2 max-w-2xl">
                Our trained and background-checked babysitters provide loving and professional care for your child. Services include playtime, feeding, nap schedules, diaper changes and light meal prep.
              </p>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">What we offer</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Background checked caretakers</li>
                <li>• First aid & CPR trained</li>
                <li>• Age-appropriate activities & learning</li>
                <li>• Feeding, diapering, and sleep routines</li>
              </ul>
            </div>

            <div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">৳200 / hour</div>
                <div className="text-sm text-gray-500 mb-4">Starting rate</div>
                <Link href="/booking/1" className="inline-block w-full bg-blue-600 text-white py-3 rounded-lg font-semibold">
                  Book This Service
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold mb-2">Why families choose our babysitters</h3>
            <p className="text-gray-700">
              We carefully vet each caregiver for experience, references and conduct regular training so you can feel confident when you leave your child in our care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
