const SearchBox = ({ filter, setFilter }) => {
	return (
		<input
			type="text"
			value={filter}
			onChange={(event) => setFilter(event.target.value)}
			placeholder="Search by name"
		/>
	);
};

export default SearchBox;
