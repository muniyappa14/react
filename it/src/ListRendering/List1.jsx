import React from "react"
import employee from "./list2"
class List1 extends React.Component{
    
render(){
    return<div>
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <table className="table table-hover table-dark table-bordered">
                        <thead >
                            <tr>
                                <th>id</th>
                            <th>name</th>
                            <th>email</th>
                            <th>gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employee.map((imp ,index)=>{
                                    return <><tr key={index}>
                                        <td>{imp.id}</td>
                                        <td>{imp.name}</td>
                                        <td>{imp.email}</td>
                                        <td>{imp.gender}</td>
                                    </tr>
                                    </>
                                })
                            }
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    </div>
}

}
export default List1