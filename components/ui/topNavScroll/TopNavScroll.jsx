import styles from './topnav.module.css'
import { useEffect } from "react";

export default function TopNavInfiniteScroll() {
  useEffect(() => {
    const list = document.querySelector("#list");
    const listContent = Array.from(list.children);

    listContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem?.setAttribute("aria-hidden", true);
      list.appendChild(duplicatedItem);
    });
  }, []);

  return (
    <div
      id="carousel-container"
      data-animated
      className={`!dark:bg-light dark:color-dark ${styles.carouselContainer}`}
    >
      <ul id="list" className={` ${styles.list}`}>
        <li>
          <img src="https://img.icons8.com/?size=100&id=441&format=png&color=f5f5f5" alt="megaphone icon" className="inline-block w-4 h-4 ml-1 mr-2"/>
          AVAILABLE FOR HIRE!{" "}
        </li>
        <li>
          <img src="https://img.icons8.com/?size=100&id=441&format=png&color=f5f5f5" alt="megaphone icon" className="inline-block w-4 h-4 ml-1 mr-2"/>
          AVAILABLE FOR HIRE!{" "}
        </li>
        <li>
          <img src="https://img.icons8.com/?size=100&id=441&format=png&color=f5f5f5" alt="megaphone icon" className="inline-block w-4 h-4 ml-1 mr-2"/>
          AVAILABLE FOR HIRE!{" "}
        </li>
        <li>
          <img src="https://img.icons8.com/?size=100&id=441&format=png&color=f5f5f5" alt="megaphone icon" className="inline-block w-4 h-4 ml-1 mr-2"/>
          AVAILABLE FOR HIRE!{" "}
        </li>
        <li>
          <img src="https://img.icons8.com/?size=100&id=441&format=png&color=f5f5f5" alt="megaphone icon" className="inline-block w-4 h-4 ml-1 mr-2"/>
          AVAILABLE FOR HIRE!{" "}
        </li>
        <li>
          <img src="https://img.icons8.com/?size=100&id=441&format=png&color=f5f5f5" alt="megaphone icon" className="inline-block w-4 h-4 ml-1 mr-2"/>
          AVAILABLE FOR HIRE!{" "}
        </li>
      </ul>
    </div>
  );
}
