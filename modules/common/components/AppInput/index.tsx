import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import cx from 'classnames';
import styles from './appInput.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLElement> {
  autoFocus?: boolean;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const AppInput = React.forwardRef(
  (props: InputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    const { autoFocus = false, onChange, className, ...restProps } = props;
    return React.createElement('input', {
      ...restProps,
      className: cx(styles.appInput, className),
      autoFocus,
      onChange,
      ref,
    });
  }
);

AppInput.displayName = 'Input';

export default AppInput;
