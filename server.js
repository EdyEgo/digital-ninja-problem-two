// Cerinte

// Comenzile pot avea un client, dar au obligatoriu o valoare. Clientii au obligatoriu un nume si o localitate:
// Folosind aceste date dummy si fara user interface (-> console output) programul trebuie sa furnizeze raspunsul la urmatoarele intrebari:

// 1. Care e volumul (suma) de vanzari pe fiecare oras.
// 2. Care sunt clientii (nume) cu cel putin 2 comenzi in valoare totala de cel putin 40.

const orders = [
    {
      id: 1,
      client_id: 1,
      value: 21,
    },
    {
      id: 2,
      client_id: 1,
      value: 2,
    },
    {
      id: 3,
      client_id: 1,
      value: 12,
    },
    {
      id: 4,
      client_id: 2,
      value: 34,
    },
    {
      id: 5,
      client_id: 2,
      value: 13,
    },
    {
      id: 6,
      client_id: 3,
      value: 12,
    },
    {
      id: 7,
      client_id: 3,
      value: 9,
    },
    {
      id: 8,
      client_id: 4,
      value: 44,
    },
    {
      id: 9,
      client_id: null,
      value: 20,
    },
  ];
  
  const clients = [
    {
      id: 1,
      name: "Alice",
      city: "Bucharest",
    },
    {
      id: 2,
      name: "Bob",
      city: "Belgrade",
    },
    {
      id: 3,
      name: "Charlie",
      city: "Budapest",
    },
    {
      id: 4,
      name: "Dan",
      city: "Bucharest",
    },
  ];
  


  findSalesVolumeForEachCity(orders,clients)

  function findSalesVolumeForEachCity(orders,clients){
     
    const citySales = {}
 
    // store cities
    clients.forEach((client,index)=>{
        if(!citySales[client.city]) { // if there is no city stored

                citySales[client.city] = {salesVolume:0, 
                 
                
                }// store the city
         return 
        }
       
    })
 

    orders.forEach((order)=>{
    
      const clientIdOfOrder = order.client_id
      const clientObject = clients.find((client)=>clientIdOfOrder === client.id)
      
      if(!clientObject) return 

      const clientCity = clientObject.city
      citySales[clientCity].salesVolume += 1
    }) 
  
    console.log('city sales' ,citySales)

        return Object.entries(citySales).forEach(([cityName,value])=>{
           console.log('City:',cityName,'made',value.salesVolume,'sales')
        })
      

  }
  