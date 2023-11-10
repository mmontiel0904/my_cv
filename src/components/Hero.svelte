<div class="bg-neutral-50 py-24 px-6 text-center items-center dark:bg-neutral-900">
    
  <h1 class="mt-2 mb-16 text-lg font-bold tracking-tight md:text-6xl xl:text-7xl">
       {$i18n.t('home.welcome-tittle')}<br /><span class="text-primary">{$i18n.t('home.message-pt1')}</span>
    </h1>

    <div class="py-24 px-6 text-center w-[500px]">
      <p class="opacity-70 text-[hsl(218,81%,85%)] m-5">
        {$i18n.t('home.welcome-message')}
      </p>
    </div>

    <a class="mb-2 inline-block rounded bg-primary px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
      data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">{$i18n.t('home.hero-btn-1')}</a>
    <a class="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-800 dark:hover:bg-opacity-60"
      data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Learn more</a>
  </div>

  <script lang="ts">
  import i18n from "@/i18n";
  </script>