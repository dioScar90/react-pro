import { LoginCard } from './components/LoginCard'
import { useLoginViewModel } from './useLoginViewModel'

export const Login = () => {
  useLoginViewModel()

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-primary">
          <LoginCard />
      </div>
    </>
  )
}
