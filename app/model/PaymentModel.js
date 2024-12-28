const connection = require("../config/db");
const {promisify} = require("util");

const query = promisify(connection.query).bind(connection);

exports.saveTransaction= async(data)=>{
 let  q = "insert into tbl_transactions(payment_id,payment_name,payment_status,desp) values(?,?,?,?)";

 return await query(q,[data.payment_id,data.payment_name,data.payment_status,data.desp]);
}