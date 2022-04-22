import jwtDecode from "jwt-decode";
import { Navigate, Outlet } from "react-router-dom";

const useViceAdminAuth  = () => {
    let user;
    const token = localStorage.getItem('eduCertJwtToken');
    try{
    user = jwtDecode(token);
    }
    catch(ex){}
    return user && user.role === 'viceAdmin';
}

const ViceAdminProtectedRoutes = () => {
    const isViceAdmin = useViceAdminAuth();
    return isViceAdmin ? <Outlet /> : <Navigate to="login" />;
}
 
export default ViceAdminProtectedRoutes;