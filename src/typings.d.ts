interface Window {
  __TAURI__: any;
}

type Prettify<T> = {
    [K in keyof T]: T[K];
} & {}
