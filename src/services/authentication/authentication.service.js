// import * as firebase from 'firebase/app';
import {signInWithEmailAndPassword} from 'firebase/auth';

export const loginRequest = (auth, email, password) =>
  signInWithEmailAndPassword(auth, email, password);

// export const loginRequest = (email, password) => {
//   // firebase.auth().signInWithEmailAndPassword(email, password);
//   const auth = getAuth();
//   return(
//     signInWithEmailAndPassword(auth, email, password);
//   )
//   // .then(userCredential => {
//   //   // Signed in
//   //   const user = userCredential.user;
//   //   // ...
//   // })
//   // .catch(error => {
//   //   const errorCode = error.code;
//   //   const errorMessage = error.message;
//   // });
// };

//   const auth = getAuth();
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
