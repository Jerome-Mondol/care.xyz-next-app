"use client"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function MyBookingsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'loading') return;
    if (status === 'unauthenticated') {
      router.push('/login?next=/my-bookings');
      return;
    }

    const fetchBookings = async () => {
      try {
        const res = await fetch('/api/bookings', { credentials: 'include' });
        if (res.status === 401) {
          router.push('/login?next=/my-bookings');
          return;
        }
        const data = await res.json();
        if (res.ok) setBookings(data.bookings || []);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [status, router]);

  if (status === 'loading' || loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen py-20 bg-gray-50 text-gray-700">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">My Bookings</h1>

        {bookings.length === 0 ? (
          <div className="bg-white p-6 rounded shadow text-center">You have no bookings yet.</div>
        ) : (
          <div className="space-y-4">
            {bookings.map((b) => (
              <div key={b._id} className="bg-white p-4 rounded shadow flex items-center justify-between">
                <div>
                  <div className="font-semibold">{b.serviceName}</div>
                  <div className="text-sm text-gray-600">{b.duration} {b.durationType} • {b.location.city || b.location.district || 'No location'}</div>
                  <div className="text-sm text-gray-700 mt-2">Total: ৳{b.total}</div>
                </div>
                <div className="text-right">
                  <div className="mb-2 font-medium">{b.status}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}