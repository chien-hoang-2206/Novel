import styled from "styled-components";
import Row from "react-bootstrap/Row";
export const ContainerCard = styled.div`
  display: flex;
  opacity: 1;
`;

export const Col1 = styled.div`
  flex: 2;
  padding: 5px 0px;
`;

export const Col2 = styled.div`
  flex: 7;
  gap: 20px;
  display: flex;
  flex-direction: column;
  padding: 10px 25px 0px 0px;
`;

export const ImgNovel = styled.img`
  border-radius: 10px;
  border: 6px solid rgba(159, 153, 156, 0.76);
  border: 2px solid rgb(95, 189, 211, 0.9);
  box-shadow: 0 5px 10px rgb(95, 189, 211, 0.9);
  width: 210px;
  height: 270px;
  object-fit: fill;
`;
export const ImgNovelPost = styled.img`
  border-radius: 34.9566px;
  border: 3px solid rgba(159, 153, 156, 0.76);
  transform: rotate(-5.84deg);
  position: absolute;
  width: 200px;
  height: 348px;
  left: 15px;
  top: 98.78px;
  @media screen and (max-width: 1368px) {
    width: 170px;
    height: 243px;
    left: 8px;
    top: 69.78px;
  }
`;
export const RowTitle = styled.div`
  max-height: 42px;
`;
export const RowAuth = styled.div`
  max-height: 40px;
  display: flex;
`;
export const RowType = styled.div`
  // max-height: 30px;
  display: flex;
`;
export const RowIntro = styled.div`
  height: 170px;
  width: 98%;
  border-radius: 5px;
  margin: 1vh auto;
  padding: 1.1vh 1vh;
  border: 1px solid rgb(214, 214, 214);
`;
export const RowInfo = styled.div`
  display: flex;
  gap: 20px;
`;
export const ColAuth = styled.div`
  flex: 2;
`;
export const ColStar = styled.div`
  flex: 4;
`;
export const NomalDiv = styled.div`
  margin: 25px 0px;
  font-size: 30px;
`;
export const ColInfo = styled.div`
  max-height: 5vh;
  max-width: 27vh;
  max-width: 160px;
  flex: 3;
`;
export const RowStar = styled(Row)`
  max-height: 8vh;
`;
export const ContainerStar = styled.div`
  display: flex;
  align-items: left;
`;
export const ContainerStarIcon = styled.div`
  display: flex;
  font-size: 1.5rem;
  text-align: left;
`;
export const ReviewText = styled.div`
  padding: 0rem 1rem;
  font-size: 20px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  margin: 20px 0px;
`;
export const ButtonContainerPost = styled.div`
  display: flex;
  margin: 4vh auto;
  text-align: center;
`;
export const RowNav = styled.div`
  height: 10vh;
  display: flex;
  margin: 2vh;
  padding-top: 1vh;
`;
export const BtnRead = styled.button`
  border: 2px solid black;
  border-radius: 30px;
  padding: 0 40px;
  font-weight: bold;
  font-size: 1.5rem;
  max-height: 7vh;
  &:hover {
    background-color: rgb(183, 138, 40);
    color: #fff;
  }
`;
export const BtnReadMobile = styled.button`
  border: 2px solid black;
  border-radius: 30px;
  padding: 0 4px;
  font-weight: bold;
  font-size: 20px;
  max-height: 7vh;
  &:hover {
    background-color: rgb(183, 138, 40);
    color: #fff;
  }
`;
export const BtnBookmark = styled.button`
  border: 2px solid black;
  border-radius: 30px;
  padding: 0 40px;
  margin-left: 10px;
  font-weight: bold;
  font-size: 1.5rem;
  max-height: 7vh;
  color: gray;
  &:hover {
    background-color: RGB(94 89 77);
    color: #fff;
  }
`;
export const BtnBookmarked = styled.button`
  border: 2px solid black;
  border-radius: 30px;
  padding: 0 40px;
  margin-left: 30px;
  font-weight: bold;
  background-color: rgba(217, 241, 128, 1);
  font-size: 1.5rem;
  max-height: 7vh;
  color: gray;
  &:hover {
    background-color: RGB(9 89 77);
    color: #fff;
  }
`;
export const BtnBookmarkedMobile = styled.button`
  border: 2px solid black;
  border-radius: 30px;
  padding: 0 4px;
  margin-left: 30px;
  font-weight: bold;
  background-color: rgba(217, 241, 128, 1);
  font-size: 20px;
  max-height: 7vh;
  color: gray;
  &:hover {
    background-color: RGB(9 89 77);
    color: #fff;
  }
`;