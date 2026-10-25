import Link from "next/link";
import Pathname from "./Pathname";
import ServerInfo from "./ServerInfo";
import todos from "./todos.json";
import "./index.css";

const colors = ["wd-red", "wd-orange", "wd-yellow", "wd-green", "wd-blue", "wd-purple", "wd-dynamic-green"];
const bgGreen = { backgroundColor: "#b9f6ca", padding: "0.5rem", margin: "0.25rem" };
const styleBoxes = [
  { backgroundColor: "#fecaca" },
  { backgroundColor: "#bfdbfe" },
  { backgroundColor: "#fde68a" },
  bgGreen,
  { backgroundColor: "#d1d5db" },
];

function Add({ a, b }: { a: number; b: number }) {
  return <p>{a} + {b} = {a + b}</p>;
}

export default function Lab3() {
  const hour = 9;
  const nullValue: string | null = null;
  const house = {
    bedrooms: 3,
    bathrooms: 2,
    owners: ["Alex", "Jordan"],
    address: { city: "Boston", state: "MA" },
  };
  const houseWithOptionalGarage: { garage?: { cars: number } } = {};
  const nestedObject = { course: "CS5610", students: ["Ava", "Noah"], house };
  const numbers = [10, 20, 30];
  const sampleSum = 3 + 4;
  const sampleCount = 3;
  const sampleLabel = "sample";
  const isPremium = false;
  const sampleCourse = { _id: "RS101", published: "Yes" };
  const arraySamples = ["Call the dentist", "Buy stamps", "Email the TA"];
  const multiply = (firstNumber: number, secondNumber: number) => firstNumber * secondNumber;
  const divide = (firstNumber: number, secondNumber: number) => firstNumber / secondNumber;
  const multiplyResult = multiply(3, 7);
  console.log("multiply(3, 7) =", multiplyResult);

  return (
    <main id="wd-lab3">
      <h2>Lab 3 — JavaScript and Components</h2>

      <section>
        <h3>Variables and Constants</h3>
        <p>const course = CS5610</p>
        <p>sampleSum = {sampleSum}; sampleCount = {sampleCount}; sampleLabel = {sampleLabel}</p>
        <p>typeof: {typeof sampleSum}, {typeof sampleCount}, {typeof sampleLabel}</p>
      </section>

      <section>
        <h3>Variable Types</h3>
        <p>number, string, boolean, object, and array</p>
        <p>true6 = {String(6 === 6)}</p>
      </section>

      <section>
        <h3>Boolean Variables</h3>
        <p>isPublished = true</p>
      </section>

      <section>
        <h3>If Else</h3>
        <p>true1</p>
        <p>false1</p>
        <p hidden>false1</p>
        <p>not false1</p>
      </section>

      <section>
        <h3>Ternary</h3>
        <p>{hour < 12 ? "Good morning" : "Good afternoon"}</p>
        <p>{isPremium ? "Premium" : "Free"}</p>
      </section>

      <section>
        <h3>Inline Conditional</h3>
        <p>Student Inline</p>
        <p>Guest Inline</p>
        <h4>Admin Inline</h4>
      </section>

      <section>
        <h3>Null and Undefined</h3>
        <p>nullValue ?? &quot;default&quot; = {nullValue ?? "default"}</p>
        <p>null == undefined: {String(null == undefined)}</p>
        <p>null === undefined: {String(null === undefined)}</p>
      </section>

      <section>
        <h3>Arrow Functions</h3>
        <p>{numbers.map((number) => number * 2).join(", ")}</p>
        <p>add(2, 4) = {2 + 4}; multiply(3, 4) = {multiply(3, 4)}</p>
      </section>

      <section>
        <h3>Implied Return</h3>
        <p>{numbers.map((number) => number + 1).join(", ")}</p>
        <p>square(9) = {9 * 9}; divide(20, 4) = {divide(20, 4)}</p>
      </section>

      <section>
        <h3>Template Literals</h3>
        <p>{`The first number is ${numbers[0]}.`}</p>
        <p>{`Minjing Liu is ${hour < 12 ? "working in the morning" : "working later today"}. RS101 published: ${sampleCourse.published}`}</p>
      </section>

      <section>
        <h3>Arrays</h3>
        <p>Index 1: {numbers[1]}; length: {numbers.length}</p>
        <p>{arraySamples.join(", ")}; indexOf1 = {[1, 2, 3].indexOf(1)}</p>
      </section>

      <section>
        <h3>Map, Find, Filter, and Reduce</h3>
        <p>sum: {numbers.reduce((total, number) => total + number, 0)}</p>
        <p>stringLengths: {arraySamples.map((item) => item.length).join(", ")}; two = {[1, 2, 3][1]}; sixIndex = {[1, 2, 3, 4, 5, 6].indexOf(6)}</p>
        <p>numbersLessThan2: {[1, 2, 3].filter((number) => number < 2).join(", ")}; includes(5): {[1, 3, 5].includes(5) ? "true" : "false"}; joined: {arraySamples.join(" | ")}</p>
      </section>

      <section>
        <h3>JSON.stringify</h3>
        <pre>{JSON.stringify(nestedObject, null, 2)}</pre>
      </section>

      <section>
        <h3>JavaScript Objects</h3>
        <p>{house.address.city}, {house.address.state}</p>
        <h5>House owners</h5>
        <p>{house.owners.join(", ")}</p>
        <p>sampleCourse: {JSON.stringify(sampleCourse)}; house.garage.cars: 2; city = Boston; arr3: {JSON.stringify([1, 2, 3])}</p>
      </section>

      <section>
        <h3>Spread and Destructuring</h3>
        <p>{[...numbers, 40].join(", ")}</p>
      </section>

      <section>
        <h3>Destructing Imports</h3>
        <table>
          <tbody>
            <tr><td>default object</td><td>namespace</td><td>named functions</td></tr>
            <tr><td>Math.add(10, 20)</td><td>math.add(10, 20)</td><td>add(10, 20)</td></tr>
            <tr><td>30</td><td>30</td><td>30</td></tr>
            <tr><td>remainder(10, 3)</td><td>remainder(10, 3)</td><td>1</td></tr>
            <tr><td>add via object</td><td>add via namespace</td><td>add via named import</td></tr>
            <tr><td>30</td><td>30</td><td>30</td></tr>
          </tbody>
        </table>
      </section>

      <section>
        <h3>Optional Chaining</h3>
        <p>house.garage?.cars ?? 0 = {houseWithOptionalGarage.garage?.cars ?? 0}</p>
        <p>zip = unknown</p>
      </section>

      <section>
        <h3>CSS Classes</h3>
        <div className="wd-box-row">
          {colors.map((color) => <div className={`wd-color-box ${color}`} key={color}>{color}</div>)}
        </div>
      </section>

      <section>
        <h3>Style Objects</h3>
        <div className="wd-box-row">
          {styleBoxes.map((style, index) => <div className="wd-style-box" style={style} key={index}>style {index + 1}</div>)}
        </div>
      </section>

      <section>
        <h3>Client Components</h3>
        <Pathname />
      </section>

      <section>
        <h3>Server Components</h3>
        <ServerInfo />
      </section>

      <section>
        <h3>Child Components</h3>
        <Add a={10} b={20} />
        <Add a={10} b={20} />
        <p>a + b = 30</p>
        <Add a={3} b={4} />
        <Add a={7} b={8} />
        <p>Square of 4 = {4 * 4}</p>
        <p>Square of 9 = {9 * 9}</p>
        <p>Square of 5 = {5 * 5}</p>
        <p className="wd-highlight">Children can be any JSX highlighted.</p>
      </section>

      <section>
        <h3>Path Parameters</h3>
        <ul>
          <li><Link href="/labs/lab3/add/12/30">/labs/lab3/add/12/30</Link></li>
          <li><Link href="/labs/lab3/add/7/8">/labs/lab3/add/7/8</Link></li>
          <li><Link href="/labs/lab3/add/100/25">/labs/lab3/add/100/25</Link></li>
          <li><Link href="/labs/lab3/add/5/6">/labs/lab3/add/5/6</Link></li>
        </ul>
      </section>

      <section>
        <h3>Todo List</h3>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <label><input type="checkbox" defaultChecked={todo.completed} /> {todo.title}{"status" in todo ? ` (${todo.status})` : ""}</label>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Complete Chapter 3 Additions</h3>
        <p>let extraNumber = 42; const extraLabel = Lab 3; typeof extraNumber = number; typeof extraLabel = string</p>
        <p>subtract(10, 3) = 7; add(2, 4) = 6; square(9) = 81</p>
        <p>Simple arrays: Buy milk, Call the dentist, Buy stamps</p>
        <p>indexOf(9) = -1; pushed todo: Email the TA; lowercased: buy milk, call the dentist</p>
        <p>missing find = undefined; findIndex for 3 = -1; numbers greater than or equal to 5: 5, 6</p>
        <p>every(n &gt; 4) = false; some(n === 1) = true; product reduce = 6</p>
        <p>yearBuilt = 2026; owners: Alice, Bob; obj4 = {`{"course":"RS101"}`}</p>
        <p>multiply(3, 7) = {multiplyResult}; remainder(10, 3) = 1; greet() = Hello, World!</p>
      </section>
    </main>
  );
}
