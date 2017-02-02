export interface BuildOptions {
    bundle: boolean;
    buildServiceWorker: boolean;
    buildDependencies: boolean;
}
export declare class PolymerProject {
    private _project;
    constructor(polymerJsonPath: string);
    static buildHtmlFile(projectRoot: string, filename: string): any;
    build(options: BuildOptions): Promise<void>;
    buildSource(): any;
    buildDependencies(): any;
    private _splitSource();
    private _splitDependencies();
    private _writeOutput(stream, bundle);
    private _writeServiceWorker(bundle);
}
