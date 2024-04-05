const Contact = ({ contact, deleteContact }) => (
	<div>
		{contact.name}: {contact.number}
		<button onClick={() => deleteContact(contact.id)}>Delete</button>
	</div>
);
export default Contact;
