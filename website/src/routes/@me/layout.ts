// imports 
import type { LayoutLoad } from './$types';
import { redirect} from '@sveltejs/kit';

// middleware
export const load = (({cookies}) => {
    // check 
  console.log("here",cookies.get("revAuth"));
    if(!(cookies.get("revAuth"))){
throw redirect("/auth/login")
    }
}) satisfies LayoutLoad;