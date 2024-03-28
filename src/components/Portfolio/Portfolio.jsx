import {Toolbar} from "../Toolbar/Toolbar";
import {ProjectList} from "../ProjectList/ProjectList";
import styles from "./Portfolio.module.css";
import {useState} from "react";
import {v4 as uuidv4} from "uuid";
import data from "../../mockData/data.json";

const photos = data.map((item) => {
  item.id = uuidv4();
  return item;
  // return {...item, id: uuidv4()};
});

const filters = ["All", "Websites", "Flayers", "Business Cards"];

export const Portfolio = () => {
  const [selected, setSelected] = useState("All");
  const [list, setList] = useState(photos);

  const onFilter = (filter) => {
    setSelected(filter);
    filter === "All"
      ? setList(photos)
      : setList(photos.filter((item) => item.category === filter));
  };

  return (
    <div className={styles.container}>
      <Toolbar
        filters={filters}
        onSelectFilter={onFilter}
        selected={selected}
      />
      <ProjectList list={list} />
    </div>
  );
};
