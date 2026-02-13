
import { app } from "./app";
import { sequelize } from "./config/database";

const PORT=3000;

(async()=>{
 await sequelize.sync();
 app.listen(PORT,()=> console.log("Server running on "+PORT));
})();
