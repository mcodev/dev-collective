import { useEffect, useState } from 'react';
import {
  Wrapper,
  FaqCard,
  FaqTitle,
  TitleWrapper,
  FaqSubTitle,
  Container,
  DescriptiveTitle,
  QuestionRow,
  QuestionHeadLineTitle,
  QuestionHeadLine,
  FaqQuestionsWrapper,
  QuestionContent,
  ExpansionIcon,
  AccordionCollapse,
  PeopleImageWrapper,
  PeopleImage,
  LightPinkCircle,
  PurpleCircle,
  EmptyBlackCircle,
  MotionDotsContainer,
} from './Faq.styles';
import MotionIcon from '@/components/MotionIcon/MotionIcon';
import { useLanguageContext } from '@/contexts/LanguageProvider';

type FaqPropsType = {
  content: {
    key: number;
    title: string;
    description: string;
  }[];
};

const Faq = ({ content = [] }: FaqPropsType): JSX.Element => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);

  const { translate } = useLanguageContext();

  useEffect(() => {
    const accordion = document.getElementById(`accordion-${activeQuestion}`);
    if (accordion) {
      setContentHeight(accordion.scrollHeight);
    }
  }, [activeQuestion]);

  return (
    <Wrapper>
      <Container>
        <PurpleCircle
          src="/purpleCircle.webp"
          alt="a purple circle"
          width={72}
          height={72}
          priority
        />

        <LightPinkCircle
          src="/lightPinkCircle.webp"
          alt="a purple circle"
          width={72}
          height={72}
          priority
        />

        <PeopleImageWrapper>
          <PeopleImage
            src={'/faq/questions.webp'}
            alt="questions"
            fill
            priority
          />

          <EmptyBlackCircle
            src="/blackEmptyCircle.webp"
            alt="a purple circle"
            width={314}
            height={314}
            priority
          />
        </PeopleImageWrapper>

        <FaqCard>
          <MotionDotsContainer>
            <MotionIcon iconName="purpleDots" direction="vertical" zIndex={1} />
          </MotionDotsContainer>

          <TitleWrapper>
            <DescriptiveTitle>{translate('faqTitle')}</DescriptiveTitle>

            <FaqTitle className="heroTitle">
              <span>{translate('faqSubtitle1')}</span>
            </FaqTitle>
            <FaqSubTitle>{translate('faqSubtitle2')}</FaqSubTitle>
          </TitleWrapper>

          <FaqQuestionsWrapper>
            {content.map((question, index) => (
              <QuestionRow
                key={question.key}
                isLastElement={index === content.length - 1}
              >
                <QuestionHeadLine
                  onClick={() =>
                    activeQuestion === question.key
                      ? setActiveQuestion(0)
                      : setActiveQuestion(question.key)
                  }
                >
                  <QuestionHeadLineTitle>
                    {translate(question.title)}
                  </QuestionHeadLineTitle>
                  {activeQuestion === question.key ? (
                    <ExpansionIcon onClick={() => setActiveQuestion(0)}>
                      -
                    </ExpansionIcon>
                  ) : (
                    <ExpansionIcon>+</ExpansionIcon>
                  )}
                </QuestionHeadLine>

                <AccordionCollapse
                  id={`accordion-${question.key}`}
                  isExpanded={activeQuestion === question.key}
                  contentHeight={
                    activeQuestion === question.key ? contentHeight : 0
                  }
                >
                  <QuestionContent>
                    {translate(question.description)}
                  </QuestionContent>
                </AccordionCollapse>
              </QuestionRow>
            ))}
          </FaqQuestionsWrapper>
        </FaqCard>
      </Container>
    </Wrapper>
  );
};

export default Faq;
