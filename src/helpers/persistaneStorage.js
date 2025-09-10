export const getItem = (key) => {
  try{
    return JSON.parse(window.localStorage.getItem(key));
  }catch(e){
    console.log('Error getting data');
    return null;
  }
}

export const setItem = (key, value) => {
  try{
    localStorage.setItem(key, JSON.stringify(value));
  }catch(e){
    console.log('Error saving data');
  }
}