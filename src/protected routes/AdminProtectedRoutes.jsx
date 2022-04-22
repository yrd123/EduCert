import jwtDecode from "jwt-decode";
import { Navigate, Outlet } from "react-router-dom";

const useAdminAuth  = () => {
    let user;
    const token = localStorage.getItem('eduCertJwtToken');
    try{
    user = jwtDecode(token);
    }
    catch(ex){}
    return user && user.role === 'admin';
}

const AdminProtectedRoutes = () => {
    const isAdmin = useAdminAuth();
    return isAdmin ? <Outlet /> : <Navigate to="login" />;
}
 
export default AdminProtectedRoutes;