import styled from 'styled-components';

export const MainContainer = styled.div`
  /* display: block; */
  /* background-color: grey; */
  /* width: 100%; */
  margin-top: 50px;
  width: 60%;
  /* border: solid; */
  padding: 10px;
  /* position: absolute; */
  flex: auto;
`;
export const MainContainerWrapper = styled.div`
  margin: 0;
  background-color: lightgray;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PostContainer = styled.div`
  /* display: flex; */
  border-radius: 10px;
  background-color: white;
  margin: 5px;
  margin-bottom: 25px;
  padding: 5px;
  /* width: auto;
  margin: auto; */
  /* height: 30%; */
  /* overflow: auto; */
  /* padding-left: 20%;
  padding-right: 20%; */
`;

export const PostHeading = styled.h1`
  opacity: 70%;
  font-size: 25px;
  font-weight: bold;
  background-color: white;
  margin: 0px;
  padding: 3px;
  border-radius: 10px;
`;

export const PostContent = styled.div`
  background-color: white;
  margin-bottom: 3px;
  opacity: 70%;
  /* padding: 3px; */
`;

export const PostDescription = styled.p`
  font-size: 18px;
`;

export const FeedCapacity = styled.p`
  font-size: 20px;
  opacity: 85%;
`;

export const FoodLocation = styled.p`
  font-size: 20px;
`;

export const ContactInfo = styled.p`
  font-size: 20px;
`;
