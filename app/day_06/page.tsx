import { Solutions, SolutionsB } from "./functions/functions";
import styles from "./page.module.css";

import { TestInput, Input } from "./input/input";

const getInput = (): string[] => Input.split("\n").map(String);

export default function Home() {
  return (
    <main className={styles.main}>
      <div>Day 06</div>
      {/* <div>Part A = {Solutions(getInput()).partA}</div> */}
      <div>Part B = {SolutionsB(getInput()).partB}</div>
    </main>
  );
}
