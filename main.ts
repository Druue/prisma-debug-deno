import { Role } from "./generated/client/index.js";

const test = "USER";

if (test === Role.USER) {
  console.log("USER");
} else {
  console.log("ADMIN");
}
