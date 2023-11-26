import { PartA, PartB } from "./functions/functions";
import styles from "./page.module.css";

import { TestInput, Input } from "./input/input";

const getInput = (): string[] => TestInput.split("\n").map(String);

export default function Home() {
  return (
    <main className={styles.main}>
      <div>Day 02</div>
      <div>Part A = {PartA(getInput())}</div>
      <div>Part B = {PartB(getInput())}</div>
    </main>
  );
}
