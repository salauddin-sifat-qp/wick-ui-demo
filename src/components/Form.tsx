import { useWuShowToast } from "@npm-questionpro/wick-ui-lib";
import { FormEvent, useEffect, useState } from "react";
import { DefaultFormData } from "../assets/mockApi";
import { IFormData, IFormHandle } from "../assets/model";
import { Checkboxes } from "./_ui/Checkboxes";
import { Footer } from "./_ui/Footer";
import { MiscInputs } from "./_ui/MiscInputs";
import { RadioGroup } from "./_ui/RadioGroup";
import { SelectInput } from "./_ui/SelectInput";
import { TextInputs } from "./_ui/TextInputs";

export const Form = () => {
  const { showToast } = useWuShowToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<IFormData>(DefaultFormData);

  const handleChange = (data: IFormHandle) => {
    const { key, value, type } = data;

    if (type === "checkbox") {
      let temp = (formData[key] ?? []) as string[];

      if (temp.includes(value as string)) {
        temp = temp.filter((item) => item !== value);
      } else {
        temp.push(value as string);
      }
      setFormData((prevData) => ({ ...prevData, [key]: temp }));
      return;
    }

    setFormData((prevData) => ({ ...prevData, [key]: value }));
  };

  useEffect(() => {
    console.log("Form Data:", formData);
  }, [formData]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  const handleReset = () => {
    setLoading(true);
    setTimeout(() => {
      setFormData({});
      showToast("Form Reset");
      setLoading(false);
    }, 2000);
  };
  return (
    <form style={style.form}>
      <TextInputs handleChange={handleChange} formData={formData} />
      <RadioGroup handleChange={handleChange} formData={formData} />
      <Checkboxes handleChange={handleChange} formData={formData} />
      <SelectInput handleChange={handleChange} formData={formData} />
      <MiscInputs handleChange={handleChange} formData={formData} />
      <Footer
        loading={loading}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
      />
    </form>
  );
};

const style: Record<string, React.CSSProperties> = {
  form: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    gap: "28px",
  },
};
