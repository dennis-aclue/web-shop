import SignUpFormComponent from "../../sign-up/sign-up-form.component";
import SignInFormComponent from "../../sign-in/sign-in-form.component";

import './authentication.styles.scss'
const Authentication = () => {

  return (
    <div className='authentication-container'>
      <SignInFormComponent />
      <SignUpFormComponent />
    </div>
  );
};

export default Authentication;
