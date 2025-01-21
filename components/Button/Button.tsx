import { useRouter } from 'next/router';
import { Loader, Wrapper } from './Button.styles';
import { useEffect, useState } from 'react';

export type ButtonVariantType =
  | 'primary'
  | 'secondary'
  | 'primaryRounded'
  | 'secondaryRounded';

export type ButtonSizeType = 'xs' | 'sm' | 'smd' | 'md' | 'lg' | 'xl';

type ButtonPropsType = {
  onClick?: () => void;
  urlRoute?: string;
  title: string;
  variant?: ButtonVariantType;
  size?: ButtonSizeType;
  hasColorTransition?: boolean;
  isLoading?: boolean;
};

const Button = ({
  onClick,
  urlRoute,
  title,
  variant = 'primary',
  size = 'md',
  hasColorTransition = false,
  isLoading = false,
}: ButtonPropsType): JSX.Element => {
  const router = useRouter();
  const [hasButtonMounted, setHasButtonMounted] = useState(false);

  useEffect(() => {
    setHasButtonMounted(true);
  }, []);

  return (
    <Wrapper
      onClick={() => {
        if (urlRoute) {
          router.push(urlRoute);
        }

        if (!isLoading && onClick) {
          onClick();
        }
      }}
      variant={variant}
      size={size}
      hasColorTransition={hasColorTransition}
      hasButtonMounted={hasButtonMounted}
    >
      {isLoading ? <Loader /> : title}
    </Wrapper>
  );
};

export default Button;
