import {Routes, Route} from "react-router-dom"

import Cogimyn from "./page/Cogimyn"
import Cogimyun from "./page/Cogimyun"

function Router(){
    return(
        <Routes>
            <Route path="/" element= {Cogimyn} />
            <Route path="/cogimyun" element= {Cogimyun} />
        </Routes>
    )
}

export default Router