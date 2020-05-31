import React from 'react';
import styled from '@emotion/styled';
import CouponNumber from './CouponNumber';

const CouponNumberWrapper = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 7fr 7fr 7fr 7fr 7fr 7fr 7fr;
  grid-template-rows: 7fr 7fr 7fr 7fr 7fr 7fr 7fr;
  height: 600px;
`;

const maxCouponNumbers = 49;
const couponNumberFields = [];

for (let couponNumber = 1; couponNumber <= maxCouponNumbers; couponNumber++) {
  couponNumberFields.push(
    <CouponNumber key={couponNumber} number={couponNumber} />
  );
}

function LotteryTicket() {
  return <CouponNumberWrapper>{couponNumberFields}</CouponNumberWrapper>;
}

export default LotteryTicket;
