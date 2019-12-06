const data=require("./mock/data.json")
module.exports={
    devServer:{
        before(app){
            app.get("/getswiper",(req,res)=>{
                res.send(data)
            }),
            app.get("/getshu",(req,res)=>{
                res.send(data)
            })
        }
    }
}