import { useState } from 'react';
import { Modal } from '@components';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  const modalActions = [
    {
      label: 'Ok!',
      onAction: () => {
        setShowModal(false);
      },
    },
  ];

  return (
    <>
      <h1>Hello, HomePage!</h1>
      <button
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
            setShowModal(false);
          }}
          actions={modalActions}
        >
          <p>I'm in the modal body.</p>
        </Modal>
      )}
    </>
  );
};

export default HomePage;
