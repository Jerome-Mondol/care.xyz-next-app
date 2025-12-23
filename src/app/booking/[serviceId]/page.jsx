"use client"

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function BookingPage({ params }) {
  const { serviceId } = params;
  const router = useRouter();
  const { data: session, status } = useSession();

  const [durationType, setDurationType] = useState('hours');
  const [duration, setDuration] = useState(1);
  const [division, setDivision] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [address, setAddress] = useState('');
  const [saving, setSaving] = useState(false);

  // choose hourly rate based on serviceId
  const hourlyRate = useMemo(() => {
    if (String(serviceId) === '1') return 200;
    if (String(serviceId) === '2') return 300;
    if (String(serviceId) === '3') return 400;
    return 250;
  }, [serviceId]);

  const total = useMemo(() => {
    const mult = durationType === 'days' ? 24 : 1;
    return hourlyRate * duration * mult;
  }, [hourlyRate, durationType, duration]);

  // Private route behavior
  useEffect(() => {
    if (status === 'loading') return; // wait
    if (status === 'unauthenticated') {
      // redirect to login with next param
      router.push(`/login?next=/booking/${serviceId}`);
    }
  }, [status, router, serviceId]);

  if (status === 'loading' || !session) {
    return (
      <div className="min-h-screen flex items-center justify-center">Loading...</div>
    );
  }

  const handleConfirm = async () => {
    setSaving(true);
    const booking = {
      serviceId: Number(serviceId),
      serviceName:
        serviceId === '1' ? 'Baby Care Service' : serviceId === '2' ? 'Elderly Care' : 'Special Care',
      durationType,
      duration: Number(duration),
      location: { division, district, city, area, address },
      total,
      status: 'Pending',
    };

    try {
      // POST to server to persist booking
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(booking),
      });

      if (!res.ok) {
        console.error('Failed to save booking to server');
      }
    } catch (e) {
      console.error('Failed to save booking', e);
    }

    setSaving(false);
    router.push('/my-bookings');
  };

  return (
    <div className="min-h-screen py-20 bg-gray-50 text-gray-700">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white shadow rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Book Service</h2>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">Duration Type</label>
              <select value={durationType} onChange={(e) => setDurationType(e.target.value)} className="w-full border rounded px-3 py-2">
                <option value="hours">Hours</option>
                <option value="days">Days</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Duration</label>
              <input type="number" min={1} value={duration} onChange={(e) => setDuration(e.target.value)} className="w-full border rounded px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Division</label>
              <input value={division} onChange={(e) => setDivision(e.target.value)} className="w-full border rounded px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">District</label>
              <input value={district} onChange={(e) => setDistrict(e.target.value)} className="w-full border rounded px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <input value={city} onChange={(e) => setCity(e.target.value)} className="w-full border rounded px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Area</label>
              <input value={area} onChange={(e) => setArea(e.target.value)} className="w-full border rounded px-3 py-2" />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Full Address</label>
              <input value={address} onChange={(e) => setAddress(e.target.value)} className="w-full border rounded px-3 py-2" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-500">Estimated Total</div>
              <div className="text-2xl font-bold text-blue-600">৳{total}</div>
            </div>

            <div>
              <button onClick={handleConfirm} disabled={saving} className="bg-blue-600 text-white px-6 py-3 rounded-lg">{saving ? 'Saving...' : 'Confirm Booking'}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
