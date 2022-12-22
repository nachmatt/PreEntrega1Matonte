import {collection, doc, getDoc, getDocs, getFirestore, query, where} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useGetItem = () => {
    const [data, setData] = useState(null);
    const { category, id } = useParams();

    // Firebase Methods
    const db = getFirestore();
    const refProps = [db, "items"];
    const ref = id ? doc(...refProps, id) : collection(...refProps);

    useEffect(() => {
      //Para consultar todos los productos, con filtros
        if (category) {
            const q = query(ref, where("category", "==", category));
            getDocs(q).then((result) =>
                setData(result.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
            );
            return;
        }

      //Para consultar 1 producto
        if (id) {
            getDoc(ref) //getDoc es una promesa
            .then((item) => {
                if (item.exists()) {
                    setData({ id: item.id, ...item.data() });
                }
            })
            .catch((err) => console.error({ err }));
            return;
        }

      //Para consultar todos los productos
        getDocs(ref).then((result) =>
            setData(result.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        );
    }, []);

    return data;
};
