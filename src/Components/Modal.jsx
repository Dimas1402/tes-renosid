import "../Assets/styles/index.css";

export const Modal = ({ handleClose, handleRemove, open, content, title }) => {
  return (
    <>
      {open ? (
        <div id="modal">
          <div onClick={handleClose} className="modal-bg" />
          <div className="modal">
            <section id="modal-header">
              <div className="modal-header">
                <div className="d-flex">
                  <h1>{title}</h1>
                  <button onClick={handleClose} className="btn-close-header">
                    <span className="fs-30" aria-hidden="true">
                      ×
                    </span>
                  </button>
                </div>
                <hr />
              </div>
            </section>
            <section id="modal-body">
              <div className="modal-body">{content}</div>
            </section>
            <section id="modal-footer">
              <div className="modal-footer">
                <hr />
                <div className="d-flex pt-1 pb-1 footer-btn">
                  <button onClick={handleClose} className="btn-close">
                    Close
                  </button>
                  &nbsp;&nbsp;
                  <button onClick={handleRemove} className="btn-remove">
                    Delete
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      ) : null}
    </>
  );
};
