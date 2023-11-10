<script lang="ts">

  import HambuergerButton from './nav_components/HambuergerButton.svelte';
  import CollapsibleContainer from './nav_components/CollapsibleContainer.svelte';
  import page from "page";
  import i18n from "@/i18n";

  function navigate(path: string) {
        page.show(path);
  };


  import { onMount } from 'svelte';
  import { Collapse } from 'tw-elements';
  import { twe } from '@/utils/utils';

    onMount(twe({Collapse}));
</script>

<!-- Main Navigation Container -->
<nav
  class="
  flex-no-wrap relative flex w-full 
  items-center justify-between 
  bg-[#FBFBFB] py-2 shadow-md 
  shadow-black/5 
  dark:bg-neutral-600 
  dark:shadow-black/10  
  lg:flex-wrap lg:justify-start 
  lg:py-4">
  <div class="flex w-full flex-wrap items-center justify-between px-3">
    <HambuergerButton />
    <CollapsibleContainer />
  </div>
</nav>
