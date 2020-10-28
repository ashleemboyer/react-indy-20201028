import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Modal.module.scss';

const Modal = ({ title, onClose, actions, children }) => (
  <div className={styles.Modal}>
    <div className={styles['Modal--card']}>
      <div className={styles['Modal--title']}>
        <span>{title}</span>
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

export default Modal;
