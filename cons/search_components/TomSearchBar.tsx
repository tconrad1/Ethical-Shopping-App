/* TOMS CODE FOR SEARCH BAR LOL */

export default function equalish(input: string,  against: string){
    if(against.length > 3 && input.toLowerCase().indexOf(against.toLowerCase()) != -1){
      return true;
    }
    return false;
  }