import { useFetch } from "../hooks/useFetch"
// import { RespApi } from "../Interfaces/RespApi.i";

export const MultipleCustomHooks = () => {


  const { data, isLoading, hasError } = useFetch('https://api.breakingbadquotes.xyz/v1/quotes')

  // console.log({ data, isLoading, hasError });

  // Si la data tiene un valor(!!), entonces(&&), toma la data en la posicion 0.
  const { author, quote } = !!data && data[0];




  
  

  return (

    <>
      <h1>BrackingBad Quotes</h1>
      <hr />

      {
        (isLoading)
          ? (
            <div className=" alert alert-info text-center">
              Loading...
            </div>
          )
          : (
            <blockquote className="blockquote text-end">
              <p className="mn-1"> { quote } </p>
              <footer className="blockquote-footer"> { author } </footer>
            </blockquote>

          )
      }






    </>

  )
}
