// ? Імпортуємо, 
//*оголошуємо як звичайний компонент, Container в цьому випадку
//*(міні компонент)
//styled - це такий обєкт - функція, він має під кожний тег
// окрему функцію (метод)
// щоб зададати стилі(написати звичайний css) вик косі лапки 
// div (чи інший тег) - це виклик ф-її
// !це називається tagged template literal
// синтаксис ф-її при визові із шаблонними строками
// ідея така, що все, що напишемо всередині шаблонної строки
// іде як аргументи для цієї функціі під час іі виклику
// значить просто сказали який тег потрібно і 
// які властивості закинути на цей тег
// це шаблонна строка, пишемо звичайний текст
// Container це звичайний реакт компонент який повертає виклик
// функціі div на обєкті styled
// в App огортаємо тегом Контейнер той компонент який там є і
// таким чином викликаюмо ф-ю в цьому файлі і
// відповідно функція зарендерить дів 
// до якого застосуються стилі вказані в шаблонному рядку
// цей метод доволяє - писати звичайний css в JS,
// а метод витягає цей css створює унікальний клас і 
// вішає заданий елемент в ДОМ
import styled from '@emotion/styled';

export const Container = styled.div`
padding: 24px;

`;