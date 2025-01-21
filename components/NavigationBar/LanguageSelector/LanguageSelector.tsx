import React from 'react';
import Image from 'next/image';
import {
  LanguagesDropDown,
  LanguagesDropDownItem,
  LanguageSelectorWrapper,
} from './LanguageSelector.styles';
import { useLanguageContext } from '@/contexts/LanguageProvider';

type LanguageSelectorProps = {
  handleDropDownVisibility: (value: boolean) => void;
  isDropdownVisible: boolean;
};

const LanguageSelector = ({
  handleDropDownVisibility,
  isDropdownVisible,
}: LanguageSelectorProps) => {
  const { language, switchLanguage } = useLanguageContext();

  return (
    <LanguageSelectorWrapper>
      <Image
        src={`/${language}Flag.svg`}
        width={24}
        height={24}
        alt="flag"
        draggable={false}
        onClick={() => handleDropDownVisibility(!isDropdownVisible)}
        priority
      />

      {isDropdownVisible && (
        <LanguagesDropDown>
          <LanguagesDropDownItem
            onClick={
              language === 'el'
                ? undefined
                : () => {
                    switchLanguage('el');
                    handleDropDownVisibility(false);
                  }
            }
          >
            <Image
              src="/elFlag.svg"
              width={24}
              height={24}
              alt="flag"
              draggable={false}
              priority
            />
            <span>Ελληνικά</span>
          </LanguagesDropDownItem>

          <LanguagesDropDownItem
            onClick={() => {
              switchLanguage('en');
              handleDropDownVisibility(false);
            }}
          >
            <Image
              src="/enFlag.svg"
              width={24}
              height={24}
              alt="flag"
              draggable={false}
              priority
            />
            <span>English</span>
          </LanguagesDropDownItem>
        </LanguagesDropDown>
      )}
    </LanguageSelectorWrapper>
  );
};

export default LanguageSelector;
