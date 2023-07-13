import { useState } from "react";
import styles from "./Counter.module.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className={styles.counterText}>count:{count}</h1>
      <h6>Number is {count % 2 === 0 ? "even" : "odd"}</h6>

      <button className={styles.btn} onClick={() => setCount(0)}>
       Reset
      </button>

      <button className={styles.btn} onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className={styles.btn} onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
