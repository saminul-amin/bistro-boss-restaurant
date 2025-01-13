import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

export default function SocialLogin() {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic;
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res);
        navigate("/");
      });
    });
  };
  
  return (
    <div className="p-8">
      <div>
        <button onClick={handleGoogleSignIn} className="btn">
          <FaGoogle className="mr-2" />
          Google
        </button>
      </div>
    </div>
  );
}
