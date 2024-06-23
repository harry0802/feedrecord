import React, { useState, useEffect, useRef } from "react";

export const createRecordState = function () {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentData, setCurrentData] = useState(null);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const getCurrentData = (date) => {
    setCurrentData(date);
  };

  return {
    isModalOpen,
    currentData,
    getCurrentData,
    openModal,
    closeModal,
  };
};

export function dragList() {
  const [status, setStatus] = useState(0);
  const draggingRef = useRef(null);
  const touchStartX = useRef(0);
  const currentX = useRef(0);
  const deltaX = useRef(0);
  const animationFrameId = useRef(null);
  const resistance = 0.5;

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (animationFrameId.current)
      cancelAnimationFrame(animationFrameId.current);

    let translateX = 0;
    if (deltaX.current < -10 && status === 0) {
      setStatus(1);
      translateX = -50;
    } else if (deltaX.current > 0 && status === 1) {
      setStatus(0);
      translateX = 0;
    } else {
      translateX = status === 1 ? -50 : 0;
    }

    if (draggingRef.current) {
      draggingRef.current.style.transition = "transform 0.3s ease-out";
      draggingRef.current.style.transform = `translate3d(${translateX}px, 0, 0)`;
    }

    deltaX.current = 0;
  };

  const handleTouchMove = (e) => {
    currentX.current = e.touches[0].clientX;
    deltaX.current = currentX.current - touchStartX.current;

    if (animationFrameId.current)
      cancelAnimationFrame(animationFrameId.current);

    animationFrameId.current = requestAnimationFrame(() => {
      const resistanceDeltaX = deltaX.current * resistance;
      const isTooOver = deltaX.current > 30;
      if (draggingRef.current && !isTooOver) {
        draggingRef.current.style.transition = "transform 0.3s ease-out";
        draggingRef.current.style.transform = `translate3d(${resistanceDeltaX}px, 0, 0)`;
      }
    });
  };

  const handleClickClose = () => {
    setStatus(0);
    if (draggingRef.current) {
      draggingRef.current.style.transition = "transform 0.3s ease-out";
      draggingRef.current.style.transform = `translate3d(${0}px, 0, 0)`;
    }
  };

  return {
    handleTouchEnd,
    handleTouchStart,
    setStatus,
    handleTouchMove,
    handleClickClose,
    status,
    draggingRef,
  };
}
