import React, { useState } from "react";

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
  let touchStart = 0;
  const handleTouchStart = (e) => {
    touchStart = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (touchEnd - touchStart < -30 && status === 0) {
      setStatus(1);
    } else if (touchEnd - touchStart > 30 && status === 1) {
      setStatus(0);
    }
  };

  return {
    handleTouchEnd,
    handleTouchStart,
    setStatus,
    touchStart,
    status,
  };
}
