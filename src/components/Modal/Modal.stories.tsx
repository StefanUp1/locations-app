import React, { useState } from "react";
import Modal from "./Modal";

export default {
  title: "components/Modal",
  component: Modal,
};

export const Default = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Toggle Modal</button>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(true)} title="Test">
          <div>Test content</div>
        </Modal>
      )}
    </>
  );
};
