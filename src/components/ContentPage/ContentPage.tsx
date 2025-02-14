import React from 'react'
import { useTranslation } from '../../hooks/useTranslations'
import Button from '../Button/Button';

const ContentPage: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const { t } = useTranslation();

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 overflow-y-auto'>
            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto'>
                <div className='p-6'>
                    <h1 className='text-2xl font-bold mb-6 text-gray-800 dark:text-white'>
                        Калькулятор объема усеченной призмы
                    </h1>

                    {/* Рекламный блок */}
                    <div className='mb-6 p-4 bg-gray-800 dark:bg-gray-700 rounded-lg'>
                        <div id='yandex_rtb_R-A-XXXXXX-1'></div>
                    </div>

                    <article className='prose dark:prose-invert max-w-none mb-6'>
                        <h2>Что такое усеченная призма?</h2>
                        <p>Усеченная призма - это геометрическое тело, образованное двумя параллельными многоугольниками (основаниями) разной площади и боковыми гранями.</p>
                        <h2>Формула расчета объема</h2>
                        <p>Объем усеченной призмы вычесляется по формуле:</p>
                        <div className='my-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg'>
                            <p className='text-center'>V = (h/3) × (S₁ + S₂ + √(S₁×S₂))</p>
                            <p>где:</p>
                            <ul>
                                <li>h - высота призмы</li>
                                <li>S₁ - площадь верхнего основания</li>
                                <li>S₂ - площадь нижнего основания</li>
                            </ul>
                        </div>
                        <h2>Применение в реальной жизни</h2>
                        <p>Усеченные призмы встречаются в:</p>
                        <ul>
                            <li>Архитектуре и строительстве</li>
                            <li>Проектировании резервуаров и емкостей</li>
                            <li>Производстве упаковочных материалов</li>
                        </ul>

                        {/* Рекламный блок */}
                        <div className='my-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg'>
                            <div id='yandex_rtb_R-A-XXXXXX-2'></div>
                        </div>

                        <h2>Как пользоваться калькулятором</h2>
                        <ol>
                            <li>Введите высоту призмы</li>
                            <li>Укажите площадь верхнего основания</li>
                            <li>Введите площадь нижнего основания</li>
                            <li>Нажмите кнопку "Рассчитать"</li>
                        </ol>

                        <h2>FAQ</h2>
                        <h3>Какие единицы измерения использовать?</h3>
                        <p>Используйте одинаковые единицы измерения для всех велечин. Например, если высота в метрах, то и площади должны быть в квадратных метрах.</p>

                        <h3>Почему результат отрицательный?</h3>
                        <p>Результат не может быть отрицательынм. Если вы получили отрицательное значение, проверьте правильность введенных данных</p>
                    </article>

                    <div className='mb-6 p-4 bg-gray-100 dark:-gray-700 rounded-lg'>
                        <div id='yandex_rtb_R-A-XXXXXX-3'></div>
                    </div>
                    <Button onClick={onClose} className='bg-red-500 hover:bg-red-600'>
                        {t('close')}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ContentPage
