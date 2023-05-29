// imports
import { writable } from 'svelte/store';

/* Stores */

// site loading
export const siteLoading = writable(false);

// logged user
export const user = writable(null);
