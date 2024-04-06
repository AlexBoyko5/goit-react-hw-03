import styles from './SearchBox.module.css';
const SearchBox = ({ filter, setFilter }) => {
	return (
		<input
			className={styles.SearchBox}
			type="text"
			value={filter}
			onChange={(event) => setFilter(event.target.value)}
			placeholder="Search by name"
		/>
	);
};

export default SearchBox;
