import styled from "styled-components";
import img1 from "./img/Lilac_Cat.png";
// import bgimg1 from "./img/cool-background(0).png";
// import bgimg2 from "./img/cool-background(1).png";
// import bgimg3 from "./img/cool-background(2).png";
// import bgimg4 from "./img/cool-background(3).png";
// import bgimg5 from "./img/cool-background(4).png";
// import bgimg6 from "./img/cool-background(5).png";

// const backgroundArr = [bgimg1, bgimg2, bgimg3, bgimg4, bgimg5, bgimg6];
// const randomIndex = Math.floor(Math.random() * backgroundArr.length);
// const backgroundImg = backgroundArr[randomIndex];

export default function MainComponent() {
  return (
    <MainBox>
      <CatImg>
        <img src={img1} alt=""></img>
      </CatImg>
      <TitleBox>
        <TitleBox1>안녕하세요!</TitleBox1>
        <TitleBox2>개발자 염예나입니다.</TitleBox2>
        <TitleBox3>
          현재 사이트는
          <br />
          React / Express
          <br />
          등을 이용하여 제작되었습니다.
          <p />
          저에게 관심이 있으시거나
          <br /> 궁금한 점이 생기신 경우
          <p />
          yenana1717@gmail.com
          <p />
          위의 이메일로 언제든 연락주세요.
          <br />
          당신과 함께 성장하고 싶습니다.
          <p />
          봐주셔서 감사합니다. :D <br />
          염예나 올림.
        </TitleBox3>
      </TitleBox>
    </MainBox>
  );
}

const MainBox = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const CatImg = styled.div`
  z-index: -1;
  position: absolute;
  top: 1rem;
  left: 2rem;
`;

const TitleBox = styled.div`
  font-weight: 700;
`;

const TitleBox1 = styled.div`
  font-size: 2.5rem;
  padding: 20rem 0 0 2.5rem;
`;

const TitleBox2 = styled.div`
  font-size: 2rem;
  padding: 0.5rem 2.5rem;
`;

const TitleBox3 = styled.div`
  font-size: 1rem;
  padding: 0.5rem 2.5rem;
  font-weight: lighter;
`;
