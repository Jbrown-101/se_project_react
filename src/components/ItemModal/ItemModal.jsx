import "./ItemModal.css";
import close from "../../assets/close.png";
import { useState, useEffect } from "react";

function ItemModal({ activeModal, onClose, card, onDelete }) {
  const [isConfirming, setIsConfirming] = useState(false);

  useEffect(() => {
    if (activeModal !== "preview") {
      setIsConfirming(false);
    }
  }, [activeModal]);

  const handleDeleteClick = () => {
    setIsConfirming(true);
  };

  const handleConfirmDelete = () => {
    onDelete(card._id);
    setIsConfirming(false);
  };

  const handleCancelDelete = () => {
    setIsConfirming(false);
  };

  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button onClick={onClose} type="button" className="modal__close">
          <img src={close} alt="close" className="modal__close-btn" />
        </button>
        <img src={card.imageUrl} alt="Card Image" className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">
            {card.name}{" "}
            <button
              onClick={handleDeleteClick}
              type="button"
              className="modal__delete-btn"
            >
              Delete item
            </button>
          </h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
        {isConfirming && (
          <div className="modal__confirm">
            <div className="modal__confirm-box">
              <button
                onClick={handleCancelDelete}
                type="button"
                className="modal__confirm-close"
              >
                <img
                  src={close}
                  alt="close"
                  className="modal__confirm-close-btn"
                />
              </button>
              <p className="modal__confirm-text">
                Are you sure you want to delete this item?
                <br />
                This action is irreversible.
              </p>
              <button
                onClick={handleConfirmDelete}
                type="button"
                className="modal__confirm-yes"
              >
                Yes, delete item
              </button>
              <button
                onClick={handleCancelDelete}
                type="button"
                className="modal__confirm-cancel"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemModal;
