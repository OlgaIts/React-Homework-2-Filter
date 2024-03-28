import styles from "./Toolbar.module.css";

export const Toolbar = ({filters, selected, onSelectFilter}) => {
  return (
    <div className={styles.wrapper}>
      {filters.map((filter) => (
        <button
          className={`${styles.btn} ${
            selected === filter ? styles.active : ""
          }`}
          key={filter}
          onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};
