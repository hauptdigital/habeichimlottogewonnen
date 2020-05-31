import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Cell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: ${(props) => (props.isSelected ? 'yellow' : '#f1f1f1')};
  font-size: 1.25rem;
  height: 100%;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #fef566;
  }
`;

function CouponNumber({ onCouponNumberClick, isSelected, number }) {
  return (
    <Cell onClick={() => onCouponNumberClick(number)} isSelected={isSelected}>
      {number}
    </Cell>
  );
}

CouponNumber.propTypes = {
  number: PropTypes.number,
  onCouponNumberClick: PropTypes.func,
  isSelected: PropTypes.bool,
};

export default CouponNumber;
