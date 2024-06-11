import { doc, getDoc, getFirestore, collection, getDocs } from "firebase/firestore";
import firebaseApp from "@/config/firebaseConfig";

const db = getFirestore(firebaseApp);

export async function getData() {
    const docRef = doc(db, "about", "HAo7aHsWb8JWeqyrCJ9v");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const data = docSnap.data();

        return JSON.stringify(data);
    } else {
        console.log("No such document!");
    }
}

export async function getProjectsData() {
    const projectsData: any[] = [];

    const querySnapshot = await getDocs(collection(db, "projects"));
    querySnapshot.forEach((doc) => {
        projectsData.push(doc.data());
    });

    return JSON.stringify(projectsData);
}