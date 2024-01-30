import styles from "./styles.module.css";

const URL_1 = "https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=40&dpr=4&h=320"
const URL_2 = "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=364&q=40&dpr=4";

export default function Travels() {
  return (
    <main className={styles.travels}>
      <div className={styles.poster}>
        <img src={URL_1} alt="Travel to anywhere" draggable={false} />
        <h2>Travel to anywhere</h2>
      </div>
      <div className={styles.poster}>
        <img src={URL_2} alt="Make your own travels" draggable={false} />
        <h2>Make your own travels</h2>
      </div>
    </main>
  )
}
