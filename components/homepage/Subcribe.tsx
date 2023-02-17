import { Input, InputGroup, InputGroupText } from "reactstrap";
import { useMedia } from "../../utils/use-media";

type Props = {};

const Subcribe: React.FC<Props> = () => {
  const mobile = useMedia("(max-width: 600px)");
  return (
    <div className="subcribe_form" style={{ backgroundColor: "white" }}>
      <p className="subcribe_title" style={{fontSize: mobile?32:40, padding: mobile?"0 32px": ""}}> SUBSCRIBE TO GET MORE INFO</p>
      <div className={mobile?"subcribe_des_mobile":"subcribe_des"}>
        <p>
          Want the latest and greatest recipes, updates, and more from us,
          straight to your inbox? Subscribe and get our HOT NEWS!
        </p>
      </div>

      <InputGroup className={mobile? "input_group_mobile":"input_group"}>
        <Input placeholder="Enter your email..."
        className="input_control" />
        <InputGroupText className="submit_btn">SUBMIT</InputGroupText>
      </InputGroup>
    </div>
  );
};
export default Subcribe;
