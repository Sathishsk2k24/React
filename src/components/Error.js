import { useRouteError } from "react-router-dom"
const Error = () => {
    let errObj = useRouteError();
  return (
    <div>
        <h1>Oops! Something went wrong!!</h1>
        <h3>{errObj?.error?.message}</h3>
    </div>
  )
}

export default Error