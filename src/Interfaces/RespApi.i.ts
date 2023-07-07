
export interface RespApi {
    data?: Daum[]
    isLoading: boolean
    hasError: any
  }
  
  export interface Daum {
    quote?: string
    author: string
  }
  