
import { Avatar } from "@mui/material";
import tomato from "./image/tomato.png"
import Radar from "./component/Radar";

import profile from "./image/farmalProfile.png"

import Nav from "./component/Nav";

export default function Home() {

  const farmerName = '안혁수'
  const productName = '짭짤이 토마토'

  const overallScore = 4.2
  return (<>
  {/* page 1 */}
  <div className="w-[90%] h-screen flex flex-col items-center ">
      <div className=" w-full flex flex-col justify-center mt-24">
        <div className="text-center text-2xl mb-2 font-bold" >해풍을 맞고 자라 더 맛있는</div>
        <div className=" text-6xl font-extrabold leading-none tracking-tighter text-black flex flex-col items-center">
          {productName}
        </div>
      </div>
      <img src={tomato} alt="" className="w-[80%] pt-16" />
  </div>      
  {/* page 2 */}
  <div className="w-full h-screen  flex flex-col items-center  bg-teal-50">
    <div className="w-[90%] h-full flex flex-col items-center  ">
      <div className=" mr-auto mt-8 flex">
        <Avatar sx={{ width: 180, height: 180 }} src={profile} className="mt-4"/>
        <div className=" break-keep ml-4 text-lg">
          <span className="text-2xl">안녕하세요! </span><br />
            저는 <span className="font-bold text-2xl">부산 대저동</span>에서 정성을 담아 <span className="text-2xl font-bold">토마토</span>를 키우는
            <span className="font-bold text-2xl">{farmerName}</span> 입니다. <br />
          저희 농장에서는 <br /> <span className="text-2xl font-bold">토마토</span>를 전문적으로 키우고 있습니다. <br />
        </div>
      </div>
      <div className="text-center w-full  pt-20  text-lg leading-relaxed">
          소중한 대저의 흙과 햇살을 담은 이 토마토는 <br /> <span className="font-bold text-xl">짭짤한 맛과 단단한 과육</span>의 특징을 가지고 있어요. <br />
          저희 농장에서는 환경과 건강을 생각하여 <br /> <span className="font-bold text-xl">무농약 재배</span>를 실천하고 있습니다. <br />
        저희는 <span className="font-bold text-xl">엄격한 기준</span>으로 토마토를 <span className="font-bold text-xl">선별</span>하여 <br />
        고객님께 <span className="font-bold text-xl">최상의 상품</span>만을 선보임을 <span className="font-bold text-xl">약속</span>드립니다. <br />
        <span className="font-bold text-2xl">
          입에 담는 순간 시원한 맛이 터져나오는
          <br /> 대저 토마토를 마음껏 즐겨보세요!
        </span>
      </div>
    </div>
  </div>
  {/* page 6 */} 
  <div className="w-full h-screen  flex flex-col items-center  bg-teal-50">
    <div className="w-[90%] h-full flex flex-col items-center  justify-center">
      <span className="text-5xl font-bold ">종합 점수</span>
      <div className="w-full   h-[50%]">
        <Radar/>
      </div>
      <div className="text-xl font-bold text-center ">
        이 {productName}의 종합 점수는 <br /> 5점 만점에 {overallScore} 점 입니다. 
      </div>
      <div className="text-2xl font-bold mt-2">
        이 점수는 어떻게 매겨졌을까요 ?
      </div>
        <div className="mt-2 text-lg font-bold ">
          자세한 내용을 보려면 아래 버튼을 눌러주세요
        </div>
        <Nav/>
    </div>
  </div>
  </>)
}
