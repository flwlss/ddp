import Backend from "./backend";

let store: {backend: Backend} | null = null;

if (!store) {
    store = {
        backend: new Backend()
    }
}

export const Store = store;