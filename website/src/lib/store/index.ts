// imports
import { writable } from 'svelte/store';

/* Stores */

// site loading
export const siteLoading = writable<boolean>(false);

// logged user
export const user = writable<any>(null);

// bot tags
export const tags = writable<string[]>([]);

// navigation drawer
export const nav = writable<boolean>(false);
