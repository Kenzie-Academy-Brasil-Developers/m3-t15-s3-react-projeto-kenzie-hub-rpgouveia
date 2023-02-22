import React from "react";
import Modal from "react-modal";
import { StyledStdModal } from "./styles";

Modal.setAppElement("#root");

const StdModal = ({ modalTitle, modalIsOpen, handleModal, children }) => {
    const modalOverlay = {
        overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
    };

    return (
        <StyledStdModal
            isOpen={modalIsOpen}
            onRequestClose={handleModal}
            style={modalOverlay}
        >
            <div className="modal-header">
                <h1>{modalTitle}</h1>
                <button
                    type="button"
                    className="modal-close-btn"
                    onClick={handleModal}
                >
                    X
                </button>
            </div>
            {children}
        </StyledStdModal>
    );
};

export default StdModal;
