import { useState } from 'react';
import ContactList from '../ContactList/ContactList';
// import ContactForm from '../ContactForm/ContactForm';
// import SearchBox from '../SearchBox/SearchBox';

import './App.css';
import 'modern-normalize';
import clsx from 'clsx';

function App() {
	const [contacts, setContacts] = useState([
		{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
		{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
		{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
		{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
	]);

	return (
		<div>
			<h1>Phonebook</h1>
			{/* <ContactForm contacts={contacts} setContacts={setContacts} /> */}
			{/* <SearchBox contacts={contacts} /> */}
			<ContactList contacts={contacts} />
		</div>
	);
}

export default App;
