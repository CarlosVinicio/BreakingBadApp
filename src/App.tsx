import { useState } from 'react';
import logo from './logo.svg';
import { useTranslation } from 'react-i18next';

function App() {
  const [language, setLanguage] = useState("en");
  const { t, i18n } = useTranslation();

  const onChangeLanguage = () => {
    i18n.changeLanguage(language);
    if (language === "es") {
      setLanguage("en");
    } else {
      setLanguage("es");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {t("home.edit")}
        </p>

        <button onClick={onChangeLanguage}>{t("home.button.text")}</button>
      </header>
    </div>
  );
}

export default App;
