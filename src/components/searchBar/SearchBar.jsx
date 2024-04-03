import styles from "./searchBar.module.css";

const SearchBar = ({ isSearchVisible }) => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={`${styles.searchBar} ${
          isSearchVisible ? styles.visible : ""
        }`}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
