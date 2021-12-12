import React, { ReactNode, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import Close from "assets/images/Close.svg";

import "./modal.scss";
import { ESCAPE_KEY } from "constants/keys";
import onKeyPress from "helpers/onKeyPress";

const modalElement = document.getElementById("modal-root");

export interface ModalProps {
  children: ReactNode;
  onClose: () => void;
  title: string;
  onDone?: () => void;
}

const Modal = ({ children, onClose, title, onDone = onClose }: ModalProps) => {
  const { t } = useTranslation();

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      onKeyPress(e, onClose, ESCAPE_KEY);
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleEscape, false);
    return () => window.removeEventListener("keydown", handleEscape, false);
  }, [handleEscape]);

  return createPortal(
    <div className="modal">
      <div className="modal__overlay" onClick={onClose} />
      <div className="modal-content">
        <div className="modal__content-header">
          <h3 className="modal__content-header-title">{title}</h3>
          <button tabIndex={0} onClick={onClose}>
            <img src={Close} width="16" height="16" alt={t("close")} />
          </button>
        </div>
        <div className="modal__content-body">{children}</div>
        <div className="modal__content-footer">
          <button
            className="modal__content-footer-button"
            onClick={onDone}
            tabIndex={0}
          >
            {t("done")}
          </button>
        </div>
      </div>
    </div>,
    modalElement as Element
  );
};

export default Modal;
