import React, {useState} from 'react'
import { Card, Avatar, Progress, Tabs, Badge } from 'antd';
import { useDispatch } from "react-redux";
import { AiFillFacebook, AiOutlineTwitter, AiOutlineMail } from "react-icons/ai"
import CustomButton from "../../CustomButton/CustomButton";
import { getTeamsDetails } from "../../../_actions/user_actions"
import CoverImage from "../../../assets/familyImage.jpg"

const { TabPane } = Tabs;


function LandingPage() {
    const [teamData, setTeamData] = useState({});
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getTeamsDetails())
            .then(response => {
                if(response.payload){
                    setTeamData(response.payload.pages[0])
                }
            })
    }, [])

    return (
        <>
            <img src={CoverImage} style={{ width: '100%', height:'180px' }}  alt="image"/>
            <div className="app">
                <Card className="card-team">
                    <div className="card-items">
                        <Avatar style={{ height: '120px', width: '120px', alignSelf:'center' }} />
                        <CustomButton text="JOIN US" onClick={() => window.location = "http://www.google.com"} />
                        <CustomButton text="DONATE NOW" dark={true} onClick={() => window.location = "http://www.google.com"} />
                        <div style={{ marginTop: '15px', width: '70%' }}>
                            <div style={{ display:"flex", flexDirection: "row", justifyContent: "space-between", marginBottom:'-8px' }}>
                                <div><span style={{fontSize: '16px'}}>${teamData.revenue || "0.00"}</span> <span style={{color:'gray'}}> Raised</span></div>
                                <div style={{ alignSelf: "end", color:'gray' }}>${teamData.goal || "0.00"}</div>
                            </div>
                            <Progress strokeLinecap="square" strokeColor="#8b0023" percent={30} showInfo={false} />
                        </div>
                        <div style={{ color:'gray', marginTop: '15px' }}>Campaign</div>
                        <Avatar style={{ height: '60px', width: '60px' }} />
                        <div style={{ marginTop: '15px' }}>{teamData.creative || ""}</div>
                        <div style={{ marginTop: '5px' }}>$445.40/$10,000.00</div>
                        <Progress strokeLinecap="square" strokeColor="#8b0023" percent={30} showInfo={false} />
                    </div>
                </Card>
                <div className="team-info">
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", flexDirection: "row",  marginTop: '5px' }}>
                            <div style={{ marginTop: '10px' }}>{teamData.mode || ""}</div>
                            <div style={{ display: "flex", flexDirection: "row", marginLeft: '15px'}}>
                                <Avatar style={{ marginLeft: '5px'}}>DA</Avatar>
                                <div>
                                    <div>Team Page</div>
                                    <div style={{ color: 'gray', fontSize:'12px' }}>{teamData.owner || ""}</div>
                                </div>
                            </div>
                        </div>
                        <div>Share <AiFillFacebook onClick={() => window.location = "http://www.google.com"} />
                        <AiOutlineTwitter onClick={() => window.location = "http://www.google.com"} />
                        <AiOutlineMail onClick={() => window.location = "http://www.google.com"} /> </div>
                    </div>
                    <div style={{ fontSize: '24px', fontWeight: '600' }}>{teamData.pageName || ""}</div>
                    <div style={{ color: 'gray', fontSize: '12px' }}>Help us raise money</div>
                    <Tabs defaultActiveKey="1" onChange={() => {}} >
                        <TabPane tab="CAPTAINS" key="1">
                            <div style={{ display: 'flex', flexDirection: "row" }}>
                                {teamData.members && teamData.members.length > 0 &&

                                    teamData.members.map(item =>
                                        <div style={{ display: 'flex', flexDirection: "column", margin: '0px 20px' }}>
                                            <span style={{ color: 'gray', fontSize: '12px', alignSelf:'center' }}>Current lead</span>
                                            <Avatar style={{ height: '80px', width: '80px', alignSelf:'center', margin: '15px 0px'  }} src={item.picture} />
                                            <span style={{ color: 'black', fontSize: '12px', alignSelf:'center' }}>{item.full_name || ""}</span>
                                            <span style={{ fontSize: '10px', alignSelf:'center' }}>{item.totals > 1 ? item.totals + " donors": "$"+ (item.revenue || "0.00") + " raised"}</span>
                                        </div>
                                    )
                                }
                            </div>
                        </TabPane>
                        <TabPane tab={
                            <Badge count={"3"} offset={[10, 5]}>
                                NEWS
                            </Badge>
                        } key="2">
                            news
                        </TabPane>
                    </Tabs>
                    <Tabs defaultActiveKey="1" onChange={() => {}} >
                        <TabPane tab="INTRODUCTION" key="1">
                            <div style={{ fontSize:'18px', color:'black' }}>
                                Thanks for visiting our fundraising page!
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                Thanks for visiting our fundraising page!
                            </div>
                            <div style={{ marginTop: '10px' }}>
                                Thanks for visiting our fundraising page!
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                Thanks for visiting our fundraising page!
                            </div>
                            <div style={{ marginTop: '10px' }}>
                                Thanks for visiting our fundraising page!
                            </div>
                        </TabPane>
                        <TabPane tab={
                            <Badge count={5} offset={[10, 5]}>
                                NEWS
                            </Badge>
                        } key="2">
                            news
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </>
    )
}

export default LandingPage
