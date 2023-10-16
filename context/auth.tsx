import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useState } from 'react';

type UserType = {
  id: string;
  name: string;
  email: string;
  photo?: string;
};

type AuthContextType = {
  user: UserType | null;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext({} as AuthContextType);

export const useAuth = () => useContext(AuthContext);

type ProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: ProviderProps) => {
  const { getItem, setItem, removeItem } = useAsyncStorage('@user');
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    getItem().then((data) => {
      if (data) {
        setUser(JSON.parse(data));
      }
    });
    /**
     * Reason: The `useAsyncStorage` "experimental" hook is not memoized and always returns new functions
     * which causes an infinite loop when `getItem` is used as a dependency in `useEffect`.
     * Disabling the check here should be fine since we only want to fetch the data from async storage once
     * and there is no need to synchronize the data with our state.
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithGoogle: async () => {
          try {
            // TODO: login with google implementation
            // await setItem(JSON.stringify(res)); - use setItem(from useAsyncStorage) to save user data
            // setUser(res);
            const dummyUser = {
              id: '1',
              name: 'John Doe',
              email: 'johndoe@email.com',
              photo: 'https://robohash.org/5759c92851e66680ae5723f5de4f7757?set=set4&bgset=bg2&size=400x400',
            };
            await setItem(JSON.stringify(dummyUser));
            setUser(dummyUser);
          } catch (error) {
            console.log(error);
          }
        },
        signOut: async () => {
          try {
            await removeItem();
            setUser(null);
          } catch (error) {
            console.log(error);
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
