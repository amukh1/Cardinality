import { Network } from "./network.js";
import { Matrix, Vector } from "./linear.js";

let model = new Network([2, 3, 1], [Math.tanh, Math.tanh, Math.tanh]);
model.genRandWAB();
console.log(model.run([1, 1]));
// model.train([
    // {input: [0, 0], output: [0]}, {input: [1,1], output: [2]}, {input: [1, 0], output: [1]}, {input: [0, 1], output: [1]}
// ], 3);
model.learn([
    {input: [0, 0], output: [0]}, {input: [1,1], output: [2]}, {input: [1, 0], output: [1]}, {input: [0, 1], output: [1]}
],1)
model.save("model.json");