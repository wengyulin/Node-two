var express = require('express');
var router = express.Router();
const User=require('../models/in_memo/user')
/* GET users listing. */
router.route('/').get((req,res,next)=>{
    (async()=>{
      let users=await User.getUsers();
      return {
        users:users,
      }
    })()
        .then(r=>{
           res.json({
               code:0,
               users:r.users,
           })
        })
        .catch(e=>{
          next(e);
        })

})
 .post((req,res,next)=>{
     (async()=>{
         let users=await User.createANewUser({
             name:req.body.name,
             age:req.body.age,
         });
         return {
             code:0,
             users:users,
         }
     })()
         .then(r=>{
             res.json({
                 code:0,
                 users:r.users,
             })
         })
         .catch(e=>{
             next(e);
         })
});
router.route('/:id')
    .get((req,res,next)=>{
        (async()=>{
            let users=await User.getUserById(Number(req.params.id));
            return {
                code:0,
                users:users,
            }
        })()
            .then(r=>{
                res.json({
                    code:0,
                    users:r.users,
                })
            })
            .catch(e=>{
                next(e);
            })
       // res.send('tring to get a user')
    })
    .patch((req,res)=>{
        (async()=>{
            let user=await User.updateUserById(Number(req.params.id),{
              name:req.body.name,
              age:req.body.age,
            });
            return {
                code:0,
                users:users,
            }
        })()
            .then(r=>{
                res.json({
                    code:0,
                    user:r.user,
                })
            })
            .catch(e=>{
                next(e);
            })
     res.send('trying to modify a user')
    })
module.exports = router;
