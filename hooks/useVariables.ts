import { db } from '@/lib/firebase/firebaseConfig';
import { questionTextAtom } from '@/recoil/atom';
import { child, get, onValue, ref, set } from 'firebase/database';
import { useRecoilValue } from 'recoil';

interface AddParameter {
  selectVariable: string;
}

const useVariables = ({ selectVariable }: AddParameter) => {
  const questionText = useRecoilValue(questionTextAtom);
  const variablesRef = ref(db, `variables/${questionText}/${selectVariable}`);
  const variablesChildRef = ref(db);

  const addDoc = () => {
    get(child(variablesChildRef, `variables/${questionText}/${selectVariable}`)).then(
      (snapshot) => {
        const data = snapshot.val();

        if (snapshot.exists()) {
          set(variablesRef, {
            count: data.count + 1,
            text: selectVariable,
          });
        } else {
          set(variablesRef, {
            count: 1,
            text: selectVariable,
          });
        }
      }
    );
  };

  return { addDoc };
};

export default useVariables;
