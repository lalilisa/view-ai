




import '../admin/css/tables/animate.css'
import '../admin/css/tables/bootstrap.min.css'
import '../admin/css/tables/font-awesome.min.css'
import '../admin/css/tables/main.css'
import '../admin/css/tables/util.css'
import '../admin/css/tables/perfect-scrollbar.css'
import '../admin/css/tables/select2.min.css'
import '../admin/css/tables/logoutbutton.css'
export const Table=()=>{

    return(
        <div className="limiter" style={{width:'100%',margin:0,position:"relative",top:'0',backgroundColor:'white'}}>
                <div className='logout'>
                    <span className="user">Trí Mai</span> <button className="logoutbutton">Log out</button>
                </div>

                <div className="container-table100customize">
                 
                    <div className="wrap-table100">
                    <div className="table100 ver2 m-b-110">
                        <div className="table100-head">
                            <table>
                                <thead>
                                <tr className="row100 head">
                                    <th className="cell100 column1">ID</th>
                                    <th className="cell100 column2">Input</th>
                                    <th className="cell100 column3">Output</th>
                                    <th className="cell100 column4">Length</th>
                                    <th className="cell100 column5">Words</th>
                                    <th className="cell100 column6">Conversion Time</th>
                                    <th className="cell100 column7">Audio path</th>
                                    <th className="cell100 column8">Hash code</th>
                                    <th className="cell100 column9">Action</th>
                                </tr>
                                </thead>
                            </table>
                        </div>
                        <div className="table100-body js-pscroll ps ps--active-y">
                            <table>
                                <tbody>
                                <tr className="row100 body">
                                    <td className="cell100 column1">1</td>
                                    <td className="cell100 column2">Cuối cùng cũng đến cuối tuần. Ta còn đi chơi</td>
                                    <td className="cell100 column3">audio1.wav</td>
                                    <td className="cell100 column4">0:08</td>
                                    <td className="cell100 column5">10</td>
                                    <td className="cell100 column6">31s</td>
                                    <td className="cell100 column7">bin/output</td>
                                    <td className="cell100 column8">St1hv82DXAhC1Fg4g7Bs</td>
                                    <td className="cell100 column9"><button className="btn-delete">Delete</button></td>
                                </tr>
                                <tr className="row100 body">
                                    <td className="cell100 column1">2</td>
                                    <td className="cell100 column2">Làm thế nào để tạo trái đất?</td>
                                    <td className="cell100 column3">audio2.wav</td>
                                    <td className="cell100 column4">0:04</td>
                                    <td className="cell100 column5">7</td>
                                    <td className="cell100 column6">12s</td>
                                    <td className="cell100 column7">bin/output</td>
                                    <td className="cell100 column8">jPVGp6lrKTaf5rIgT2Us</td>
                                    <td className="cell100 column9"><button className="btn-delete">Delete</button></td>
                                </tr>
                                <tr className="row100 body">
                                    <td className="cell100 column1">3</td>
                                    <td className="cell100 column2">Con gà mái là con gà trống</td>
                                    <td className="cell100 column3">audio3.wav</td>
                                    <td className="cell100 column4">0:05</td>
                                    <td className="cell100 column5">8</td>
                                    <td className="cell100 column6">13s</td>
                                    <td className="cell100 column7">bin/output</td>
                                    <td className="cell100 column8">BH5ebzb2hlOlJ2FXrQ4O</td>
                                    <td className="cell100 column9"><button className="btn-delete">Delete</button></td>
                                </tr>
                                <tr className="row100 body">
                                    <td className="cell100 column1">4</td>
                                    <td className="cell100 column2">Ta bị khùng và không bị khùng</td>
                                    <td className="cell100 column3">audio4.wav</td>
                                    <td className="cell100 column4">0:05</td>
                                    <td className="cell100 column5">7</td>
                                    <td className="cell100 column6">12s</td>
                                    <td className="cell100 column7">bin/output</td>
                                    <td className="cell100 column8">qKrxDajYaFAtuJS1Tbdy</td>
                                    <td className="cell100 column9"><button className="btn-delete">Delete</button></td>
                                </tr>
                                </tbody>
                            </table>
        
                        </div>

                    </div>

                    
                        </div>
                    </div>
                    </div>

    )
}