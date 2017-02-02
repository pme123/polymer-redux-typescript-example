/// <reference types="node" />
import * as polymer from 'polymer-build';
export declare class HtmlSplitter {
    root?: string;
    filename: string;
    project: polymer.PolymerProject;
    constructor(root?: string);
    split(filename: string): NodeJS.ReadWriteStream;
    rejoin(dest: string): NodeJS.ReadWriteStream;
}
