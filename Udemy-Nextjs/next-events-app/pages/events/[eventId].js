import { getEventById } from '@/dummy-data';
import { useRouter } from 'next/router';

function EventDetailPage() {
    const router = useRouter();

    const eventId = router.query.eventId;
    const event = getEventById(eventId);

    if (!event) {
        return (
            <p>No event found!</p>
        )
    }

    return (
        <div>
            <h1>Event Detail</h1>
        </div>
    );
}

export default EventDetailPage;