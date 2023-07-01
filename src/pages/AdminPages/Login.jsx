// import React, { useState } from "react";

// const LoginForm = () => {
//     const [isSubmitting, setIsSubmitting] = useState(false);
//      const handleSubmit = async (e) => {
//       e.preventDefault();
//        if (isSubmitting) {
//         return;
//       }
//        setIsSubmitting(true);
//        try {
//         const response = await fetch('/api/login', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ username, password }),
//         });
//          const responseData = await response.json();
//          if (response.ok) {
//           // Login successful, perform necessary actions (e.g., redirect)
//           console.log('Login successful');
//         } else {
//           // Login failed, handle error (e.g., display error message)
//           if (response.status === 401) {
//             console.log('Invalid credentials');
//           } else if (response.status === 403) {
//             console.log('Account locked');
//           } else {
//             console.log('Login failed:', responseData.message);
//           }
//         }
//       } catch (error) {
//         console.log('Network error:', error.message);
//         // Display an error message to the user
//       }
//        setIsSubmitting(false);
//        // Reset the form
//       setUsername('');
//       setPassword('');
//     };
//      return (
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={handleUsernameChange}
//             disabled={isSubmitting}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={handlePasswordChange}
//             disabled={isSubmitting}
//           />
//         </div>
//         <button type="submit" disabled={isSubmitting}>
//           {isSubmitting ? 'Logging in...' : 'Login'}
//         </button>
//       </form>
//     );
// };
// export default LoginForm;
