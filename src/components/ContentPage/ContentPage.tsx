import React from 'react'
import { useTranslation } from '../../hooks/useTranslations'
import Button from '../Button/Button';

const ContentPage: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const { t } = useTranslation();

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 overflow-y-auto'
            onClick={handleOverlayClick}
            role="dialog"
            aria-modal="true"
        >
            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto'>
                <div className='p-6'>
                    <h1 className='text-2xl font-bold mb-6 text-gray-800 dark:text-white'>
                        Калькулятор объема усеченной призмы
                    </h1>

                    {/* Рекламный блок */}
                    <div className='mb-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg'>
                        <div id='yandex_rtb_R-A-XXXXXX-1'></div>
                    </div>

                    <article className='prose prose-gray dark:prose-invert max-w-none mb-6 
                        prose-headings:text-gray-800 dark:prose-headings:text-white
                        prose-p:text-gray-600 dark:prose-p:text-gray-300
                        prose-li:text-gray-600 dark:prose-li:text-gray-300'>

                        <section className='mb-8'>
                            <h2 className='text-xl font-semibold mb-4 dark:text-gray-300'>Что такое усеченная призма?</h2>
                            <p className='mb-4 dark:text-gray-300'>Усеченная призма - это геометрическое тело, образованное двумя параллельными многоугольниками (основаниями) разной площади и боковыми гранями.</p>
                        </section>

                        <section className='mb-8'>
                            <h2 className='text-xl font-semibold mb-4 dark:text-gray-300'>Формула расчета объема</h2>
                            <p className='mb-4 dark:text-gray-300'>Объем усеченной призмы вычисляется по формуле:</p>
                            <div className='my-4 p-6 bg-blue-50 dark:bg-gray-700 rounded-lg border border-blue-100 dark:border-gray-600'>
                                <p className='text-center font-semibold text-blue-800 dark:text-blue-200 mb-4'>V = (h/3) × (S₁ + S₂ + √(S₁×S₂))</p>
                                <p className='text-gray-700 dark:text-gray-300 mb-2'>где:</p>
                                <ul className='list-disc pl-6 space-y-2'>
                                    <li className='text-gray-600 dark:text-gray-300'>h - высота призмы</li>
                                    <li className='text-gray-600 dark:text-gray-300'>S₁ - площадь верхнего основания</li>
                                    <li className='text-gray-600 dark:text-gray-300'>S₂ - площадь нижнего основания</li>
                                </ul>
                            </div>
                        </section>

                        <section className='mb-8'>
                            <h2 className='text-xl font-semibold mb-4 dark:text-gray-300'>Применение в реальной жизни</h2>
                            <p className='mb-4 dark:text-gray-300'>Усеченные призмы встречаются в:</p>
                            <ul className='list-disc pl-6 space-y-2'>
                                <li className='text-gray-600 dark:text-gray-300'>Архитектуре и строительстве</li>
                                <li className='text-gray-600 dark:text-gray-300'>Проектировании резервуаров и емкостей</li>
                                <li className='text-gray-600 dark:text-gray-300'>Производстве упаковочных материалов</li>
                            </ul>
                        </section>

                        {/* Рекламный блок */}
                        <div className='my-8 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg'>
                            <div id='yandex_rtb_R-A-XXXXXX-2'></div>
                        </div>

                        <section className='mb-8'>
                            <h2 className='text-xl font-semibold mb-4 dark:text-gray-300'>Как пользоваться калькулятором</h2>
                            <ol className='list-decimal pl-6 space-y-2'>
                                <li className='text-gray-600 dark:text-gray-300'>Введите высоту призмы</li>
                                <li className='text-gray-600 dark:text-gray-300'>Укажите площадь верхнего основания</li>
                                <li className='text-gray-600 dark:text-gray-300'>Введите площадь нижнего основания</li>
                                <li className='text-gray-600 dark:text-gray-300'>Нажмите кнопку "Рассчитать"</li>
                            </ol>
                        </section>

                        <section className='mb-8'>
                            <h2 className='text-xl font-semibold mb-4 dark:text-gray-300'>FAQ</h2>
                            <div className='space-y-6'>
                                <div>
                                    <h3 className='text-lg font-medium mb-2 text-gray-700 dark:text-gray-200'>Какие единицы измерения использовать?</h3>
                                    <p className='text-gray-600 dark:text-gray-300'>Используйте одинаковые единицы измерения для всех величин. Например, если высота в метрах, то и площади должны быть в квадратных метрах.</p>
                                </div>
                                <div>
                                    <h3 className='text-lg font-medium mb-2 text-gray-700 dark:text-gray-200'>Почему результат отрицательный?</h3>
                                    <p className='text-gray-600 dark:text-gray-300'>Результат не может быть отрицательным. Если вы получили отрицательное значение, проверьте правильность введенных данных.</p>
                                </div>
                            </div>
                        </section>
                    </article>

                    {/* Рекламный блок */}
                    <div className='mb-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg'>
                        <div id='yandex_rtb_R-A-XXXXXX-3'></div>
                    </div>

                    <Button onClick={onClose} className='bg-red-500 hover:bg-red-600 active:bg-red-700'>
                        {t('close')}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ContentPage