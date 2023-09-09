import styled from "styled-components";

const ThreeRunningDots = () => (
  <CustomDots>
    <div className="stage">
      <div className="dot-floating"></div>
    </div>
  </CustomDots>
);

export const CustomDots = styled.div`
  width: 100%;
  .snippet::before {
    display: inline-block;
    position: absolute;
    top: 6px;
    left: 6px;
    padding: 0 8px;
    content: attr(data-title);
    font-size: 12px;
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    color: white;
    background-color: rgb(255, 25, 100);
    border-radius: 10px;
    line-height: 20px;
  }

  .snippet:hover {
    cursor: pointer;
    outline: 2px solid rgb(255, 25, 100);
  }
  .stage {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    // padding: 32px 0;
    margin: 0 -5%;
    overflow: hidden;
  }
  .dot-floating {
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #9880ff;
    color: #9880ff;
    animation: dot-floating 3s infinite cubic-bezier(0.15, 0.6, 0.9, 0.1);
  }
  .dot-floating::before,
  .dot-floating::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
  }
  .dot-floating::before {
    left: -12px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #9880ff;
    color: #9880ff;
    animation: dot-floating-before 3s infinite ease-in-out;
  }
  .dot-floating::after {
    left: -24px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #9880ff;
    color: #9880ff;
    animation: dot-floating-after 3s infinite cubic-bezier(0.4, 0, 1, 1);
  }

  @keyframes dot-floating {
    0% {
      left: calc(-50% - 5px);
    }
    75% {
      left: calc(50% + 105px);
    }
    100% {
      left: calc(50% + 105px);
    }
  }
  @keyframes dot-floating-before {
    0% {
      left: -50px;
    }
    50% {
      left: -12px;
    }
    75% {
      left: -50px;
    }
    100% {
      left: -50px;
    }
  }
  @keyframes dot-floating-after {
    0% {
      left: -100px;
    }
    50% {
      left: -24px;
    }
    75% {
      left: -100px;
    }
    100% {
      left: -100px;
    }
  }
`;

export default ThreeRunningDots;
