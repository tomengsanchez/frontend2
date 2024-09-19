import DashboardHome from "./Modules/Dashboard/DashboardHome";
import MasterlistHome from "./Modules/Masterlist/MasterListHome";
import ReportsHome from "./Modules/Reports/ReportsHome";
import RequestHome from "./Modules/Request/RequestHome";
import SettingsHome from "./Modules/Settings/SettingsHome";

export default function RenderPage(props){

    // console.log(props);
    if(props.renderPage === 'masterlist')
        return <MasterlistHome></MasterlistHome>
    else if(props.renderPage === 'request')
        return <RequestHome></RequestHome>
    else if(props.renderPage === 'settings')
        return <SettingsHome></SettingsHome>
    else if(props.renderPage === 'reports')
        return <ReportsHome></ReportsHome>
    else
        return <DashboardHome></DashboardHome>
  }