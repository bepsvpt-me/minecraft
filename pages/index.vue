<template>
  <main>
    <section class="relative">
      <media
        :open="false"
        alt="cover"
        class="cover"
        content-class="object-cover w-full"
        src="cover.jpg"
      />

      <div class="absolute inset-x-0 bottom-0 my-8 text-center">
        <h1
          class="inline-block px-4 bg-black bg-opacity-75 text-6xl text-gray-100"
        >
          The World Minecraft Server
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
            <td>未啟用</td>
          </tr>

          <tr>
            <th>白名單機制</th>
            <td>未啟用</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="info">
      <h2>模組推薦（Java 客戶端 1.15.2）</h2>

      <div class="overflow-x-auto">
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

                <media
                  v-if="mod.screenshot"
                  :alt="mod.name"
                  :src="mod.screenshot"
                  content-class="mt-2"
                />
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
      </div>
    </section>

    <section class="info">
      <h2>材質包 ＆ 光影</h2>

      <div class="overflow-x-auto">
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
                <media :alt="resource.name" :src="resource.screenshot" />
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
      </div>
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
import Media from '~/components/media.vue'

export default Vue.extend({
  components: {
    ExternalLink,
    Media,
  },

  data: () => ({
    mods: [
      {
        name: 'Forge',
        description: '模組加載器（安裝模組必備）',
        screenshot: null,
        official: 'https://minecraftforge.net',
        download: '/mods/forge-installer-1.15.2-31.2.0.jar',
        sha1: '679ea40cab6e5c9828dd45c7bf326f65b8bc89b7',
      },
      {
        name: 'OptiFine',
        description: '光影所須之模組',
        screenshot: null,
        official: 'https://optifine.net',
        download: '/mods/optifine-1.15.2-forge-pre26.jar',
        sha1: '4ea53e3d202239c5ffa2affa809e36998194f1bc',
      },
      {
        name: 'Apple Skin',
        description: '顯示食物飽足值',
        screenshot: 'mods/apple-skin.gif',
        official: 'https://www.curseforge.com/minecraft/mc-mods/appleskin',
        download: '/mods/apple-skin-1.15.2-forge-1.0.13.jar',
        sha1: '1220c97d59e6089a6bc2ca419edc2e9c57f3e8ff',
      },
      {
        name: 'Durability Viewer',
        description: '顯示武器、裝備、道具耐久值',
        screenshot: 'mods/durability-viewer.jpg',
        official:
          'https://www.curseforge.com/minecraft/mc-mods/giselbaers-durability-viewer',
        download: '/mods/durability-viewer-1.15.2-forge-1.7.1.jar',
        sha1: '9795610bb2edf8c54f071d37b03ad46127566999',
      },
      {
        name: 'Hwyla',
        description: '顯示目標方塊資訊',
        screenshot: 'mods/hwyla.jpg',
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
        description: '地圖紀錄工具',
        screenshot: 'mods/journey-map.jpg',
        official: 'https://www.curseforge.com/minecraft/mc-mods/journeymap',
        download: '/mods/journey-map-1.15.2-forge-5.7.0b2.jar',
        sha1: '6f9b0e18cace41d682d7308b33d9e58c862091f4',
      },
      {
        name: 'Just Enough Items',
        description: '物品清單及合成表',
        screenshot: 'mods/just-enough-items.jpg',
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
        screenshot: 'mods/mouse-tweaks.gif',
        official: 'https://www.curseforge.com/minecraft/mc-mods/mouse-tweaks',
        download: '/mods/mouse-tweaks-1.15.2-forge-2.13.jar',
        sha1: 'fd0eae9285ddadbadade0d0704b3852e9cd41241',
      },
      {
        name: 'Neat',
        description: '顯示生物生命值',
        screenshot: 'mods/neat.jpg',
        official: 'https://www.curseforge.com/minecraft/mc-mods/neat',
        download: '/mods/neat-1.15.2-forge-1.6.22.jar',
        sha1: 'd8aea0363c99e62e821e101f02dcbb1f82585e74',
      },
    ],

    resources: [
      {
        name: 'Faithful x32',
        description: '材質包',
        screenshot: 'resources/faithful-x32.jpg',
        official: 'https://faithful.team',
        download: '/resources/faithful-32x-1.15.2.zip',
        sha1: 'e120676275206f4a8bb18147d28935a353963fe9',
      },
      {
        name: 'projectLUMA',
        description: '光影包',
        screenshot: 'resources/project-luma.jpg',
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
.cover::v-deep img {
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

.info::v-deep img {
  @apply mx-auto;

  max-width: unset;
  width: 25rem;
}

table {
  @apply w-full table-auto;
}

th,
td {
  @apply border px-4 py-2;
}
</style>
