import React from "react";
import styled, { keyframes } from "styled-components";

type CubeType = {
  type: string;
};

export const Cube = () => {
  return (
    <CubeContainer>
      <CubeArea>
        <Face type="front"></Face>
        <Face type="back"></Face>
        <Face type="right"></Face>
        <Face type="left"></Face>
        <Face type="top"></Face>
        <Face type="bottom"></Face>
      </CubeArea>
    </CubeContainer>
  );
};

const cubeRotation = keyframes`
  from {
    transform: rotateX(0deg) rotateY(0deg);
  }
  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
`;

// 2. Стили для контейнера, который задает перспективу (глубину)
const CubeContainer = styled.div`
  width: 150px;
  height: 150px;
  perspective: 1000px; /* Создает 3D-пространство */
  margin: 50px auto;
`;

// 3. Стили для самого куба (элемент, который будет вращаться)
const CubeArea = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d; /* Важно: дочерние элементы находятся в 3D-пространстве */
  animation: ${cubeRotation} 10s infinite linear; /* Применяем анимацию */
  background-color: rgba(255, 255, 255, 0);
`;

// 4. Стили для каждой грани куба
const Face = styled.div<CubeType>`
  position: absolute;
  width: 150px;
  height: 150px;
  /* Полупрозрачность для лучшего вида 3D */
  background-color: rgba(255, 255, 255, 0.1);
  z-index: 999999999999999;

  /* Стили для конкретных граней (используя пропсы или отдельные стили) */
  ${(props) =>
    props.type === "front" &&
    "transform: translateZ(75px);  border: 1px solid #FFFFFF;"}
  ${(props) =>
    props.type === "back" &&
    "transform: rotateY(180deg) translateZ(75px); border: 1px solid #FFFFFF;"}
  ${(props) =>
    props.type === "right" &&
    "transform: rotateY(90deg) translateZ(75px); border: 1px solid #FFFFFF;"}
  ${(props) =>
    props.type === "left" &&
    "transform: rotateY(-90deg) translateZ(75px); border: 1px solid #FFFFFF;"}
  ${(props) =>
    props.type === "top" &&
    "transform: rotateX(90deg) translateZ(75px); border: 1px solid #FFFFFF;"}
  ${(props) =>
    props.type === "bottom" &&
    "transform: rotateX(-90deg) translateZ(75px); border: 1px solid #FFFFFF;"}
`;
