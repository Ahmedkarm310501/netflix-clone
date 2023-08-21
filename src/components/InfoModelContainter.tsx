"use client";
import React from "react";
import InfoModal from "./InfoModal";
import useInfoModalStore from "@/hooks/useInfoModalStore";

type Props = {};

const InfoModelContainter = (props: Props) => {
  const { isOpen, closeModal } = useInfoModalStore();
  return <InfoModal visible={isOpen} onClose={closeModal} />;
};

export default InfoModelContainter;
