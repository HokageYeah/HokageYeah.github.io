<script setup lang="ts">
import { nextTick } from 'vue';
import { useDarkMode } from '@vuepress/theme-default/lib/client/composables/useDarkMode'
import { useThemeLocaleData } from '@vuepress/theme-default/lib/client/composables/useThemeData'


// 真恶心，这种明明能够导出的，却报错！！！
// import {  useThemeLocaleData,useDarkMode } from '@vuepress/theme-default/lib/client/composables/index.js'

const themeLocale = useThemeLocaleData()
const isDarkMode = useDarkMode()


const themeUpdate = () => isDarkMode.value = !isDarkMode.value


/**
 * 主题动画切换
 * @see https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API
 * @see https://github.com/vuejs/vitepress/pull/2347/files
 * @param event event
 */
const toggleColorMode = (event?: MouseEvent): void => {
  // @ts-expect-error experimental API
  const isAppearanceTransition = document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // 如果不支持
  if (!isAppearanceTransition || !event) {
    themeUpdate()
    return
  }
  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )
  // @ts-expect-error: Transition API
  const transition = document.startViewTransition(async () => {
    themeUpdate()
    await nextTick()
  })
  transition.ready
    .then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ]
      document.documentElement.animate(
        {
          clipPath: isDarkMode.value
            ? [...clipPath].reverse()
            : clipPath,
        },
        {
          duration: 400,
          easing: 'ease-out',
          pseudoElement: isDarkMode.value
            ? '::view-transition-old(root)'
            : '::view-transition-new(root)',
        },
      )
    })
}
</script>

<template>
  <button class="toggle-color-mode-button" :title="themeLocale.toggleColorMode" @click="toggleColorMode">
    <svg v-show="!isDarkMode" class="icon" focusable="false" viewBox="0 0 32 32">
      <path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor" />
      <path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor" />
      <path d="M2 15.005h5v2H2z" fill="currentColor" />
      <path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor" />
      <path d="M15 25.005h2v5h-2z" fill="currentColor" />
      <path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor" />
      <path d="M25 15.005h5v2h-5z" fill="currentColor" />
      <path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor" />
      <path d="M15 2.005h2v5h-2z" fill="currentColor" />
    </svg>

    <svg v-show="isDarkMode" class="icon" focusable="false" viewBox="0 0 32 32">
      <path
        d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z"
        fill="currentColor" />
    </svg>
  </button>
</template>
