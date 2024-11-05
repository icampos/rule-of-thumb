import { updateDoc, doc } from "firebase/firestore";
import { db } from "../service/firebase.config";

interface votes {
    positive: number;
    negative: number;
    neutral?: number;
  };

const UseUpdateData = (personId: string, votes: votes, voted: boolean) => {
  const personRef = doc(db, "people", personId);

  const data = {
    votes: votes,
    voted: voted
  };

  updateDoc(personRef, data)
    .then((personRef) => {
      console.log(
        "A New Document Field has been added to an existing document"
      );
    })
    .catch((error) => {
      console.log(error);
    });
};

export default UseUpdateData;
