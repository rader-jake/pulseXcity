import AuthForm from '../components/AuthForm';
import Header from '../components/Header';

export default function SignupPage() {

  return(
    <>
    <Header/>
    <AuthForm isLogin={false} />;
    </>
  ) 
}
