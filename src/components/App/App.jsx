import { useState, useEffect } from 'react';
import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';

import './App.css';
import 'modern-normalize';

function App() {
	const [contacts, setContacts] = useState(() => {
		const savedContacts = localStorage.getItem('contacts');
		return savedContacts
			? JSON.parse(savedContacts)
			: [
					{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
					{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
					{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
					{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
			  ];
	});
	useEffect(() => {
		localStorage.setItem('contacts', JSON.stringify(contacts));
	}, [contacts]);

	const [filter, setFilter] = useState('');
	const filteredContacts = contacts.filter((contact) =>
		contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
	);
	const deleteContact = (id) => {
		setContacts(contacts.filter((contact) => contact.id !== id));
	};

	return (
		<div className="App">
			<h1>Phonebook</h1>
			<ContactForm
				className="ContactForm"
				contacts={contacts}
				setContacts={setContacts}
			/>
			<SearchBox
				className="SearchBox"
				filter={filter}
				setFilter={setFilter}
			/>
			<ContactList
				className="ContactList"
				contacts={filteredContacts}
				deleteContact={deleteContact}
			/>
		</div>
	);
}

export default App;
