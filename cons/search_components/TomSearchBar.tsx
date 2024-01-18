/* TOMS CODE FOR SEARCH BAR LOL */

export default function equalish(input: string,  against: string){
    if(against.length > 3 && input.indexOf(against) != -1){
      return true;
    }
    return false;
  }