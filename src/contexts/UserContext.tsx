import React, { createContext, useContext, useState } from "react";

export type UserProps = {
  name: string
}

export type AuthContextProps = {
  user: UserProps | null
  login: (user: UserProps) => void;
}

const UserContext = createContext<AuthContextProps>({} as AuthContextProps)

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserProps | null>(null)

  const login = (user: UserProps) => {
    setUser(user)
  }

  return(
    <UserContext.Provider value={{ user, login }}>
      <>
        {children}
      </>
    </UserContext.Provider>
  )
}

const useUser = () => {
  const context = useContext(UserContext)
  return context
}

export { UserContext, UserProvider, useUser }