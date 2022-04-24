import jwtDecode from "jwt-decode";
import { Navigate, Outlet } from "react-router-dom";

const useApplicantAuth  = () => {
    let user;
    const token = localStorage.getItem('eduCertJwtToken');
    try{
    user = jwtDecode(token);
    }
    catch(ex){}
    return user && user.role === 'applicant';
}

const ApplicantProtectedRoutes = () => {
    const isApplicant = useApplicantAuth();
    return isApplicant ? <Outlet /> : <Navigate to="login" />;
}
 
export default ApplicantProtectedRoutes;