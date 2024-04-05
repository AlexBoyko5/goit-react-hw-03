import Contact from '../Contact/Contact';
const ContactList = ({ contacts, deleteContact }) => (
	<div>
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
