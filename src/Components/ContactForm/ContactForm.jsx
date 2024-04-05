import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

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
				const newContact = { id: nanoid, ...values };
				setContacts([...contacts, newContact]);
				resetForm();
			}}
		>
			<Form>
				<Field name="name" type="text" placeholder="Name" />
				<ErrorMessage name="name" component="div" />
				<Field name="number" type="text" placeholder="Number" />
				<ErrorMessage name="number" component="div" />
				<button type="submit"> Add contact</button>
			</Form>
		</Formik>
	);
};
export default ContactForm;
