import * as S from './styles';

import { FiArrowUp } from 'react-icons/fi';

const CardActivity = () => {
    return (
        <S.Container>
            <small>Activity</small>
            <div>
                <span>18</span>
                <FiArrowUp size={25} color='#fff' />
            </div>
            <i className='circle01'></i>
            <i className='circle02'></i>
            <i className='circle03'></i>
        </S.Container>
    )
}

export default CardActivity;