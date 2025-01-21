import React, { useState } from 'react';
import {
  FormWrapper,
  MandatoryInput,
  MandatoryText,
  Title,
  Wrapper,
} from './ContactForm.styles';
import Button from '../Button/Button';
import { toast } from 'react-toastify';
import { useLanguageContext } from '@/contexts/LanguageProvider';

const ContactForm = () => {
  const [invalidInputs, setInvalidInputs] = useState<string[]>([]);
  const [isSending, setIsSending] = useState(false);
  const { translate } = useLanguageContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const values = Object.fromEntries(formData.entries());

    const invalidInputs = Object.keys(values).filter(
      (key) => !values[key as keyof typeof values]
    );

    if (invalidInputs.length) {
      setInvalidInputs(invalidInputs);
      return;
    } else {
      setIsSending(true);

      fetch('/api/form', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then(
          //clear form
          (response) => {
            if (response.success) {
              (e.target as HTMLFormElement).reset();
              toast.success(translate('messageSentSuccess'));
            }
          }
        )
        .catch(() => toast.error(translate('somethingWentWrong')));
    }

    setIsSending(false);
  };

  const removeInvalidInput = (input: string) => {
    setInvalidInputs(invalidInputs.filter((item) => item !== input));
  };

  return (
    <Wrapper>
      <Title>{translate('getInTouch')}</Title>

      <FormWrapper onSubmit={handleSubmit}>
        <MandatoryInput
          type="text"
          name="name"
          required
          placeholder={translate('yourName')}
          isInvalid={invalidInputs.includes('name')}
          onChange={() =>
            invalidInputs.includes('name') && removeInvalidInput('name')
          }
        />

        <MandatoryInput
          type="email"
          name="email"
          required
          placeholder={translate('emailAddress')}
          isInvalid={invalidInputs.includes('email')}
          onChange={() =>
            invalidInputs.includes('email') && removeInvalidInput('email')
          }
        />

        <MandatoryInput
          type="text"
          name="subject"
          required
          placeholder={translate('subjectHere')}
          isInvalid={invalidInputs.includes('subject')}
          onChange={() =>
            invalidInputs.includes('subject') && removeInvalidInput('subject')
          }
        />

        <MandatoryText
          name="message"
          required
          placeholder={translate('yourMessage')}
          isInvalid={invalidInputs.includes('message')}
          onChange={() =>
            invalidInputs.includes('message') && removeInvalidInput('message')
          }
        />

        <Button
          title={translate('send')}
          hasColorTransition
          isLoading={isSending}
        />
      </FormWrapper>
    </Wrapper>
  );
};

export default ContactForm;
