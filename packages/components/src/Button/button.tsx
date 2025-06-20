'use client';

import { Button } from '@mui/material';

type ButtonProps = {
  children?: React.ReactNode;
};

export const MyButton = ({ children }: ButtonProps) => {
  return <Button>{children}</Button>;
};
