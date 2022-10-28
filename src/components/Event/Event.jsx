
import PropTypes from 'prop-types';
// import css from './Event.module.css';
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock} from "react-icons/fa";
// import {formatEventStart} from 'utils/formatEventStart';
// import {formatEventDuration} from 'utils/formatEventDuration';
// ! використовуємо реекспорт із файлу індекс.JS в папці ютілс
// просто вказуємо папку відносно срс, заходить в ютілс і 
// шукає фал індекс, а у файлі індекс - реекспорти


import {formatEventDuration, formatEventStart} from 'utils';
import { iconSize } from 'constants';
import {Card, EventName, Info, Chip} from './Event.styled';

export const Event = ({ name, location, speaker, type, start, end }) => {
  const formattedStart = formatEventStart(start);
  const duration = formatEventDuration(start, end)

  // console.log(css)
  // console.log(type);
  // console.log(css[type]);
// якщо значення властивості знахотиться у змінній, 
// то звертаємось до неї через квадратні дужки
// в консолі виведено обєкт css та обфуксація класів 
// (створює об єкт - назва властивості це назва класу із 
// файлу сss, а значення властивості - бере назву компонента 
// !і прикручує унікальну назву(scoped classes) клас унікальний для компонента)
// генерує айдішники і присобачує вкінець
// тому що в глобальному CSS не можна робити одинакові імена.
// тобто в різних css модулях можуть бути одинакові класи і вони не будуть конфліктувати
// в результирующем ДОМ дереве
// Обфускація - це коли читаемое превращается в нечитаемую билибурду
// !В стайлд компонентс можна передати пропси, так як це теж реакт компоненти
// пропси для стайл компонетс можуть бути стилі для виділення різним кольором
// чіп, тому що чіп різного кольору залежно від виду заходу

    return (
    <Card>
      <EventName>{name}</EventName>
      <Info>
     < FaMapMarkerAlt size={iconSize.sm}/>
       { location}
      </Info>
      <Info>
       < FaUserAlt size={iconSize.sm}/>
        {speaker}
      </Info>
      <Info>
       < FaCalendarAlt size={iconSize.sm}/>
        {formattedStart}
      </Info>
      <Info>
       < FaClock size={iconSize.sm}/>
     {duration}
      </Info>
      <Chip eventType={type}>{type}</Chip>
    </Card>
  );
};

// Chip - this is how it was before: className={`${css.chip} ${css[type]}`}

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
