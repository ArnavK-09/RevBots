// imports 
import type { Actions } from './$types';

// form action 
export const actions = {
    default: async ({cookies}: any) => {
        // logout 
        /*cookies.delete('revAuth')
        console.log(cookies, cookies.delete.toString(), cookies.getAll())*/
        cookies.set("revAuth","", {
            maxAge: 0
        })
    }
} satisfies Actions;