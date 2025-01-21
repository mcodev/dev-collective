import React from 'react';
import {
  LeftRow,
  LeftImage,
  RightImage,
  Wrapper,
  LikeWhatYouSeeCard,
  GreenCircleImage,
  MotionCircleContainer,
  MotionDotsContainer,
  StrippedCircleImage,
  RightImageWrapper,
} from './LikeWhatYouSee.styles';
import Button from '@/components/Button/Button';
import MotionIcon from '@/components/MotionIcon/MotionIcon';
import ContactForm from '@/components/ContactForm/ContactForm';
import { useLanguageContext } from '@/contexts/LanguageProvider';

type LikeWhatYouSeeProps = {
  type?: 'likeWhatYouSee' | 'contact';
};

const LikeWhatYouSee = ({ type = 'likeWhatYouSee' }: LikeWhatYouSeeProps) => {
  const { translate } = useLanguageContext();

  return (
    <Wrapper type={type}>
      <LeftRow>
        <LeftImage
          src="/likeWhatYouSee/growth.webp"
          alt="Like what you see"
          width={508}
          height={735}
          priority
        />
      </LeftRow>

      {type === 'likeWhatYouSee' && (
        <LikeWhatYouSeeCard>
          <h4 className="sectionSubtitle">{translate('getStartedCapital')}</h4>
          <h2 className="sectionTitle">
            <span>{translate('boostYourBusiness')} </span> <br />{' '}
            {translate('bringYourIdeaToLife')}
          </h2>

          <p>{translate('unlockYourBusiness')}</p>
          <Button title={translate('startProjectButton')} urlRoute="/contact" />
        </LikeWhatYouSeeCard>
      )}

      {type === 'contact' && <ContactForm />}

      <RightImageWrapper>
        <RightImage
          src="/likeWhatYouSee/handShake.webp"
          alt="Like what you see"
          width={369}
          height={473}
          priority
        />
      </RightImageWrapper>

      <GreenCircleImage
        src="greenCircle.webp"
        alt="blueCross"
        width={112}
        height={112}
        type={type}
        priority
      />

      <StrippedCircleImage
        src="strippedCircleMildBackground.webp"
        alt="blueCross"
        width={104}
        height={104}
        priority
      />

      <MotionCircleContainer>
        <MotionIcon iconName="spiralFull" direction="vertical" zIndex={1} />
      </MotionCircleContainer>

      <MotionDotsContainer>
        <MotionIcon
          iconName="purpleDots2RowsUneven"
          direction="vertical"
          zIndex={1}
        />
      </MotionDotsContainer>
    </Wrapper>
  );
};

export default LikeWhatYouSee;
