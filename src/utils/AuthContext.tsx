import { onAuthStateChanged, signInWithEmailAndPassword, User } from "firebase/auth"
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebaseConfig";

interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    },[]);

    const login = async (email: string, password: string) => {
        setLoading(true);
        try {
          await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
          console.error("Error al iniciar sesión:", error);
        } finally {
          setLoading(false);
        }
      };
      const logout = async () => {
        setLoading(true);
        try {
          await auth.signOut();
        } catch (error) {
          console.error("Error al cerrar sesión:", error);
        } finally {
          setLoading(false);
        }
      };
      return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
          {!loading && children}
        </AuthContext.Provider>
      );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth debe usarse dentro de un AuthProvider");
    }
    return context;
  };