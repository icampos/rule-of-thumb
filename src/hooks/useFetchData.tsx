import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "../service/firebase.config";

const useFetchData = () => {
  const [people, setPeople] = useState<any[]>([])

  const fetchPost = async () => {
    await getDocs(collection(db, "people")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      //@ts-ignore
      setPeople(newData);
    });
  };

  useEffect(()=>{
    fetchPost();
}, [people.length])


  return {
    people
  }
};

export default useFetchData;