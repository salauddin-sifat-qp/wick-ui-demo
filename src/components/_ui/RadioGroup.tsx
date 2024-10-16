import { WuRadio } from "@npm-questionpro/wick-ui-lib";
import React from "react";
import { IFormControls } from "../../assets/model";

export const RadioGroup: React.FC<IFormControls> = (props) => {
  const { handleChange, formData } = props;
  return (
    <div>
      <label>Which framework do you think is the best?</label>
      <WuRadio
        options={[
          { label: "React", value: "react" },
          { label: "Vue", value: "vue" },
          { label: "Angular", value: "angular" },
          { label: "Svelte", value: "svelte" },
        ]}
        defaultValue="svelte"
        id="framework"
      />
    </div>
  );
};
