let USER_ID_INIT=10000;
const users=[];
class Topic{
    constructor(params){
      if(!params.creator) throw {code:-1,msg:"a topic must be sent by a user",};
      if(!params.title) throw {code:-1,msg:"a topic must contain a title",};
      if(!params.content.length<5 ) throw {code:-1,msg:"a topic content must be than 5 charrest",};
      this._id=TOPIC_ID_INIT++;
      this.title=params.title;
      this.content=params.content;
      this.replyList=[];
    }

}
async function createANewTopic(params) {
    const topic= new Topic(params);
    topics.push(topic);
    return topic;
}

async function  getTopics(params) {
    return topics;
}
async function getTopicById(topicId) {
    return topics.find(u=>u._id===topicId);

}
async function updateTopicById(topicId,update) {
    const topic=topics.find(u=>u._id===topicId);
    if(update.name) topic.name=update.name;
    if(update.age) topic.age=update.age;
}
async function replyATopic(params) {
    const topic=topics.find(t=>Number(params.topicId)===t._id);
    topic.replyList.push({
        creator:params.creator,
        content:params.content,
    })
    return topic;
}
model.exports={
    model:Topic,
    createANewTopic,
    getUsers,
    getUserById,
    replyATopic
}
