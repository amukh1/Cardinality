import { Network } from "./network.js";
import { Matrix, Vector } from "./linear.js";

let model = new Network([2, 3, 1], [Math.tanh, Math.tanh, Math.tanh]);
model.genRandWAB();
console.log(model.run([1, 1]));
model.save("model.json");