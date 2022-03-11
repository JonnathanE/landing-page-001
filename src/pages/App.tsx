import ButtonContact from '../atoms/ButtonContact';
import Frontend from '../templates/Frontend';
import * as S from './styles';

import BannerImg from '../assets/principal-header-img.png';
import CardActivity from '../molecules/CardActivity';

function App() {

  return (
    <Frontend>
      <S.Container>

        <div>
          <h1>Design driven development of your web product</h1>
          <h6>
            We are a full service digital agency that builds immesive user experience.
          </h6>
          <ButtonContact />
        </div>

        <S.ColumnImg>
          <CardActivity />
          <img src={BannerImg} alt="banner" />
        </S.ColumnImg>

        {/* 
          //TODO: Create card stats
        */}

        {/* 
          //TODO: Create background circle in the image
        */}

      </S.Container>
    </Frontend>
  )
}

export default App
