import Linechart from "./component/Linechart";

import { humdLinechartData } from "./data/humdLineChartData";

import Nav from "./component/Nav";
import BackHome from "./component/BackHome"


export default function Humd() {
  
  const idealHumdMin = 80
  const idealHumdMax = 92
  const humdFit = 92.7
  const humdQuality = 18.2

  return (<>
      <div className="w-full  h-fit flex flex-col items-center bg-teal-50">
     {/* page 4 */}
          <div className="w-[90%] h-screen  flex flex-col items-center ">
            <div className="w-full h-full flex flex-col items-center  justify-center">
              <span className="text-3xl font-bold">습도 환경</span>
              <div className="w-full h-[50%]">
                <Linechart data={humdLinechartData} />
              </div>
              <div className="text-lg font-bold text-center mb-4">
                <span>이상적인 생육습도는 <br /> {idealHumdMin}에서 {idealHumdMax}% 사이에요 <br />
                    조건을 {humdFit} % 만족하는 <br /> 상위 {humdQuality}% 상품입니다</span>
              </div>
          <Nav />
        <BackHome/>
          
        </div>
          </div>
      </div >
  </>)
}
