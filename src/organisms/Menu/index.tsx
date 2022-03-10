import * as S from './styles';

const Menu = () => {
    return (
        <S.MenuList>
            <S.ItemList><a href='#home'>Home</a></S.ItemList>
            <S.ItemList><a href='#about'>About Us</a></S.ItemList>
            <S.ItemList><a href='#works'>How it Works</a></S.ItemList>
            <S.ItemList><a href='#services'>Services</a></S.ItemList>
            <S.ItemList><a href='#contact'>Contact</a></S.ItemList>
        </S.MenuList>
    )
}

export default Menu;