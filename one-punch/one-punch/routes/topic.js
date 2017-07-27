var express = require('express');
var router = express.Router();
const User=require('../models/in_memo/user');
const Topic=require('../models/in_memo/topic');

/* GET users listing. */
router.route('/').get((req,res,next)=>{
    (async()=>{
        let topic=await Topic.getTopics();
        return {
            code:0,
            topics:topics,
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
            const user=await User.getUserById(req.body.userId);
            let topic=await User.createANewTopics({
                creator:user,
                title:req.body.title,
                content:req.body.content,
            });
            return {
                code:0,
                users:topic
            }
        })()
            .then(r=>{
                res.json({
                    code:0,
                    users:r.user
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
 router.route('/:id/reply')
     .post((req,res,next)=>{
         (async()=>{
             const user=await User.getUserById(req.body.userId);
             let topic=await Topic.replyATopic({
                 creator:user,
                 content:req.body.content,
             })

             return {
                 code:0,
                 topoc:topic
             }
         })()
             .then(r=>{
                 res.json({
                     code:0,
                     users:r.user
                 })
             })
             .catch(e=>{
                 next(e);
             })
     })
module.exports = router;
