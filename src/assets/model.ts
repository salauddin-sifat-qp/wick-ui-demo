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

export type IFormDataTypes = string | number | boolean | File | null;
export type IFormControls = {
  handleChange: (key: keyof IFormData, value?: IFormDataTypes) => void;
  formData: IFormData;
};
