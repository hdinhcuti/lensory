// import { firebaseApp } from '@/configs/firebase';
// import { getAuth } from 'firebase/auth';
// import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';

// const db = getFirestore(firebaseApp);
// const storage = getStorage(firebaseApp);
// const auth = getAuth();

// // to check if the usernam entered is valid or not
// export async function doesUsernameExist(username: string) {
//     const usersRef = collection(db, 'users');
//     const result = query(usersRef, where('username', '==', username));
//     const getResult = await getDocs(result);
//     const returnResult = getResult.docs.map((user) => user.data().length > 0);
//     return returnResult;
// }
