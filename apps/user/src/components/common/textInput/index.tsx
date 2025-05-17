import type { InputHTMLAttributes } from "react";
import * as style from "./textInput.css";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string | React.ReactNode;
  placeholder?: string;
  prefixIcon?: React.ElementType;
  suffixIcon?: React.ElementType;
}

export const TextInput = (props: TextInputProps) => {
  const { labelText, placeholder, prefixIcon: PrefixIcon, suffixIcon: SuffixIcon, ...rest } = props;

  return (
    <label>
      {typeof labelText === "string" ? (
        <span className={style.labelTextStyle}>{labelText}</span>
      ) : (
        labelText
      )}
      {PrefixIcon && <PrefixIcon />}
      <input {...rest} placeholder={placeholder} className={style.inputStyle} />
      {SuffixIcon && <SuffixIcon />}
    </label>
  );
};
