import Linechart from "./component/Linechart";

import { luminaLinechartData } from "./data/luminaLineChartData";

import Nav from "./component/Nav";
import BackHome from "./component/BackHome"

export default function Lumina() {

  const idealLuminaMin = 80
  const idealLuminaMax = 95
  const luminaFit = 88.3
  const luminaQuality = 5.4

  return (<>
      <div className="w-full  h-fit flex flex-col items-center bg-teal-50">
     {/* page 4 */}
          <div className="w-[90%] h-screen  flex flex-col items-center ">
            <div className="w-full h-full flex flex-col items-center  justify-center">
              <span className="text-3xl font-bold">조도 환경</span>
              <div className="w-full h-[50%]">
                <Linechart data={luminaLinechartData} />
              </div>
              <div className="text-xl font-bold text-center mb-4">
                <span>이상적인 생육 조도는 {idealLuminaMin}에서 {idealLuminaMax}% 사이에요 <br />
                    이 토마토는 {luminaFit} % 조도조건을 만족하는 <br /> 상위 {luminaQuality}% 에 드는 상품이이에요</span>
              </div>
          <Nav />
        <BackHome/>
          
        </div>
        
          </div>
      </div >
  </>)
}

