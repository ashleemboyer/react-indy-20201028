import { useLayoutEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Modal.module.scss';

const Modal = ({ title, onClose, actions, children }) => {
  useLayoutEffect(() => {
    const modalElement = document.getElementById('modal');
    const focusableElements = modalElement.querySelectorAll('button');

    focusableElements[0].focus();

    modalElement.addEventListener('keydown', (e) => {
      const activeElement = document.activeElement;
      const isFirstElement = activeElement === focusableElements[0];
      const isLastElement =
        activeElement === focusableElements[focusableElements.length - 1];

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'Tab' && !e.shiftKey && isLastElement) {
        e.preventDefault();
        focusableElements[0].focus();
      } else if (e.key === 'Tab' && e.shiftKey && isFirstElement) {
        e.preventDefault();
        focusableElements[focusableElements.length - 1].focus();
      }
    });
  }, []);

  return (
    <div className={styles.Modal}>
      <div
        id="modal"
        className={styles['Modal--card']}
        role="dialog"
        aria-labelledby="modal-title"
        aria-modal="true"
      >
        <div className={styles['Modal--title']}>
          <span id="modal-title">{title}</span>
          <button onClick={onClose}>
            <FontAwesomeIcon icon="times" />
          </button>
        </div>
        <div className={styles['Modal--body']}>{children}</div>
        <div className={styles['Modal--footer']}>
          {actions.map((action) => (
            <button onClick={action.onAction}>{action.label}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
