import { setupI18n } from "../i18n"
import zh from "./zh"
import en from "./en"
import eleZhLocale from "element-plus/es/locale/lang/zh-cn"
import eleEnLocale from "element-plus/es/locale/lang/en"

const messages = {
  zh: { ...zh, ...eleZhLocale },
  en: { ...en, ...eleEnLocale },
}
// Create i18n instance with options
const i18nOptions = {
  legacy: false, // you must set `false`, to use Composition API
  locale: "zh", // set locale
  fallbackLocale: "zh", // set fallback locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
}
const i18n = setupI18n({
  ...i18nOptions,
})

export default i18n
