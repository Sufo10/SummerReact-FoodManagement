/* eslint-disable no-unused-vars */
import React from 'react';
import homepageStyle from './homepage.style';

const { Title, Paragraph, HomeContainer, DescriptionWrapper, Button, Input } =
  homepageStyle;

const Homepage = () => {
  return (
    <HomeContainer>
      <Title> We Feed </Title>
      <DescriptionWrapper>
        <Paragraph>
          There are several events like wedding parties and worship that are
          frequently conducted in our society. Oftentimes, at the end of the
          event, there is excess food that mostly goes to waste. While some
          people people are not getting enough to eat, somewhere, good food is
          going to-Our application will be a platform where people who have-
          will post the details about it in the system - and those seeking it
          will be able to contact them.
        </Paragraph>
        <div>
          <Input Focus /> <Button>Search</Button>
        </div>
      </DescriptionWrapper>
    </HomeContainer>
  );
};

export default Homepage;
