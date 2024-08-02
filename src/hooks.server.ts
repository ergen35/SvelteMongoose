import type { Handle } from '@sveltejs/kit';
import DataSource from '$lib/db/data';

// Initialize database connection
await DataSource.initialize();


export const handle = (async ({ event, resolve }) => {

    console.log("Handled server request");
    
    const response = await resolve(event);
    return response;

}) satisfies Handle;