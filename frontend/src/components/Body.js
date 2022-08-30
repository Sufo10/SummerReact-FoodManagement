import { useReducer } from 'react';

import {
  MainContainerWrapper,
  MainContainer,
  PostContainer,
  PostHeading,
  PostContent,
  PostDescription,
  FeedCapacity,
  FoodLocation,
  ContactInfo,
} from '../styled/Body.style';

const fposts = [
  {
    id: 1,
    pheading: 'Food form wedding party',
    pdesc: 'sdajk asdf dada aksdfan adfak asdfa',
    pcapacity: 'food available for 50 people',
    plocation: 'Chabil',
    pcontact: 'contact no: 2345673526',
    title: 'Todo 1',
  },
  {
    id: 2,
    pheading: 'Food form bratabandha',
    pdesc: 'sdajk asdf dada aksdfan adfak asdfa',
    pcapacity: 'food available for 20 people',
    plocation: 'Kamalpokheri',
    pcontact: 'contact no: 2345673526',
    title: 'Todo 1',
  },
  {
    id: 3,
    pheading: 'Food form sharadha',
    pdesc: 'sdajk asdf dada aksdfan adfak asdfa',
    pcapacity: 'food available for 5 people',
    plocation: 'Kamalpokheri',
    pcontact: 'contact no: 2345673526',
    title: 'Todo 1',
  },
  {
    id: 4,
    pheading: 'Food form wedding party',
    pdesc: 'food from wedding party',
    pcapacity: 'food available for 20 people',
    plocation: 'Kamalpokheri',
    pcontact: 'contact no: 2345673526',
    title: 'Todo 1',
  },
];

const reducer = state => {
  return state.map(food => {
    return food;
  });
};

const MainContainerC = () => {
  const [foods] = useReducer(reducer, fposts);

  return (
    <>
      <MainContainerWrapper>
        <MainContainer>
          {foods.map(food => (
            <div key={food.id}>
              <PostContainer>
                <PostHeading>{`${food.pheading}`}</PostHeading>
                <PostContent>
                  <PostDescription>{`description : ${food.pdesc}`}</PostDescription>
                  <FeedCapacity>{`feed capacity : ${food.pcapacity}`}</FeedCapacity>
                  <FoodLocation>{`food location : ${food.plocation}`}</FoodLocation>
                  <ContactInfo>{`cotact number : ${food.pcontact}`}</ContactInfo>
                </PostContent>
              </PostContainer>
            </div>
          ))}
        </MainContainer>
      </MainContainerWrapper>
    </>
  );
};

export default MainContainerC;
