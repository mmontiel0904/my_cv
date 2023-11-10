import page from 'page';
import { readable } from 'svelte/store'

import type { ComponentType, SvelteComponent } from 'svelte';
import type { Readable } from 'svelte/store';

import Home from    '@/pages/Home.svelte';
import NotF from    '@/pages/PageNotFound.svelte';
import CV from      '@/pages/Curriculum.svelte';
import Blog from    '@/pages/Blog.svelte';

page( async (context, next)=> {
    
    next();

});

export const route: Readable<ComponentType<SvelteComponent>> = readable(Home, (set)=> {

    page('/',       () => set(Home));
    page('/cv',     () => set(CV));
    page('/blog',   () => set(Blog));
    page('*',       () => set(NotF));

    page.start();

});