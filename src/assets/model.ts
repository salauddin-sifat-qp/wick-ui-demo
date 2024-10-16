export type IFormData = {
  name?: string;
  email?: string;
  framework?: string;
  experience?: string;
  features?: string[];
  satisfaction?: number;
  comments?: string;
  screenshot?: File | null;
};

export type IFormControls = {
  handleChange: (e: unknown) => void;
  formData: IFormData;
};
