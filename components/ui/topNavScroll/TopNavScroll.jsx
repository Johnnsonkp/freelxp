import styles from './topnav.module.css'
import { useEffect } from "react";

export default function TopNavInfiniteScroll() {
  useEffect(() => {
    const list = document.querySelector("#list");
    const listContent = Array.from(list.children);

    listContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      list.appendChild(duplicatedItem);
    });
  }, []);

  return (
    <div
      id="carousel-container"
      data-animated
      // className={`dark:bg-light dark:color-dark ${styles.carouselContainer}`}
      className={`!dark:bg-light dark:color-dark ${styles.carouselContainer}`}
    >
      <ul id="list" className={` ${styles.list}`}>
        <li>
          <i className={`fa-solid fa-bullhorn`}></i> AVAILABLE FOR HIRE!{" "}
        </li>
        <li>
          <i className="fa-solid fa-bullhorn"></i> AVAILABLE FOR HIRE!{" "}
        </li>
        <li>
          <i className="fa-solid fa-bullhorn"></i> AVAILABLE FOR HIRE!{" "}
        </li>
        <li>
          <i className="fa-solid fa-bullhorn"></i> AVAILABLE FOR HIRE!{" "}
        </li>
        <li>
          <i className="fa-solid fa-bullhorn "></i> AVAILABLE FOR HIRE!{" "}
        </li>
        <li>
          <i className="fa-solid fa-bullhorn"></i> AVAILABLE FOR HIRE!{" "}
        </li>
        <li>
          <i className="fa-solid fa-bullhorn "></i> AVAILABLE FOR HIRE!{" "}
        </li>
        <li>
          <i className="fa-solid fa-bullhorn "></i> AVAILABLE FOR HIRE!{" "}
        </li>
        <li>
          <i className="fa-solid fa-bullhorn "></i> AVAILABLE FOR HIRE!{" "}
        </li>
      </ul>
    </div>
  );
}
