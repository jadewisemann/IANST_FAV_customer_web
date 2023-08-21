import Linechart from "./component/Linechart";

import { tempLinechartData } from "./data/tempLinechartData";
import Nav from "./component/Nav";
import BackHome from "./component/BackHome"

export default function Temp() {

  const idealTempMin = 24
  const idealTempMax = 28
  const tempFit = 82.7
  const tempQuality = 22.1

  return (<>
      <div className="w-full  h-fit flex flex-col items-center bg-teal-50">
     {/* page 4 */}
          <div className="w-[90%] h-screen  flex flex-col items-center ">
            <div className="w-full h-full flex flex-col items-center  justify-center">
              <span className="text-3xl font-bold">온도 환경</span>
              <div className="w-full h-[50%]">
                <Linechart data={tempLinechartData} />
              </div>
              <div className="text-xl font-bold text-center mb-4">
                <span>이상적인 생육온도는 {idealTempMin}에서 {idealTempMax}도 사이에요 <br />
                    이 토마토는 {tempFit} % 온도조건을 만족하는 <br /> 상위 {tempQuality}% 에 드는 상품이이에요</span>
          </div>
        <Nav/>
        <BackHome/>
          
        </div>
        
          </div>
      </div >
  </>)
}
