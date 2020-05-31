import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Cell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: #f1f1f1;
  font-size: 1.25rem;
  height: 100%;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #fef566;
  }
`;

function CouponNumber(props) {
  return <Cell>{props.number}</Cell>;
}

CouponNumber.propTypes = {
  number: PropTypes.number,
};

export default CouponNumber;
