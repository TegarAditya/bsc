import { writable, type Writable } from "svelte/store";

export const currentPage: Writable<number> = writable(1);