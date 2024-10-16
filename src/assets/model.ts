import { InputHTMLAttributes } from "react";

export type IFormData = {
  name?: string;
  email?: string;
  framework?: string;
  experience?: string;
  features?: string[];
  satisfaction?: number;
  comments?: string;
  screenshot?: File;
  secret?: string;
};

export type IFormDataTypes = string | number | File | undefined | string[];
export type IFormHandle = {
  key: keyof IFormData;
  value: IFormDataTypes;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
};
export type IFormControls = {
  handleChange: (e: IFormHandle) => void;
  formData: IFormData;
};
