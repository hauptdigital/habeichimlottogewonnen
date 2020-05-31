import React from 'react';
import styled from '@emotion/styled';
import CouponNumber from './CouponNumber';

const Title = styled.input``;

const CouponNumberWrapper = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 7fr 7fr 7fr 7fr 7fr 7fr 7fr;
  grid-template-rows: 7fr 7fr 7fr 7fr 7fr 7fr 7fr;
  height: 600px;
`;

const maxCouponNumbers = 49;
const couponNumberFields = [];
for (let number = 1; number <= maxCouponNumbers; number++) {
  couponNumberFields.push(number);
}

function useForceUpdate() {
  const [value, setValue] = React.useState(0);
  return () => setValue((value) => ++value);
}

function LotteryTicket() {
  const forceUpdate = useForceUpdate();
  const [selectedNumbers, setSelectedNumbers] = React.useState([]);

  const indexOfNumber = (number) => {
    return selectedNumbers.findIndex(
      (selectedNumber) => selectedNumber === number
    );
  };

  const isSelected = (number) => {
    const index = indexOfNumber(number);
    if (index === -1) {
      return false;
    }
    return true;
  };

  function handleCouponNumberClick(number) {
    const numberIsAlreadySelected = isSelected(number);
    if (numberIsAlreadySelected) {
      selectedNumbers.splice(indexOfNumber(number), 1);
    } else {
      selectedNumbers.push(number);
      selectedNumbers.sort((a, b) => {
        return a - b;
      });
    }
    setSelectedNumbers(selectedNumbers);
    forceUpdate();
  }

  return (
    <>
      <Title placeholder="Titel" />
      <CouponNumberWrapper>
        {couponNumberFields.map((couponNumber) => (
          <CouponNumber
            key={couponNumber}
            number={couponNumber}
            isSelected={isSelected(couponNumber)}
            onCouponNumberClick={handleCouponNumberClick}
          />
        ))}
      </CouponNumberWrapper>
    </>
  );
}

export default LotteryTicket;
