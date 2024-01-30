import { useEffect, useRef } from "react";
import styles from "./styles.module.css";

const URLS = [
  "https://images.unsplash.com/photo-1502003148287-a82ef80a6abc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
  "https://images.unsplash.com/photo-1573998375492-5fc9afb06408?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=438&q=80",
  "https://images.unsplash.com/photo-1480996408299-fc0e830b5db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
]

export default function Posts() {
  const postsRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', event => {
      event.preventDefault();
      console.log(window.scrollY)
    });

  }, []);

  return (
    <section className={styles.posts}>
      <h1 className={styles.title}>Popular Posts</h1>
      <div className={styles.posts_container}>
        <div className={styles.post} ref={postsRef}>
          <img src={URLS[0]} alt="Travel in Canada" draggable={false} />
          <h3>Living in Canada</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat et repudiandae consequuntur! </p>
        </div>
        <div className={styles.post}>
          <img src={URLS[1]} alt="Things to do in Ouro Preto - MG ?" draggable={false} />
          <h3>Things to do in Ouro Preto - MG ?</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat et repudiandae consequuntur!</p>
        </div>
        <div className={styles.post}>
          <img src={URLS[2]} alt="How is living in Bali ?" draggable={false} />
          <h3>How is living in Bali ?</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat et repudiandae consequuntur!</p>
        </div>
        <div className={styles.post}>
          <img src={URLS[3]} alt="Traveling in Vietnam" draggable={false} />
          <h3>Traveling in Vietnam</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat et repudiandae consequuntur!</p>
        </div>
      </div>
    </section>
  )
}
