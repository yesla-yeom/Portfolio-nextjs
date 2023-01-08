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
  top: 5rem;
  left: 2rem;
`;
