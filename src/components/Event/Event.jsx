
import PropTypes from 'prop-types';
import css from './Event.module.css';
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock} from "react-icons/fa";
// import {formatEventStart} from 'utils/formatEventStart';
// import {formatEventDuration} from 'utils/formatEventDuration';
// ! використовуємо реекспорт із файлу індекс.JS в папці ютілс
// просто вказуємо папку відносно срс, заходить в ютілс і 
// шукає фал індекс, а у файлі індекс - реекспорти


import {formatEventDuration, formatEventStart} from 'utils';
import { iconSize } from 'constants';

export const Event = ({ name, location, speaker, type, start, end }) => {
  const formattedStart = formatEventStart(start);
  const duration = formatEventDuration(start, end)

  console.log(css)
  console.log(type);
  console.log(css[type]);
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

    return (
    <div className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <p className={css.info}>
     < FaMapMarkerAlt className={css.icon} size={iconSize.sm}/>
       { location}
      </p>
      <p className={css.info}>
       < FaUserAlt className={css.icon} size={iconSize.sm}/>
        {speaker}
      </p>
      <p className={css.info}>
       < FaCalendarAlt className={css.icon} size={iconSize.sm}/>
        {formattedStart}
      </p>
      <p className={css.info}>
       < FaClock className={css.icon} size={iconSize.sm}/>
     {duration}
      </p>
      <span className={`${css.chip} ${css[type]}`}>{type}</span>
    </div>
  );
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
