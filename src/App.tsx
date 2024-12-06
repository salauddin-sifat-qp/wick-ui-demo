import { WuAppHeader } from "@npm-questionpro/wick-ui-lib";
import { MockProducts } from "./assets/mockApi";
import { Form } from "./components/Form";
import { License } from "./components/License";

const SurveyForm = () => {
  return (
    <>
      <WuAppHeader productName="Demo App" catagories={MockProducts} />
      <div style={{ padding: "20px 20px 0" }}>
        <h1>Survey: Best Framework</h1>
        <License />
      </div>
      <div
        style={{
          padding: "20px 60px",
          display: "flex",
        }}
      >
        <Form />
      </div>
    </>
  );
};

export default SurveyForm;
