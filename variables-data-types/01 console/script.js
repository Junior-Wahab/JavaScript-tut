console.log(100);
console.log("Hello world");
console.log("true", 100, "Hello");
const x = 100;
console.log(x);
console.error("alert");
console.warn("warning");
console.table({
  name: "Brad",
  email: "example@gmail.com",
});

console.group("Simple");
console.log(100);
console.log("Hello world");
console.log("true", 100, "Hello");
console.groupEnd();

const styles = "padding: 10px; background-color: #131313; color: green";

console.log("%cHello World", styles);
