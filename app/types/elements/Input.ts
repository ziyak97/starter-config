export enum InputVariants {
  UnderlinedInput = 'UnderlinedInput'
}

export interface InputProps {
  type?: string;
  name: string;
  label: string;
  required?: boolean;
  min?: string | number;
  variant: InputVariants;
}

export interface UnderlinedInputProps {
  type?: string;
  name: string;
  label: string;
  required?: boolean;
  min?: string | number;
}