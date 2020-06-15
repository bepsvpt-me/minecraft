<template>
  <main>
    <section class="relative">
      <img
        alt="cover"
        class="object-cover w-full cover"
        src="~/assets/imgs/cover.webp"
      />

      <div class="absolute inset-x-0 bottom-0 my-8 text-center">
        <h1
          class="inline-block px-4 bg-black bg-opacity-75 text-6xl text-gray-100"
        >
          Our Minecraft Server
        </h1>
      </div>
    </section>

    <section class="info">
      <h2>伺服器資訊</h2>

      <table>
        <tbody>
          <tr>
            <th>版本</th>
            <td>Java 1.15.2</td>
          </tr>

          <tr>
            <th>伺服器位址</th>
            <td>mc.bepsvpt.me</td>
          </tr>

          <tr>
            <th>正版驗證</th>
            <td>已啟用</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="info">
      <h2>模組推薦（Java 客戶端 1.15.2）</h2>

      <table>
        <thead>
          <tr>
            <th rowspan="2">模組名稱</th>
            <th rowspan="2">簡介</th>
            <th colspan="3">下載</th>
          </tr>

          <tr>
            <th>官網</th>
            <th>本站</th>
            <th>SHA1</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="mod in mods" :key="mod.name">
            <td>{{ mod.name }}</td>

            <td>
              <span>{{ mod.description }}</span>

              <a v-if="mod.screenshot" :href="mod.screenshot" target="_blank">
                <img
                  :alt="mod.name"
                  :src="mod.screenshot"
                  class="mx-auto mt-2"
                  decoding="async"
                  importance="low"
                  loading="lazy"
                  referrerpolicy="no-referrer"
                />
              </a>
            </td>

            <td>
              <external-link :href="mod.official" text="前往" />
            </td>

            <td>
              <external-link :href="mod.download" download text="下載" />
            </td>

            <td>{{ mod.sha1 }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="info">
      <h2>材質包 ＆ 光影</h2>

      <table>
        <thead>
          <tr>
            <th rowspan="2">名稱</th>
            <th rowspan="2">截圖</th>
            <th colspan="3">下載</th>
          </tr>

          <tr>
            <th>官網</th>
            <th>本站</th>
            <th>SHA1</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="resource in resources" :key="resource.name">
            <td>
              <p>{{ resource.name }}</p>
              <span>{{ resource.description }}</span>
            </td>

            <td>
              <a :href="resource.screenshot" target="_blank">
                <img
                  :alt="resource.name"
                  :src="resource.screenshot"
                  class="mx-auto"
                  decoding="async"
                  importance="low"
                  loading="lazy"
                  referrerpolicy="no-referrer"
                />
              </a>
            </td>

            <td>
              <external-link :href="resource.official" text="前往" />
            </td>

            <td>
              <external-link :href="resource.download" download text="下載" />
            </td>

            <td>{{ resource.sha1 }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <footer class="py-6 text-center">
      <span>mc.bepsvpt.me</span>
      <span class="mx-1 select-none">©</span>
      <span>{{ year }}</span>
    </footer>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import ExternalLink from '~/components/external-link.vue'

export default Vue.extend({
  components: {
    ExternalLink,
  },

  data: () => ({
    mods: [
      {
        name: 'Apple Skin',
        description: '顯示食物飽足值',
        screenshot: require('~/assets/imgs/mods/apple-skin.webp'),
        official: 'https://www.curseforge.com/minecraft/mc-mods/appleskin',
        download: '/mods/apple-skin-1.15.2-forge-1.0.13.jar',
        sha1: '1220c97d59e6089a6bc2ca419edc2e9c57f3e8ff',
      },
      {
        name: 'Durability Viewer',
        description: '顯示武器、裝備、道具耐久值',
        screenshot: require('~/assets/imgs/mods/durability-viewer.webp'),
        official:
          'https://www.curseforge.com/minecraft/mc-mods/giselbaers-durability-viewer',
        download: '/mods/durability-viewer-1.15.2-forge-1.7.1.jar',
        sha1: '9795610bb2edf8c54f071d37b03ad46127566999',
      },
      {
        name: 'Hwyla',
        description: '顯示目標方塊資訊',
        screenshot: require('~/assets/imgs/mods/hwyla.webp'),
        official: 'https://www.curseforge.com/minecraft/mc-mods/hwyla',
        download: '/mods/hwyla-1.15.2-forge-1.10.8.jar',
        sha1: '30c93f370d6826044c20cae7072b09791dffe9be',
      },
      {
        name: 'Wawla',
        description: '輔助 Hwyla 顯示更多資訊',
        screenshot: null,
        official: 'https://www.curseforge.com/minecraft/mc-mods/wawla',
        download: '/mods/wawla-1.15.2-forge-3.0.2.jar',
        sha1: '92632f2c49aa996bbf07f80504cfcd7ce7121351',
      },
      {
        name: 'Bookshelf',
        description: 'Wawla 所須之函式庫',
        screenshot: null,
        official: 'https://www.curseforge.com/minecraft/mc-mods/bookshelf',
        download: '/mods/bookshelf-1.15.2-forge-5.6.40.jar',
        sha1: '01aed182efae4bb84415fbfc29b708aee561139a',
      },
      {
        name: 'Journey Map',
        description: '顯示食物飽足值',
        screenshot: require('~/assets/imgs/mods/journey-map.webp'),
        official: 'https://www.curseforge.com/minecraft/mc-mods/journeymap',
        download: '/mods/journey-map-1.15.2-forge-5.7.0b2.jar',
        sha1: '6f9b0e18cace41d682d7308b33d9e58c862091f4',
      },
      {
        name: 'Just Enough Items',
        description: '物品清單及合成表',
        screenshot: require('~/assets/imgs/mods/just-enough-items.webp'),
        official: 'https://www.curseforge.com/minecraft/mc-mods/jei',
        download: '/mods/just-enough-items-1.15.2-forge-6.0.0.4.jar',
        sha1: 'a3bb69be3c5056c3505ecae6484cf70792cac742',
      },
      {
        name: 'Lithium',
        description: '改善 Minecraft 效能',
        screenshot: null,
        official: 'https://www.curseforge.com/minecraft/mc-mods/lithium-forge',
        download: '/mods/lithium-1.15.2-forge-0.4.6-rc3.jar',
        sha1: '147da2f5f21daa9296b0e220b8b8918aa1d9bdb0',
      },
      {
        name: 'MixinBootstrap',
        description: 'Lithium 所須之模組',
        screenshot: null,
        official: 'https://www.curseforge.com/minecraft/mc-mods/mixinbootstrap',
        download: '/mods/mixin-bootstrap-1.15.2-forge-1.0.3.jar',
        sha1: '597b6664bbd018e99c8d3e9c96994765d452d51c',
      },
      {
        name: 'Mouse Tweaks',
        description: '平均分配合成材料',
        screenshot: require('~/assets/imgs/mods/mouse-tweaks.webp'),
        official: 'https://www.curseforge.com/minecraft/mc-mods/mouse-tweaks',
        download: '/mods/mouse-tweaks-1.15.2-forge-2.13.jar',
        sha1: 'fd0eae9285ddadbadade0d0704b3852e9cd41241',
      },
      {
        name: 'Neat',
        description: '顯示生物生命值',
        screenshot: require('~/assets/imgs/mods/neat.webp'),
        official: 'https://www.curseforge.com/minecraft/mc-mods/neat',
        download: '/mods/neat-1.15.2-forge-1.6.22.jar',
        sha1: 'd8aea0363c99e62e821e101f02dcbb1f82585e74',
      },
      {
        name: 'OptiFine',
        description: '光影所須之模組',
        screenshot: null,
        official: 'https://optifine.net',
        download: '/mods/optifine-1.15.2-forge-pre26.jar',
        sha1: '4ea53e3d202239c5ffa2affa809e36998194f1bc',
      },
    ],

    resources: [
      {
        name: 'Faithful x32',
        description: '材質包',
        screenshot: require('~/assets/imgs/resources/faithful-x32.webp'),
        official: 'https://faithful.team',
        download: '/resources/faithful-32x-1.15.2.zip',
        sha1: 'e120676275206f4a8bb18147d28935a353963fe9',
      },
      {
        name: 'projectLUMA',
        description: '光影包',
        screenshot: require('~/assets/imgs/resources/project-luma.webp'),
        official: 'https://dedelner.net/projectluma/',
        download: '/resources/projectluma-1.32.zip',
        sha1: '9e319adf96598e6082ffb9bbe751c9e303c22a5e',
      },
    ],

    year: new Date().getFullYear(),
  }),
})
</script>

<style scoped>
.cover {
  height: 24rem;
}

.info {
  @apply mx-auto mt-8 px-4;
}

.info h2 {
  @apply text-4xl;
}

.info td {
  @apply text-center whitespace-no-wrap;
}

table {
  @apply w-full table-auto;
}

th,
td {
  @apply border px-4 py-2;
}
</style>
