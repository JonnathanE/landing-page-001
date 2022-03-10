import * as S from './styles';

type FrontendProps = {
    children: React.ReactNode;
};

const Frontend = ({ children }: FrontendProps) => {
    return (
        <S.Container>{children}</S.Container>
    )
};

export default Frontend;