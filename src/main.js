import { createApp } from "vue"

import App from "./App.vue"

import { createI18n } from "vue-i18n"

const messages = {
  en: {
    message: {
      greeting: "Welcome!",
    },
  },
  sv: {
    message: {
      greeting: "Välkommen!",
    },
  },
}

const i18n = createI18n({
  locale: "en",
  messages,
})

createApp(App).use(i18n).mount("#app")
