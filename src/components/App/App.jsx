
// здесь будет использоваться именной єкспорт. Можно и дефолтній, 
// но главное чтобі на всем проекте біло одинаково

import {PageTitle} from 'components/PageTitle/PageTitle';
import { EventBoard } from 'components/EventBoard/EventBoard';
import upcomingEvents from '../../upcoming-events.json';
import {Container} from './App.styled';



export const App = () => {
    return (
        // дів забрали - зробили фрагмент, те ж саме, що react.fragment
        // лишня обгортка не потрібна
    <Container>
        <PageTitle text="24th Core Worlds Coalition Conference"/>
        <EventBoard events={upcomingEvents}/>
    </Container>
    );
};