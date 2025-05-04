import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentaionBit>
        {displayedValue}
        <IconWrapper style={{ "--size": 24 + "px" }}>
          <Icon id="chevron-down" size={24} strokeWidth={2} />
        </IconWrapper>
      </PresentaionBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  border-radius: 8px;
  position: relative;
  width: max-content;

  &:hover {
    color: ${COLORS.black};
  }

  &:focus-within {
    outline: 2px solid ${COLORS.primary};
    outline: 2px auto --webkit-focus-ring-color;
    outline-offset: 2px;
  }
`;

const NativeSelect = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const PresentaionBit = styled.div`
  padding: 12px 16px;
  padding-right: 48px;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
  color: inherit;
`;

export default Select;
