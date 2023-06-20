import { Matrix, Vector } from "./linear.js";
import fs from "fs";

export class Network {
    constructor(shape, activations) {
        this.shape = shape;
        this.activations = activations;
        this.layers = shape.length;
        this.weights = new Array(this.layers - 1);
        this.biases = new Array(this.layers - 1);
    }

    genRandWAB() {
        for (let i = 0; i < this.layers - 1; i++) {
            // matrix: row x col
            let wi = []
            for(var j = 0; j < this.shape[i+1]; j++) {
                wi.push(new Array(this.shape[i]).fill(0));
            }
            this.weights[i] = new Matrix(wi);
            this.weights[i] = this.weights[i].randomize();
            this.biases[i] = new Vector(new Array(this.shape[i + 1]).fill(0));
            this.biases[i] = this.biases[i].randomize();
        }
    }

    defaultActive() {
        for (let i = 0; i < this.layers - 1; i++) {
            this.activations[i] = (x) => {
                return x;
            };
        }
    }

    exLayer(input, n) {
        return this.weights[n].dot(new Vector(input)).add((this.biases[n])).v;
    }

    run(input) {
        let output = input;
        for (let i = 0; i < this.layers - 1; i++) {
            // console.log(this.weights[i].dot(new Vector(output)).add(this.biases[i]).v)
            // console.log(this.biases[i])
            // console.log(this.weights[i])
            // console.log(new Vector(output).dim)
            // console.log(output)
            output = (this.exLayer(output, i));
        }
        return output;
    }

    save(file) {
        let data = {
            name: file,
            shape: this.shape,
            activations: this.activations,
            weights: this.weights,
            biases: this.biases
        }
        fs.writeFileSync(file, JSON.stringify(data));
    }
}