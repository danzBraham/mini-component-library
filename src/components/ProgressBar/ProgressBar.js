/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    height: 8,
    radius: 4,
    padding: 0,
  },
  medium: {
    height: 12,
    radius: 4,
    padding: 0,
  },
  large: {
    height: 16,
    radius: 8,
    padding: 4,
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return (
    <Wrapper
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      style={{ "--radius": styles.radius + "px", "--padding": styles.padding + "px" }}
    >
      <BarWrapper style={{ "--height": styles.height + "px" }}>
        <Bar style={{ "--width": value + "%" }} />
      </BarWrapper>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--radius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  height: var(--height);
  border-radius: 4px;
  overflow: clip;
`;

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
