/* eslint-disable no-useless-escape */
import { EMAIL, PHONE } from "../constants";

export const handleValidation = ({type, value}: {type: string, value: string}): boolean => {
  let regex: RegExp | null = null
  
  switch(type) {
    case EMAIL:
      regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
      break;
    case PHONE:
      regex = new RegExp(/^[+][0-9]*$|^[0-9]*$/g)
      break;
    default:
      regex = null
  }

  return regex ? regex.test(value) : false
}