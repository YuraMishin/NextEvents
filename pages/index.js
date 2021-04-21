import {Fragment} from "react";
import { getFeaturedEvents } from './dummy-data';
import EventList from "../components/events/event-list";

function HomePage() {
    const featuredEvents = getFeaturedEvents();

    return (
        <Fragment>
            <h1>The Home Page</h1>
            <EventList items={featuredEvents}/>
        </Fragment>
    );
}

export default HomePage;
