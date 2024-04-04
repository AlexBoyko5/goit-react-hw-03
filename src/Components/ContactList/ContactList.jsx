import Contact from '../Contact/Contact';
const ContactList = ({ contacts }) => (
	<div>
		{contacts.map((contact) => (
			<Contact key={contact.id} contact={contact} />
		))}
	</div>
);
export default ContactList;
