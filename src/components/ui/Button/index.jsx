import mergeClass from '../../../utils';
import { buttonVariants } from '../../../constants';

export default function Button({
  children,
  variant,
  fullWidth,
  size,
  align,
  rounded,
  className = '',
  ...rest
}) {
  return (
    <button
      className={`${mergeClass(
        buttonVariants({
          variant,
          size,
          fullWidth,
          align,
          rounded,
        }),
      )} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
