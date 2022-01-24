
import { Routes, Route} from "react-router-dom";

import { DcScreen } from '../Components/dc/DcScreen';
import { HeroScreen } from "../Components/hero/HeroScreen";
import { MarvelScreen } from '../Components/marvel/MarvelScreen';
import { SearchScreen } from '../Components/search/SearchScreen';
import { Navbar } from "../Components/ui/Navbar";


export const DashboardRoutes = () => {
  return <> 
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="dc" element={<DcScreen />} />
                    <Route path="search" element={<SearchScreen />} />
                    <Route path="hero" element={<HeroScreen />} />
                    <Route path="/" element={<MarvelScreen />} />
                </Routes>
                        
            </div>
        </>;
};
