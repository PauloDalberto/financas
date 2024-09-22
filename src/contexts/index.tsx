import { ValueDataProvider } from "./ExpenseContext"
import { UserProvider } from "./UserContext"

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return(
    <ValueDataProvider>
      <UserProvider>
        {children}
      </UserProvider>
    </ValueDataProvider>
  )
}