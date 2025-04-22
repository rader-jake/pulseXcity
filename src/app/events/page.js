'use client'
import EventPage from '../components/EventPage';
import EventListPage from '../components/EventsList';
import Header from '../components/Header';

export default function EventsPage() {
  return (
    <div>
    <Header/>
      <h1 className="text-3xl font-semibold text-center mt-24 py-6"></h1>
      {/* <EventPage /> */}
      <EventListPage />
    </div>
  );
}
