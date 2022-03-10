import LogoJede from '../../assets/logo-jede.svg';
import * as S from './styles';

const Logo = () => {
    return (
        <S.LogoContainer>
            <S.ImgLogo src={LogoJede} alt='logo jede' />
            <S.Title>JEDE</S.Title>
        </S.LogoContainer>
    )
}

export default Logo;