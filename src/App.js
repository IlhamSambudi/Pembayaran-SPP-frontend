  import React from "react"
  import { Switch, Route } from "react-router-dom";
  import Login from "./pages/Login"
  import History from "./pages/History"
  import Kelas from "./pages/Kelas"
  import Transaksi from "./pages/Transaksi"
  import Home from "./pages/Home"
  import Siswa from "./pages/Siswa"
  import Spp from "./pages/Spp"
  import Petugas from "./pages/Petugas"


  export default class App extends React.Component{
    render(){
      return(
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/history" component={History} />
          <Route path="/kelas" component={Kelas} />
          <Route path="/transaksi" component={Transaksi} />
          <Route path="/siswa" component={Siswa} />
          <Route path="/spp" component={Spp} />
          <Route path="/petugas" component={Petugas} />

        </Switch>
      )
    }
  }
