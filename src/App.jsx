import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import Practicallab from './components/Practicallab/Practicallab'
import Previoupaper from './components/Previouspaper/Previouspaper'
import Footer from './components/Layout/Footer'
import Login from './components/Auth/Login'
import Regsister from './components/Auth/Regsister'
import ForgetPassword from './components/Auth/ForgetPassword'
import ResetPasswoerd from './components/Auth/ResetPassword'
import Contact from './components/Contact/Contact'
import Aboutus from './components/Aboutus/Aboutus'
import Notfound from './components/Layout/Notfound'
import Profile from './components/Profile/Profile'
import Header from './components/Layout/header'
import ChangePassword from './components/Profile/ChangePassword'
import UpdateProfile from './components/Profile/UpdateProfile'
import Dashboard from './components/Admin/Dashdoard/Dashboard'
import AddLabfile from './components/Admin/AddLabfile/AddLabfile'
import Addpapers from './components/Admin/Addpapers/Addpapers'
import ViewLabFiles from './components/Admin/ViewLabFiles/ViewLabFiles'
import ViewPapers from './components/Admin/ViewPapers/ViewPapers'
import Users from './components/Admin/Users/Users'
import { useDispatch, useSelector } from 'react-redux'
import toast, { Toaster, } from "react-hot-toast"
import { loadUser } from './redux/actions/user'
import { ProtectedRoute } from "protected-route-react"
import Loader from './components/Layout/Loader'


const App = () => {

  // window.addEventListener('contextmenu',e =>{
  // e.preventDefault();
  // });

  const { isAuthenticated, user, message, error, loading } = useSelector(state => state.user);
  const dispatch = useDispatch();


  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' })
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' })
    }
  }, [dispatch, error, message]);



  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])


  return (
    <Router>
      {
      loading ? (<Loader />)  : 
      (
      <>
        <Header isAuthenticated={isAuthenticated} user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/practicalfile" element={<ProtectedRoute isAuthenticated={isAuthenticated}  > <Practicallab /> </ProtectedRoute>} />
          <Route path="/previouspapers" element={<ProtectedRoute isAuthenticated={isAuthenticated}  ><Previoupaper /> </ProtectedRoute>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/login" element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile"><Login /></ProtectedRoute>} />
          <Route path='/regsister' element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile"><Regsister /></ProtectedRoute>} />
          <Route path='/forgetpassword' element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile"> <ForgetPassword /> </ProtectedRoute>} />
          <Route path='/resetpassword/:token' element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile"> <ResetPasswoerd /> </ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute isAuthenticated={isAuthenticated}> <Profile user={user} /> </ProtectedRoute>} />
          <Route path='/changepassword' element={<ProtectedRoute isAuthenticated={isAuthenticated}> <ChangePassword /> </ProtectedRoute>} />
          <Route path='/updateprofile' element={<ProtectedRoute isAuthenticated={isAuthenticated}  > <UpdateProfile user={user} /> </ProtectedRoute>} />
          <Route path="*" element={<Notfound />} />
          {/* Admin Routes----------------------- */}
          <Route path='/admin/dashboard' element={<ProtectedRoute isAuthenticated={isAuthenticated}adminRoute={true} isAdmin={user && user.role === "admin"} > <Dashboard /> </ProtectedRoute>} />
          <Route path='/admin/addlabfile' element={<ProtectedRoute isAuthenticated={isAuthenticated}adminRoute={true} isAdmin={user && user.role === "admin"} > <AddLabfile /> </ProtectedRoute>} />
          <Route path='/admin/addpapers' element={<ProtectedRoute isAuthenticated={isAuthenticated}adminRoute={true} isAdmin={user && user.role === "admin"} > <Addpapers /> </ProtectedRoute>} />
          <Route path='/admin/viewlabfiles' element={<ProtectedRoute isAuthenticated={isAuthenticated}adminRoute={true} isAdmin={user && user.role === "admin"} > <ViewLabFiles /> </ProtectedRoute>} />
          <Route path='/admin/viewpapers' element={<ProtectedRoute isAuthenticated={isAuthenticated}adminRoute={true} isAdmin={user && user.role === "admin"} > <ViewPapers /> </ProtectedRoute>} />
          <Route path='/admin/users' element={<ProtectedRoute isAuthenticated={isAuthenticated}adminRoute={true} isAdmin={user && user.role === "admin"} > <Users /> </ProtectedRoute>} />
        </Routes>
        <Footer />
        <Toaster /></>
      )
      }
    </Router>
  )
}

export default App