
// здесь будет использоваться именной єкспорт. Можно и дефолтній, 
// но главное чтобі на всем проекте біло одинаково

import {PageTitle} from 'components/PageTitle/PageTitle';
import { EventBoard } from 'components/EventBoard/EventBoard';
import upcomingEvents from '../upcoming-events.json';


export const App = () => {
    return (
    <div>
        <PageTitle text="24th Core Worlds Coalition Conference"/>
        <EventBoard events={upcomingEvents}/>
    </div>
    );
};