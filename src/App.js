import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Error from './pages/Error'
import AuthWrapper from './pages/AuthWrapper'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <>
      <div className="mx-auto max-w-6xl">
        <AuthWrapper>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </BrowserRouter>
        </AuthWrapper>
      </div>
    </>
  )
}

export default App
