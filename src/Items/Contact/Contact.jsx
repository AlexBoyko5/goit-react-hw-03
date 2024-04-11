
import styles from'./Contact.module.css'
import { FaUser, FaPhone } from 'react-icons/fa';
const Contact = ({ contact, deleteContact }) => (
	<div className={styles.Contact}>
		<FaUser className={styles.icon} /> {contact.name}: 
		<FaPhone className={styles.icon} /> {contact.number}
		<button className={styles.buttonDel} onClick={() => deleteContact(contact.id)}>Delete</button>
	</div>
);
export default Contact;
