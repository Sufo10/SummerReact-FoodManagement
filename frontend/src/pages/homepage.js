/* eslint-disable no-unused-vars */
import React from 'react';
import homepageStyle from './homepage.style';

const { Title, Paragraph, HomeContainer, RightColmn } = homepageStyle;

const Homepage = () => {
  return (
    <HomeContainer>
      <RightColmn>
        <Title> We Feed </Title>
        <Paragraph>
          There are several events like wedding parties and worships that are
          frequently conducted in our society. Oftentimes, at the end of the
          event, there is excess food that mostly goes to waste. While some
          people are not getting enough to eat, somewhere, good food is going to
          waste. This application is a platform where people who have food will
          post the details about it in the system and those seeking it will be
          able to contact them. Also, anyone with intent to feed others are
          welcome to post available food details in our platform.
        </Paragraph>
      </RightColmn>

      {/* <div>
          <Input Focus /> <Button>Search</Button>
        </div> */}
    </HomeContainer>
  );
};

export default Homepage;
