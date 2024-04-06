import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';
const ContactList = ({ contacts, deleteContact }) => (
	<div className={styles.ContactList}>
		{contacts.map((contact) => (
			<Contact
				key={contact.id}
				contact={contact}
				deleteContact={deleteContact}
			/>
		))}
	</div>
);
export default ContactList;
