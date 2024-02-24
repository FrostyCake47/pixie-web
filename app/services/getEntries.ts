/*import { collection } from "firebase/firestore";

export const getEntries = async (uid:string) => {
    try {
        const userDoc = await collection('users').doc(uid).get();
        if (userDoc.exists) {
          return userDoc.data();
        } else {
          throw new Error('User not found');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
      }
}*/