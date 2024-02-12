<template>
  <div class="pl-2">
    <UIcon :name="modes[colorMode.preference].icon" class="text-xl" @click="toggleColorMode" />
  </div>
</template>

<script setup>
const modes = reactive({
  light: {
    value: 'light',
    icon: 'i-heroicons-sun'
  },
  dark: {
    value: 'dark',
    icon: 'i-heroicons-moon'
  },
  system: {
    value: 'system',
    icon: 'i-heroicons-light-bulb'
  }
})

const colorMode = useColorMode()

const toggleColorMode = () => {
  const modesArray = Object.keys(modes)
  const currentModeIndex = modesArray.indexOf(colorMode.preference)
  const nextModeIndex = (currentModeIndex + 1) % modesArray.length
  colorMode.preference = modesArray[nextModeIndex]
}
</script>
