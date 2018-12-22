import React from 'react';
import styled from 'styled-components';
// import mpgimg from './images/mpg.png';

const Description = (props) => {

  const Container = styled.div`
    display: grid;
    grid-template-columns: 30% 70%;
    grid-template-rows: auto auto auto 1fr auto 1fr 1fr 1fr 1fr 1fr;
    font-family: Helvetica;
  `;

  const Thecar = styled.div`
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    justify-self: end;
  `;

  const Company = styled.div`
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    margin-left: 10px;
  `;

  const Carname = styled.div`
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    margin-left: 10px;
  `;

  const Year = styled.div`
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    margin-left: 150px;
  `;

  const Star = styled.div`
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    margin-left: 10px;
  `;

  const Yellow = styled.div`
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    color: orange;
  `;

  const Trips = styled.div`
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    margin-left: 100px;
  `;

  const Mpg = styled.div`
    grid-column: 2 / 3;
    grid-row: 4 / 5;
    margin-left: 55px;
    margin-top: 10px;
  `;

  const Img = styled.img`
    src: url(${props => props.src});
    grid-column: 2 / 3;
    grid-row: 4 / 5;
    margin-left: 10px;
  `;

  const Img2 = styled.img`
    src: url(${props => props.src});
    grid-column: 2 / 3;
    grid-row: 4 / 5;
    margin-left: 250px;
  `;

  const Gas = styled.div`
    grid-column: 2 / 3;
    grid-row: 4 / 5;
    margin-left: 290px;
    margin-top: 10px;
  `;

  const Img3 = styled.img`
    src: url(${props => props.src});
    grid-column: 2 / 3;
    grid-row: 4 / 5;
    margin-left: 10px;
    margin-top: 50px;
  `;

  const Doors = styled.div`
    grid-column: 2 / 3;
    grid-row: 4 / 5;
    margin-left: 58px;
    margin-top: 55px;
  `;

  const Img4 = styled.img`
    grid-column: 2 / 3;
    grid-row: 4 / 5;
    margin-left: 245px;
    margin-top: 50px;
  `;

  const Seats = styled.div`
    grid-column: 2 / 3;
    grid-row: 4 / 5;
    margin-left: 295px;
    margin-top: 55px;
  `;

  const D1 = styled.div`
    grid-column: 1 / 2;
    grid-row: 5 / 6;
    justify-self: end;
  `;

  const D2 = styled.div`
    grid-column: 2 / 3;
    grid-row: 5 / 6;
    margin-left: 10px;
  `;

  const B1 = styled.div`
    grid-column: 1 / 2;
    grid-row: 6 / 7;
    justify-self: end;
    align-self: center;
  `;

  const B2 = styled.div`
    grid-column: 2 / 3;
    grid-row: 6 / 7;
    margin-left: 10px;
    align-self: center;
  `;

  const F1 = styled.div`
    grid-column: 1 / 2;
    grid-row: 7 / 8;
    justify-self: end;
  `;

  const F2 = styled.div`
    grid-column: 2 / 3;
    grid-row: 7 / 8;
    margin-left: 10px;
  `;

  const E1 = styled.div`
    grid-column: 1 / 2;
    grid-row: 8 / 9;
    justify-self: end;
  `;

  const E2 = styled.div`
    grid-column: 2 / 3;
    grid-row: 8 / 9;
    margin-left: 10px;
  `;

  const G1 = styled.div`
    grid-column: 1 / 2;
    grid-row: 9 / 10;
    justify-self: end;
  `;

  const G2 = styled.div`
    grid-column: 2 / 3;
    grid-row: 9 / 10;
    margin-left: 10px;
  `;

  const Faq = styled.div`
    grid-column: 1 / 2;
    grid-row: 10 / 11;
    justify-self: end;
  `;

  const Faq1 = styled.div`
    grid-column: 2 / 3;
    grid-row: 10 / 11;
    margin-left: 10px;
  `;

  return (
    <Container>
      <Thecar>THE CAR</Thecar>
      <Company>{props.car[1]+"\'s"}</Company>
      <Carname>{props.car[2]}</Carname>
      <Year>2018</Year>
      <Star>
        <Yellow className="fa fa-star"></Yellow>
        <Yellow className="fa fa-star"></Yellow>
        <Yellow className="fa fa-star"></Yellow>
        <Yellow className="fa fa-star"></Yellow>
        <span className="fa fa-star"></span>
      </Star>
      <Trips>{props.car[3] + ' trips'}</Trips>
      <Img src="./images/mpg.png" />
      <Img2 src="./images/gas.png" />
      <Mpg>{props.car[4]}</Mpg>
      <Gas>{props.car[5]}</Gas>
      <Img3 src="./images/doors.png" />
      <Doors>{props.car[6]}</Doors>
      <Img4 src="./images/seats.png" />
      <Seats>{props.car[7] + ' seats'}</Seats>
      <D1>DESCRIPTION</D1>
      <D2>{props.car[8]}</D2>
      <B1>BUSINESS CLASS</B1>
      <B2>{props.car[9]}</B2>
      <F1>FEATURES</F1>
      <F2>{props.car[10]}</F2>
      <E1>EXTRAS</E1>
      <E2>{props.car[11]}</E2>
      <G1>GUIDELINES</G1>
      <G2>{props.car[12]}</G2>
      <Faq>FAQS</Faq>
      <Faq1>{props.car[13]}</Faq1>
    </Container>
  )
}


export default Description;

// require('./images/mpg.png')






