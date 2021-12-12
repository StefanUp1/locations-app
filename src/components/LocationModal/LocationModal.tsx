import React from "react";
import Modal from "components/Modal";
import { ModalProps } from "components/Modal/Modal";
import LocationContent from "components/LocationContent";
import { LocationContentProps } from "components/LocationContent/LocationContent";

import "./location-modal.scss";

interface LocationModalProps
  extends LocationContentProps,
    Omit<ModalProps, "children" | "className"> {
  description: string;
}

const LocationModal = ({
  userCount,
  createdAt,
  viewCount,
  description,
  onClose,
  onDone,
  title,
}: LocationModalProps) => {
  return (
    <Modal title={title} onClose={onClose} onDone={onDone}>
      <LocationContent
        userCount={userCount}
        createdAt={createdAt}
        viewCount={viewCount}
      />
      <div className="location-modal__description">
        <h4 className="location-modal__description-title">Description</h4>
        <p className="location-modal__description-content">{description}</p>
      </div>
    </Modal>
  );
};

export default LocationModal;
