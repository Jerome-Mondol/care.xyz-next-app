import Link from 'next/link';

export const metadata = {
  title: 'Elderly Care — Care.xyz',
  description: 'Compassionate and professional elderly care services at home. Trained carers for companionship and medical assistance.'
};

export default function ElderlyCarePage() {
  return (
    <div className="min-h-screen py-20 bg-gray-50 text-gray-700 flex justify-center items-center">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white shadow rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="text-6xl">👴</div>
            <div>
              <h1 className="text-3xl font-bold">Elderly Care Service</h1>
              <p className="text-gray-600 mt-2 max-w-2xl">
                Our compassionate elderly caregivers provide personalized support at home — daily assistance, medication reminders, companionship, mobility support and light medical care when needed.
              </p>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">What we offer</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Medication reminders & management</li>
                <li>• Mobility assistance & fall prevention</li>
                <li>• Companionship and daily activities</li>
                <li>• Light medical support & monitoring</li>
              </ul>
            </div>

            <div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">৳300 / hour</div>
                <div className="text-sm text-gray-500 mb-4">Starting rate</div>
                <Link href="/booking/2" className="inline-block w-full bg-blue-600 text-white py-3 rounded-lg font-semibold">
                  Book This Service
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold mb-2">Trusted Caregivers</h3>
            <p className="text-gray-700">
              All caregivers are background-checked, trained in elderly care protocols, and supervised regularly to ensure high-quality, respectful service for your loved ones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
