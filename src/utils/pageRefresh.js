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
        return storedData;
    }catch(error){
        console.log("Failed to store data: ", error);        
    }
}


export function clearData(key){
    try{
        let clearedData = sessionStorage.removeItem(key);
        console.log("Cleared data===============", clearedData)
        return clearedData;
    }catch(error){
        console.log("Failed to store data: ", error);      
    }
}