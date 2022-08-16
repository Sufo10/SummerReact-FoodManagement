/* eslint-disable no-unused-vars */
import React from 'react';
import homepageStyle from './homepage.style';

const { Title, Paragraph } = homepageStyle;

const Homepage = () => {
  return (
    <>
      <Title>
        <h1> We Feed </h1>
      </Title>
      <Paragraph>
        <p>
          There are several events like wedding parties and worship that are
          frequently conducted in our society. Oftentimes, at the end of the
          event, there is excess food that mostly goes to waste. While some
          people are not getting enough to eat, somewhere, good food is going to
          waste. Our application will be a platform where people who have food -
          will post the details about it in the system - and those seeking it
          will be able to contact them. Further details can be sorted out by the
          user themselves after the contact, depending upon whether they are
          volunteers who deliver food to the needy or the needy themselves.
          Other types of food - any kind of good food - can be posted in the
          system too.
        </p>
      </Paragraph>
    </>
  );
};

export default Homepage;
