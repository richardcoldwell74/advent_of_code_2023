import { PartA, PartB } from "./functions/functions";
import styles from "./page.module.css";

import { TestInput, TestInputTwo, Input } from "./input/input";

const getInput = (): string[] => Input.split("\n").map(String);

export default function Home() {
  return (
    <main className={styles.main}>
      <div>Day 01</div>
      <div>Part A = {PartA(getInput())}</div>
      <div>Part B = {PartB(getInput())}</div>
    </main>
  );
}
