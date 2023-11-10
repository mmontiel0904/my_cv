<div 
    class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
    id="navbarSupportedContent1">
    <a
        class="mb-4 ml-2 mr-5 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
        href="/">
        <img
          src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"
          style="height: 15px"
          alt="QuipuMx Logo"
          loading="lazy" />
      </a>

      <ul
        class="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
        data-te-navbar-nav-ref>
        {#each leftElements as menuEmelement }
        <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
          <a
            class="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
            href="{menuEmelement.route}"
            data-te-nav-link-ref
            >{menuEmelement.label}</a
          >
        </li>
        {/each}
      </ul>
</div>

<script lang="ts">
  import i18n from '@/i18n';

let leftElements = [
    { label: $i18n.t('nav.home'), route: '/'},
    { label: $i18n.t('nav.resume'), route: '/resume'},
    { label: $i18n.t('nav.blog'), route: '/blog'},
    ];
</script>