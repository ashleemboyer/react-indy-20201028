import { useState, createRef } from 'react';
import { AboutForm, Modal } from '@components';

const HomePage = () => {
  const buttonRef = createRef();
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
    buttonRef.current.focus();
  };

  const modalActions = [
    {
      label: 'Ok!',
      onAction: () => {
        closeModal();
      },
    },
  ];

  return (
    <>
      <h1>Hello, HomePage!</h1>
      <button
        ref={buttonRef}
        onClick={() => {
          setShowModal(true);
        }}
      >
        Open Modal
      </button>
      {showModal && (
        <Modal
          title="I'm a modal title!"
          onClose={() => {
            closeModal();
          }}
          actions={modalActions}
        >
          <AboutForm />
        </Modal>
      )}
    </>
  );
};

export default HomePage;
