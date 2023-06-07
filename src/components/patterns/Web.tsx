import styled from "styled-components";
import Image from "next/image";

export const TopWeb = styled(Image).attrs({
  alt: "",
  draggable: false,
  src: "/top-web.png",
  width: 2880,
  height: 632
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  object-fit: contain;
  user-select: none;
  z-index: -2;
  transform: translateY(-30%);

  @media screen and (max-width: 720px) {
    width: 300%;
    left: 50%;
    transform: translate(-50%, -30%)
  }
`;

export const BottomWeb = styled(TopWeb).attrs({
  src: "/bottom-web.png",
  width: 2880,
  height: 730
})`
  top: unset;
  bottom: 0;
  z-index: -1;
  transform: translateY(30%);

  @media screen and (max-width: 720px) {
    transform: translate(-50%, 30%)
  }
`;
