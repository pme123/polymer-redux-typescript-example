export declare module reduxStore {
    interface Customer {
        customer: {
            age: number;
            name: string;
        };
    }
    interface Action {
        type: string;
        value?: string;
    }
    const ReduxBehavior: any;
}
