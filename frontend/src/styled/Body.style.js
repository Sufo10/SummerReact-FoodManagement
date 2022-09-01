import styled from 'styled-components';

export const MainContainerWrapper = styled.div`
  margin: 0;
  background-color: lightgray;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: rgb(47, 79, 79);

  @media (min-width: 425px) {
    align-items: center;
  }

  @media (max-width: 425px) {
    justify-content: center;
  }
`;

export const MainContainer = styled.div`
  margin-top: 50px;
  width: 60%;
  padding: 10px;

  @media (max-width: 425px) {
    margin-top: 30px;
    width: 95%;
    padding: 5px;
  }
`;

export const PostContainer = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 10px;
  background-color: white;
  margin-bottom: 25px;
  padding: 5px;
  opacity: 85%;

  @media (max-width: 425px) {
    width: 100%;
    margin: 0px;
    margin-bottom: 15px;
  }
`;

export const PostHeading = styled.h1`
  /* opacity: 85%; */
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
  font-size: 18px;
`;

export const PostDescription = styled.p`
  font-size: 18px;
`;

export const FeedCapacity = styled.p`
  font-size: 20px;
`;

export const FoodLocation = styled.p``;

export const ContactInfo = styled.p``;
