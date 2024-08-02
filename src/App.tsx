import { useState } from 'react'
import './App.css'
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import Result from './components/Result/Result';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import LanguageToggle from './components/LanguageToggle/LanguageToggle';
import { useTranslation } from './hooks/useStranslations';

const App: React.FC = () => {
  const { t } = useTranslation();
  const [height, setHeight] = useState<string>('');
  const [topArea, setTopArea] = useState<string>('');
  const [bottomArea, setBottomArea] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const parseNumber = (value: string): number => {
    return parseFloat(value.replace(',', '.'));
  };

  const calculateVolume = () => {
    const h = parseNumber(height);
    const a1 = parseNumber(topArea);
    const a2 = parseNumber(bottomArea);

    if (isNaN(h) || isNaN(a1) || isNaN(a2)) {
      alert(t('errorInvalidInput'))
      return
    }

    const volume = (h / 3) * (a1 + a2 + Math.sqrt(a1 * a2));
    setResult(volume);
  };
  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg gray-100'}
    transition-colors duration-300 flex items-center justify-center`}>
      <div className='bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg max-w-md w-full transition-colors duration-300'>
        <h1 className='text-2xl font-semibold mb-6 text-gray-800 dark:text-white text-center'>
          {t('title')}
        </h1>
        <Input
          label={t('height')}
          value={height}
          onChange={setHeight}
          placeholder={t('enterHeight')}
        />
        <Input
          label={t('topArea')}
          value={topArea}
          onChange={setTopArea}
          placeholder={t('enterTopArea')}
        />
        <Input
          label={t('bottomArea')}
          value={bottomArea}
          onChange={setBottomArea}
          placeholder={t('enterBottomArea')}
        />
        <Button onClick={calculateVolume}>{t('calculate')}</Button>
        <Result value={result} />
        <ThemeToggle isDarkMode={isDarkMode} toggleTheme={() => setIsDarkMode(!isDarkMode)} />
        <LanguageToggle />
      </div>
    </div>
  )
}

export default App;
