import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [allstores, setAllStores] = useState([])

  function createAstore(event){
    event.preventDefault();

    const storeObj = {
      location: event.target.location.value,
      minCustomers: event.target.minCustomers.value,
      maxCustomers: event.target.maxCustomers.value,
      avgCookies: event.target.avgCookies.value
    }
    setAllStores([...allstores, storeObj]);
  }
  function lastStoreData(){
    if (allstores.length == 0){
      return;
    }
    return allstores[allstores.length -1]
  }
  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex items-center justify-between p-4 bg-green-500 text-black-100 text-3xl mb-8">
        <h1 className="text-4xl">Cookie Stand Admin</h1>
      </header>
      <main>
        <form onSubmit={ createAstore } className="bg-green-200 p-8 w-9/15 rounded-md items-center mx-auto"> 
        <div className="flex items-center mx-auto text-center">
          <h1 class="inline-block align-top">Create Cookie Stand</h1>            
        </div>
            <div className="flex items-center">
              <label name="location" className="text-xs w-full">Location:
              <input type="text" name="location" className=""></input></label>  
              
              <label for="minCustomers" className="text-xs w-full">Minimum Customers </label>
              <input name="minCustomers" type="number" className="" />
              
              <label for="maxCustomers"className="text-xs w-full">Maximum Customers per Hour</label>
              <input name="maxCustomers" type="number" className="" />
              
              <label for="avgCookies" className="text-xs w-full">Average Cookies per Sale</label>
              <input name="avgCookies" type="number" className=""/>
              
              <button className="px-10 py-4 m-2 text-xs bg-green-500">Create</button>
            
            </div>
        </form>

        <div className="w-1/2 m-3 mx-auto">
            <p className="mx-auto mt-5 mb-5 text-center">Report Table Coming Soon...</p>
            <p className="mx-auto mt-5 mb-5 font-mono text-center">{ JSON.stringify(lastStoreData()) }</p>
        </div>

      </main>

      <footer className="p-3 bg-green-500">
        <p>&copy;Garfield Grant 2021</p>
      </footer>

    </div>
  )
}