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
      <button
        onClick={() => setIsModalOpen(true)}
        style={{ border: "1px solid black", padding: 5 }}
      >
        Open Modal
      </button>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)} title="Test">
          <div>Test content</div>
        </Modal>
      )}
    </>
  );
};
