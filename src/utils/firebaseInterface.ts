import { createUserWithEmailAndPassword,  UserCredential } from "firebase/auth";
import { auth } from "../firebaseConfig";

// Definir los tipos de los parámetros
export const register = async (email: string, password: string): Promise<UserCredential | void> => {
  try {
    // UserCredential ya está tipado en el SDK de Firebase
    const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("Usuario registrado:", userCredential.user);
    return userCredential; // Devolver el resultado si es necesario
  } catch (error: any) {
    // Tipar el error para usar `message` correctamente
    console.error("Error al registrar usuario:", error.message);
  }
};


