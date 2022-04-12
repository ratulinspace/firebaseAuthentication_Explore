## Steps to use firebase authentication
1. Create a projects on console.firebase.google.com
2. npm install firebase
3. Register web app in firebase
4. Copy firebase init with config from firebase project settings into a file firebase.init.js
5. Export default app from firebase.init.js
6. Import app firebase init.js into your app.js
7. Import getAuth from firebase/auth and create auth = getAuth(app)
8. Turn on google authentication (firebase > authentication > enable google sign in)
9. Create google provider
10. Use signInWithPopup and pass auth and provider
11. handle .then (if successful) and catch error (if error)