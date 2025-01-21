import styled from 'styled-components';
import { colors } from '@/styles/theme';

export const LanguageSelectorWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 32px;
  position: relative;

  @media (max-width: 768px) {
    margin-right: -16px;
  }
`;

export const LanguagesDropDown = styled.div`
  position: absolute;
  top: 130%;
  right: -24px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  border-radius: 12px;
  box-shadow: 0 0 70px 0 rgba(29, 35, 58, 0.12);
  z-index: 12;
  overflow: hidden;
`;

export const LanguagesDropDownItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  padding: 8px 16px;

  &:hover {
    cursor: pointer;
    background-color: ${colors.lightGray};
  }
`;
