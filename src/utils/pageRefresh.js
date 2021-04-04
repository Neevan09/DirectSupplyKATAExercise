export function retrieveData (key){
    let data;
    try{
        data = JSON.parse(sessionStorage.getItem(key));
    }catch(error){
        console.log("Failed to retieve data: ", error);        
    }
    finally{
        return data;
    }
}

export function storeData(key,data){
    try{
        let storedData = sessionStorage.setItem(key, JSON.stringify(data));
        console.log("storedData==================",storedData);
        return storedData;
    }catch(error){
        console.log("Failed to store data: ", error);        
    }
}