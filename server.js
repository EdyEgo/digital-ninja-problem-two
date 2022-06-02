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
  

  console.log('-------------------------------------------------------------->')
  findSalesVolumeForEachCity(orders,clients)
console.log('<-------------------------------------------------------------->>')
  findClientsthatMeetSaleStandard(2,40,clients,orders)
  console.log('<--------------------------------------------------------------')
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
      citySales[clientCity].salesVolume += order.value
    }) 
  
   

         Object.entries(citySales).forEach(([cityName,value])=>{
             // display
           console.log('City:',cityName,'sales worth:',value.salesVolume)
        })
      return citySales

  }

  function findClientsthatMeetSaleStandard(numberOfOrders,minimSpendedSum,clients,orders){
    
    const fitClients = {}


  
     for(let index = 0;index < orders.length;index++ ){
        
          const orderObject = orders[index]
        
          const clientId = orderObject.client_id
          const clientObject = clients.find((client)=>clientId === client.id)
       
          if(!clientObject) continue
      
          if(fitClients[clientObject.name]){ 

             fitClients[clientObject.name].orders += 1
             fitClients[clientObject.name].totalSpent +=orderObject.value

             continue
          }

          fitClients[clientObject.name] = {orders:1,totalSpent:orderObject.value}

     } 

     Object.entries(fitClients).forEach(([clientName,clientValue])=>{
       // display
        if(clientValue.orders >= numberOfOrders && clientValue.totalSpent >= minimSpendedSum){
            console.log(`Client ${clientName} has spent ${minimSpendedSum} with at least ${numberOfOrders} orders(${clientValue.orders})`)
        }
     })

     
  
     return fitClients
  

  }
  