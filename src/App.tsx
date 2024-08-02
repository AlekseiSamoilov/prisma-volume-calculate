import { useState } from 'react'
import './App.css'
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import Result from './components/Result/Result';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';

const App: React.FC = () => {
  const [height, setHeight] = useState<string>('');
  const [topArea, setTopArea] = useState<string>('');
  const [bottomArea, setBottomArea] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const calculateVolume = () => {
    const h = parseFloat(height);
    const a1 = parseFloat(topArea);
    const a2 = parseFloat(bottomArea);

    if (isNaN(h) || isNaN(a1) || isNaN(a2)) {
      alert('Pleasy enter correctly value')
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
          Trancated prism colume calculator
        </h1>
        <Input
          label='Height'
          value={height}
          onChange={setHeight}
          placeholder='Enter height'
        />
        <Input
          label='Area of the upper base'
          value={topArea}
          onChange={setTopArea}
          placeholder='Enter the area of the upper base'
        />
        <Input
          label='Area of the bottom base'
          value={bottomArea}
          onChange={setBottomArea}
          placeholder='Enter the area of the bottom base'
        />
        <Button onClick={calculateVolume}>Calculate</Button>
        <Result value={result} />
        <ThemeToggle isDarkMode={isDarkMode} toggleTheme={() => setIsDarkMode(!isDarkMode)} />
      </div>
    </div>
  )
}

export default App
