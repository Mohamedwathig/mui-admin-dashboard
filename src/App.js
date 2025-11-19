import { ColorModeContext, useMode } from "./them";
import {Routes,Route} from "react-router-dom"
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/dashboard/global/Topbar";
import Sidebar from "./scenes/dashboard/global/Sidebar";
import Dashboard from "./scenes/dashboard/index";
// import Dashboar from ".scenes/dashboard"
import Team from "./scenes/dashboard/team/index";
import Contacts from "./scenes/contacts/index";
import Invoices from "./scenes/invoices/";
import Form from "./scenes/from/index";
import Calender from "./scenes/calender/index";
import FAQ from "./scenes/faq/index"
import Bar from "./scenes/bar/index"
import Line from "./scenes/line/index"
import Pie from "./scenes/pie/index"
import Geography from "./scenes/geography/index"
function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar/>
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="" element={<Dashboard/>}/>
              <Route path="/team" element={<Team/>}/>
              <Route path="/contacts" element={<Contacts/>}/>
              <Route path="/invoices" element={<Invoices/>}/>
              <Route path="/form" element={<Form/>}/>
              <Route path="/calander" element={<Calender/>}/>
              <Route path="/faq" element={<FAQ/>}/>
              <Route path="/bar" element={<Bar/>}/>
              <Route path="/pie" element={<Pie/>}/>
              <Route path="/line" element={<Line/>}/>
              <Route path="/geography" element={<Geography/>}/>








              {/* 
               */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

