import { I18n } from "i18n-js";
import { enUs } from "./locale";

const i18n = new I18n({
    "en-US" : enUs
});

i18n.locale = "en-US";

i18n.locale = navigator.language;

type DefaultLocale = typeof enUs;
export type TxKeyPath = RecursiveKeyOf<DefaultLocale>;

type RecursiveKeyOf<TObj extends Record<string, unknown>> = {
  [TKey in keyof TObj & string]: TObj[TKey] extends Record<string, unknown>
    ? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
    : `${TKey}`;
}[keyof TObj & string];

export default i18n;