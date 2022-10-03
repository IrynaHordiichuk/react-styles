
// в цьому файлі робимо реекспорт 
// (щоб в компонентах не робити багато імпортів із папки ютілс);
// тобто імпортувати все

export * from './formatEventStart';
export * from './formatEventDuration';

// це іменний експорт, якщо б ексорт по дефолту, то 
//  export {default} from './formatEventStart'