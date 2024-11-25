// pages/events/[id].tsx

'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

interface EventProps {
  id: string;
  title: string;
  description: string;
  date: Date;
  time: string;
  address: string;
  imageUrl?: string;
}

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState<EventProps | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch the event details from the API
  useEffect(() => {
    if (!id) return;

    const fetchEventDetails = async () => {
      try {
        const response = await fetch(`/api/events/${id}`);
        if (!response.ok) {
          throw new Error('Event not found');
        }
        const data: EventProps = await response.json();
        setEvent(data);
      } catch {
      } finally {
        setLoading(false);
      }
    };

    fetchEventDetails();
  }, [id]); // Fetch the data when the `id` changes

  // Display loading or error messages if applicable
  if (loading) return <div>Loading...</div>;
  if (!event) return <div>Event not found</div>;

  return (
    <div className="container">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          src={event.imageUrl || '/default-event.jpg'}
          alt={event.title}
          width={600}
          height={400}
          className="event-image"
        />
        <h1 className="event-title">{event.title}</h1>
        <p className="event-description">{event.description}</p>
        <p className="event-date">
          <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
        </p>
        <p className="event-time">
          <strong>Time:</strong> {event.time}
        </p>
        <p className="event-address">
          <strong>Address:</strong> {event.address}
        </p>
      </div>
    </div>
  );
};

export default EventDetails;
