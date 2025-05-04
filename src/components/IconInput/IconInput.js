import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    height: 24,
    stroke: 1,
    fontSize: 14,
    iconSize: 16,
  },
  large: {
    height: 36,
    stroke: 2,
    fontSize: 18,
    iconSize: 24,
  },
};

const IconInput = ({ label, icon, width = 250, size, ...props }) => {
  if (!SIZES[size]) {
    throw new Error(`Unknown size passed to IconInput: ${size}`);
  }

  const { height, stroke, fontSize, iconSize } = SIZES[size];

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--icon-size": `${iconSize}px` }}>
        <Icon id={icon} size={iconSize} strokeWidth={stroke} />
      </IconWrapper>
      <InputText
        type="text"
        style={{
          "--width": `${width}px`,
          "--height": `${height / 16}rem`,
          "--font-size": `${fontSize / 16}rem`,
          "--stroke": `${stroke}px`,
        }}
        {...props}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto 0;
  width: var(--icon-size);
  height: var(--icon-size);
`;

const InputText = styled.input`
  width: var(--width);
  height: var(--height);
  padding-left: var(--height);
  border: none;
  border-bottom: var(--stroke) solid ${COLORS.black};
  font-size: var(--font-size);
  font-weight: 700;
  color: inherit;
  outline-offset: 2px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
