import { objectStorage } from "common/constants"



export const fetchImage = (path:string[]) =>{
  let suffix=path.join("/")
  if(suffix.startsWith('/'))suffix=suffix.substr(1)
  return `${objectStorage}${suffix}`
}
  
