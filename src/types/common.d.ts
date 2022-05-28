type ValueOf<T> = T[keyof T]

type Undefinable<T> = T | undefined;

type StringObject = { [K in  string]: string };

type VoidFunc = () => void;