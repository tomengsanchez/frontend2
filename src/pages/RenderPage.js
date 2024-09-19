import DashboardHome from "./Modules/Dashboard/DashboardHome";
import MasterlistHome from "./Modules/Masterlist/MasterListHome";
import RequestHome from "./Modules/Request/RequestHome";

export default function RenderPage(props){

    console.log(props);
    if(props.renderPage === 'masterlist')
        return <MasterlistHome></MasterlistHome>
    else if(props.renderPage === 'request')
        return <RequestHome></RequestHome>
    else
        return <DashboardHome></DashboardHome>
  }