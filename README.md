#Project: Student Management

react-router-dom
@types/react-router-dom

/login
/admin: layout

/admin/\*
fearture: /admin/dashboard
fearture: /admin/students

authentication

- login
- sign up/register
- forger password

CLICK LOGIN
- Call Api to login
- Sucess -> redirect ADMIN
- Failed -> show ERROR

LOGIN
LOGOUT

authSaga

LOOP
- if logged in, watch LOGOUT
- else watch LOGIN

LOGIN
- call login API to get token + userInfo
- set token to localStorage
- redirect to admin page

LOGOUT
- clear token from localStorage
- redirect to login page

authSlice
authSaga