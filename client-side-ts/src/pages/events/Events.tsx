import { EventsBanner } from './sections/EventsBanner';
import { UpcomingEventsSection } from './sections/UpcomingEventsSection';
import { PastEvents } from './sections/PastEvents';

export const Events = () => {
  return (
    <>
      <EventsBanner />
      <UpcomingEventsSection />
      <PastEvents />
    </>
  );
};
