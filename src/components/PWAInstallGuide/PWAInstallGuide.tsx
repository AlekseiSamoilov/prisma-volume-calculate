import React, { useState } from 'react'
import { useTranslation } from '../../hooks/useTranslations'
// import Button from '../Button/Button';

const PWAInstallGuide: React.FC = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleGuide = () => {
        setIsOpen(!isOpen);
    };

    const isIOS = /iPad|Iphone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    const isAndroid = /Android/.test(navigator.userAgent);

    return (
        <div className='w-full'>
            <button
                onClick={toggleGuide}
                className="mt-1 flex items-center justify-center w-full p-2 rounded-xl
                bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200
                hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
            >
                {isOpen ? t('hidenInstallInstructions') : t('showInstallInstructions')}
            </button>

            {isOpen && (
                <div className='mt-3 p-4 bg-gray-100 dark:bg-gray-700 rounded-xl'>
                    <h2 className='text-lg font-bold mb-2 text-gray-800 dark:text-gray-800 dark:text-white'>
                        {t('installAppTitle')}
                    </h2>
                    <p className='text-sm mb-3 text-gray-700 dark:text-gray-300'>
                        {t('installAppDescription')}
                    </p>

                    <div className='mb-4'>
                        <h3 className='font-bold mb-2 text-gray-800 dark:text-white'>
                            {isIOS ? t('iOSInstructionsTitle') : isAndroid ? t('androidInstructionsTitle') : t('otherDevicesTitle')}
                        </h3>

                        {isIOS && (
                            <ol className='list-decimal pl-5 text-sm text-gray-700 dark:text-gray-300'>
                                <li className='mb-1'>{t('iOSStep1')}</li>
                                <li className='mb-1'>{t('iOSStep2')}</li>
                                <li className='mb-1'>{t('iOSStep3')}</li>
                                <li className='mb-1'>{t('iOSStep4')}</li>
                            </ol>
                        )}

                        {isAndroid && (
                            <ol className='list-decimal pl-5 text-sm text-gray-700 dark:text-gray-300'>
                                <li className='mb-1'>{t('androidStep1')}</li>
                                <li className='mb-1'>{t('androidStep2')}</li>
                                <li className='mb-1'>{t('androidStep3')}</li>
                            </ol>
                        )}

                        {!isIOS && !isAndroid && (
                            <ol className='list-decimal pl-5 text-sm text-gray-700 dark:text-gray-300'>
                                <li className='mb-1'>{t('otherDevicesStep1')}</li>
                                <li className='mb-1'>{t('otherDevicesStep2')}</li>
                                <li className='mb-1'>{t('otherDevicesStep3')}</li>
                            </ol>
                        )}
                    </div>

                    <div className='text-xs text-gray-600 dark:text-gray-400 border-t pt-2 dark:border-gray-600'>
                        <div className='flex items-center mb-2'>
                            <div className='w-4 h-4 mr-2 bg-green-500 rounded-full flex-shrink-0'></div>
                            <span>{t('offlineFeature')}</span>
                        </div>
                        <div className='flex items-center mb-2'>
                            <div className='w-4 h-4 mr-2 bg-green-500 rounded-full flex-shrink-0'></div>
                            <span>{t('fasterLoadingFeature')}</span>
                        </div>
                        <div className='flex items-center'>
                            <div className='w-4 h-4 mr-2 bg-green-500 rounded-full flex-shrink-0'></div>
                            <span>{t('homeScreenFeature')}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
};

export default PWAInstallGuide;
