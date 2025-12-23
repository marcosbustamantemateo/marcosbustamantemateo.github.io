import { useState, useEffect } from "react";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/config/firebase";

export interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: any;
  read: boolean;
}

export const useMessagesCRUD = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const messagesData: Message[] = [];
        querySnapshot.forEach((doc) => {
          messagesData.push({
            id: doc.id,
            ...doc.data(),
          } as Message);
        });
        setMessages(messagesData);
        setLoading(false);
      },
      (err) => {
        console.error("Error fetching messages:", err);
        setError(err.message);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const deleteMessage = async (id: string) => {
    try {
      await deleteDoc(doc(db, "messages", id));
      console.log("✅ Mensaje eliminado");
    } catch (err: any) {
      console.error("❌ Error al eliminar mensaje:", err);
      setError(err.message);
      throw err;
    }
  };

  const toggleReadStatus = async (id: string, currentStatus: boolean) => {
    try {
      await updateDoc(doc(db, "messages", id), {
        read: !currentStatus,
      });
      console.log("✅ Estado actualizado");
    } catch (err: any) {
      console.error("❌ Error al actualizar estado:", err);
      setError(err.message);
      throw err;
    }
  };

  return {
    messages,
    loading,
    error,
    deleteMessage,
    toggleReadStatus,
  };
};
