import spanish from "./es.json";
import english from "./en.json";

const LANGUAGES = {
  SPANISH: "es",
  ENGLISH: "en",
};

interface Locale {
  currentLocale?: string;
}

export const getI18N = ({ currentLocale = "es" }: Locale) => {
  switch (currentLocale) {
    case LANGUAGES.ENGLISH:
      return english;
    case LANGUAGES.SPANISH:
      return spanish;
    default:
      return spanish;
  }
};
