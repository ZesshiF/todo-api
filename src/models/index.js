import Users, { hasMany } from "./Users";
import Tasks, { belongsTo, hasMany as _hasMany } from "./Tasks.js";
import Comments, { belongsTo as _belongsTo } from "./Comments.js";


hasMany(Tasks, { foreignKey: "user_id" });
belongsTo(Users, { foreignKey: "user_id" });


_hasMany(Comments, { foreignKey: "task_id" });
_belongsTo(Tasks, { foreignKey: "task_id" });

export default { Users, Tasks, Comments };
