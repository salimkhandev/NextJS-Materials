import React from "react";

async function useGetQuery() {
            let response = await fetch('https://jsonplaceholder.typicode.com/users/')
           let data= await response.json()
           return data;
}

export default useGetQuery;
