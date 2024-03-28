import styles from "./ProjectList.module.css";

export const ProjectList = ({list}) => {
  return (
    <ul className={styles.list}>
      {list.map((item) => (
        <li className={styles.item} key={item.id}>
          <img src={item.img} />
        </li>
      ))}
    </ul>
  );
};
