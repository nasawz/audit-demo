/**
 * create by nasa.wang
 */
import React from 'react'
import PureRenderDecoratorMixin from '../../common/pure-render-decorator-mixin.js'

import NavigateMixin from '../../common/navigate-mixin.js'
import ClueTopItem from '../../../components/audit/clue/clue-top-item.jsx'
import Pan from '../../../components/audit/pan/pan.jsx'
import Alert from '../../../components/audit/alert/alert.jsx'
import AlertChart from '../../../components/audit/alert/alertChart.jsx'
import HeaderBar from 'audit/bar/header-bar.jsx'
import SideNavBar from 'audit/bar/side-nav-bar.jsx'
import SideNavBarItem from 'audit/bar/side-nav-bar-item.jsx'
import ContentWapper from 'audit/layout/content-wapper.jsx'

import navConf from '../nav-config.js'

const Clue = React.createClass({
    mixins:[PureRenderDecoratorMixin,NavigateMixin],
    uploadeFile(){
        this.setState({
    		showAlert:true,
    	})
    },
    showAlert(){
        this.setState({
            show:true,
        })
    },
    goReload(ns){
        if(ns == 's1'){
            this.setState({
                page:'s1'
            })
        }else{
            this.setState({
                page:'s2'
            })
        }
    },
    cAlert(){
        this.setState({
            show:false,
        })
    },
    cAlert1(){
        this.setState({
    		show:false,
            result:true
    	})
    },
    closeAlert(data){

    	this.setState({
    		showAlert:false,
    	})
    },

    getInitialState(){
        return{
            show:false,
            page:'s2',
            showAlert:false,
            result:false,
        }
    },
    componentDidMount() {
        this.props.actions.sayHello('Clue')
    },
    renderList(){
        if(this.state.page == 's2'){
            return(
                <div className="columns ">
                    <ClueTopItem cls="column current" onShow={this.uploadeFile} link_href="http://wwww.com" link_href2="http://hhh.com" content="包月不限流量套餐"/>
                    <ClueTopItem cls="column "  link_href="http://wwww.com" link_href2="http://hhh.com" content="终端采购价调整管理"/>
                    <ClueTopItem cls="column "  link_href="http://wwww.com" link_href2="http://hhh.com" content="年度积分回馈率过高"/>
                    <ClueTopItem cls="column "  link_href="http://wwww.com" link_href2="http://hhh.com" content="通过合作业务方式
开展自有业务"/>
                </div>
            )
        }else{
            return(
                <div className="columns ">
                    <ClueTopItem cls="column current" onShow={this.uploadeFile} link_href="http://wwww.com" link_href2="http://hhh.com" content="个人账户对外支付"/>
                    <ClueTopItem cls="column "  link_href="http://wwww.com" link_href2="http://hhh.com" content="大额资金支付是否合规、正确核算"/>
                    <ClueTopItem cls="column hide"/>
                    <ClueTopItem cls="column hide" />
                </div>)
        }
    },

    renderLeftBtm(){
        if(this.state.page == 's2'){
            return(
                <div className="column cLeft">
                    <div className="cItem">
                        <p className="p1">发现疑似超低流量资费套餐</p>
                        <p className="p2">
                            <span>221</span>个
                        </p>
                        <p className="p3">
                            问题严重城市：芜湖    淮南    滁州
                        </p>
                        <p className="p4">
                            <i className="icon">
                                <img src={require('../../../img/c2.png')} />
                            </i>
                            <a href="./8g.xlsx">《流量超过8G的用户清单和收入》</a>
                            <a className="look" href="./8g.xlsx">查看</a>
                        </p>
                    </div>
                    <p className="tit">集团数据发现</p>
                </div>
            )
        }else{
            return(
                <div className="column cLeft">
                    <div className="cItem green">
                        <p className="p1">大额资金支付管控符合相关要求，核算正确。</p>
                        <p className="p2">
                            <span></span>
                        </p>
                        <p className="p3">
                            问题严重城市：问题严重城市：无
                        </p>
                        <p className="p4">
                            <i className="icon">
                                <img src={require('../../../img/c2.png')} />
                            </i>
                            <a href="javascript:;">《应付明细表》</a>
                            <a className="look" href="javascript:;">查看</a>
                        </p>
                    </div>
                    <p className="tit">集团数据发现</p>
                </div>
            )
        }
    },

    renderRightP2(){

        if(this.state.result){
            return(<p className="p2">
                <span>101</span>个
            </p>)
        }else{
            return(
                <p className="p2">
                    <span>待分析</span>
                </p>
            )
        }
    },
    renderRightP3(){
        if(this.state.result){
            return(
                <p className="p3">
                    问题严重城市：宣城    六安    池州
                </p>
            )
        }else{
            return(
                <p className="p3">
                    问题严重城市：
                </p>
            )
        }
    },
    renderRightP4(){
        if(this.state.result){
            return(
                <p className="p4">
                    <i className="icon">
                        <img src={require('../../../img/c2.png')} />
                    </i>
                    <a href="./libs/zd.xlsx">《低资费高流量套餐清单》</a>
                    <a className="look" href="./d.xlsx">查看</a>
                </p>
            )

        }else{
            return(
                <p className="p4" >
                    <i className="icon">
                        <img src={require('../../../img/c3.png')} />
                    </i>
                    <a href="javascript:;" onClick={this.showAlert}>上传数据文件</a>
                </p>
            )
        }
    },
    renderRightBtm(){
        if(this.state.page == 's2'){
            return(
                <div className="column cRight">
                    <div className="cItem green">
                        <p className="p1">发现疑似低流量资费套餐</p>
                            {this.renderRightP2()}
                            {this.renderRightP3()}
                            {this.renderRightP4()}

                    </div>
                    <p className="tit">省数据发现</p>
                </div>
            )
        }else{
            return(
                <div className="column cRight">
                    <div className="cItem green">
                        <p className="p1">大额资金支付管控情况</p>
                            <p className="p2">
                                <span>待分析</span>
                            </p>
                            <p className="p3">
                                问题严重城市：
                            </p>
                            <p className="p4" >
                                <i className="icon">
                                    <img src={require('../../../img/c3.png')} />
                                </i>
                                <a href="javascript:;" onClick={this.showAlert}>上传数据文件</a>
                            </p>
                    </div>
                    <p className="tit">省数据发现</p>
                </div>
            )
        }
    },
    renderResult(){
        if( this.state.result){
                return(
                    <div className="clueResultContent">
                        集团数据通过粗略的分析发现疑似问题套餐221个，经过省公司精确的明细数据进一步核实，发现共101个问题套餐，双方共同发现的套餐数为80个。
                    </div>
                )
        }else{
            return(
                <div className="clueResultContent">
                    等待省数据综合分析结果...
                </div>

            )
        }
    },
    renderBtm(){
        let cc4 = require('../../../img/c4.jpg')
        let cc5 = require('../../../img/c5.jpg')
        if(this.state.result){
            return(
                <div className=" bBottom">
                    <img src={cc4} />
                    <img src={cc5} />
                </div>
            )
        }else{
            return <div />
        }

    },
    render () {

        return (
            <div>
                    <AlertChart show={this.state.showAlert} close={this.closeAlert} title='包月不限流量套餐

' >
                    		<h3>
                    			审计点说明
                    		</h3>
                            <ul>
                                <li>是否设置包月不限流量套餐</li>
                            </ul>
                            <h3>分析思路</h3>
                            <ul>
                                <li>总部已提取的《流量超过8G的用户清单和收入》，如消费很低，可能存在包月不限流量套餐或低价流量资费。结合省公司的套餐全量表看。</li>
                                <li>BOSS系统4G资费套餐价格分析、流量类营销活动分析</li>
                            </ul>
                            <h3>总部数据提取步骤</h3>
                            <ul>
                                <li>数据来源：业务量中间表：</li>
                                <li>dwbview.dm_sum_cust_svc_mon</li>
                            </ul>
                    </AlertChart>
                    <Alert show={this.state.show} close={this.cAlert} closeF={this.cAlert1} />

                <HeaderBar />
                <div>
                    <SideNavBar>
                            <SideNavBarItem icon="home" path={navConf.leftnav[0]} />
                            <SideNavBarItem icon="overview" path={navConf.leftnav[1]}  />
                            <SideNavBarItem icon="circle" path={navConf.leftnav[2]} />
                            <SideNavBarItem icon="chart" path={navConf.leftnav[3]} />
                            <SideNavBarItem icon="clue" path={navConf.leftnav[4]} selected />
                            <SideNavBarItem icon="brace" path={navConf.leftnav[5]}  />
                            <SideNavBarItem icon="jieguozhanshi" path={navConf.leftnav[7]}  />
                            <SideNavBarItem icon="xcreategroup" path={navConf.leftnav[6]}  />
                    </SideNavBar>
                    <ContentWapper>
                        <div className="columns clueBox">
                            <div className="column is-4 clueLeft">
                                <div>
                                    <Pan onPanChange={this.goReload} />
                                </div>
                                <div className="clueResult">
                                    <p>综合发现</p>
                                    {this.renderResult()}
                                </div>
                            </div>
                            <div className="column clueRight">
                                <h3 className="clueRightTit">审计点名称</h3>
                                {this.renderList() }
                                <div className=" clueRBtm">
                                    <div className="columns bTop">
                                        {this.renderLeftBtm()}
                                        {this.renderRightBtm()}

                                    </div>
                                    {this.renderBtm()}
                                </div>
                            </div>
                        </div>
                    </ContentWapper>
                </div>
            </div>
        )
    }
})

export default Clue
