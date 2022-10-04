

import PropTypes from 'prop-types';
// import css from './PageTitle.module.css';
import {Title} from './PageTitle.styled';


// обьявляю компонент
// тег Title підтримує усе що всередині ним обгорнуте
//  як чілдрени 
export const PageTitle = ({text}) => {
    return <Title>{text}</Title>;
};

PageTitle.propTypes = {
    text: PropTypes.string.isRequired,
};