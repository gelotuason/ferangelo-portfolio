import { doc, getDoc, getFirestore } from "firebase/firestore";
import firebaseApp from "@/config/firebaseConfig";

export async function getData() {
    const db = getFirestore(firebaseApp);
    const docRef = doc(db, "about", "HAo7aHsWb8JWeqyrCJ9v");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const data = docSnap.data();

        return JSON.stringify(data);
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }
}