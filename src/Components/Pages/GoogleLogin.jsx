
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import google from "../../assets/home/google.png"

const GoogleLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
            })
        })
    }

    return (
        <div className="p-8 flex justify-center items-center">
        <div className="divider"></div>
        <div>
            <img src={google} alt="Google" onClick={handleGoogleSignIn} className="mx-auto" style={{ width: "20%", height: "25%" }} />
        </div>
    </div>
    
    );
};

export default GoogleLogin;