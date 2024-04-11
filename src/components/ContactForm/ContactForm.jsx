import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const validationSchema = Yup.object({
	name: Yup.string()
		.min(3, 'Must be at least 3 characters long')
		.max(50, 'Must be no more than 50 characters')
		.required('Required field'),
	number: Yup.string()
		.min(3, 'Must be at least 3 characters long')
		.max(50, 'Must be no more than 50 characters')
		.required('Required field'),
});
const ContactForm = ({ contacts, setContacts }) => {
	return (
		<Formik
			
			initialValues={{ name: '', number: '' }}
			validationSchema={validationSchema}
			onSubmit={(values, { resetForm }) => {
				const newContact = { id: nanoid(), ...values };
				setContacts([...contacts, newContact]);
				resetForm();
			}}
		>
			<Form className={styles.ContactForm}>
                <label htmlFor='name'>Name</label>
				<Field name="name" type="text" placeholder="Name" />
				<ErrorMessage name="name" component="div" />
                <label htmlFor='number'>Number</label>
				<Field name="number" type="text" placeholder="Number" />
				<ErrorMessage name="number" component="div" />
				<button className={styles.buttonAdd} type="submit"> Add contact</button>
			</Form>
		</Formik>
	);
};
export default ContactForm;
