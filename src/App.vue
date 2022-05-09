<script>
import CitiesList from "./components/CitiesList.vue"
import HelloWorld from "./components/HelloWorld.vue"

export default {
  components: {
    CitiesList,
    HelloWorld,
  },
}
</script>

<template>
  <HelloWorld :msg="$t('message.greeting')" />
  <select v-model="$i18n.locale">
    <option
      :key="availableLocale"
      v-for="availableLocale in $i18n.availableLocales"
      :value="availableLocale"
    >
      {{ availableLocale }}
    </option>
  </select>
</template>
