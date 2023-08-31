import { useState, useEffect, SetStateAction } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../service/firebase.config";

const UseFetchData = () => {
  const [people, setPeople] = useState<any[]>([]);
  const q = query(collection(db, "people"));

  useEffect(() => {
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const people: SetStateAction<any[]> = [];
      querySnapshot.forEach((doc) => {
        people.push({ id: doc.id, ...doc.data() });
      });

      setPeople(people);
    });

    return () => unsubscribe();
  }, []);
  
  return {
    people,
  };
};

export default UseFetchData;
