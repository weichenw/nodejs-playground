//const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID =mongodb.ObjectID

//Destucture above
const { MongoClient, ObjectID } = require('mongodb')

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

//Generate object Id
const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to DB')
    }

    const db = client.db(databaseName)

    //NOTE: DELETE
    // db.collection('users').deleteMany({
    //     age: 38
    // }).then((result) => {
    //     console.log(result.deletedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        description: 'Task 3'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    //NOTE:UPDATE
    // db.collection('users').updateOne({
    //     _id: new ObjectID('5ca34eb401e3620cbb761e57')
    // }, {
    //         $inc: {
    //             age: 1
    //         }
    //     }).then((result) => {
    //         console.log(result)
    //     }).catch((error) => {
    //         console.log(error)
    //     })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //         $set: {
    //             completed: true
    //         }
    //     }).then((result) => {
    //         console.log(result.modifiedCount)
    //     }).catch((error) => {
    //         console.log(error)
    //     })

    //NOTE: CREATE

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Vibram',
    //     age: '38'
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }
    //     //refer mongodb API documentation
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jerry',
    //         age: 21
    //     },
    //     {
    //         name: 'Wei',
    //         age: 38
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert users')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Task 1',
    //         completed: false
    //     },
    //     {
    //         description: 'Task 2',
    //         completed: true
    //     },
    //     {
    //         description: 'Task 3',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks')
    //     }

    //     console.log(result.ops)
    // })


    //NOTE: READ
    // db.collection('users').findOne({
    //     _id: new ObjectID("5ca34cfe4f5bfd0b75b34dfd")
    // }, (error, result) => {
    //     if (error) {
    //         console.log('Unable to fetch')
    //     }

    //     console.log(result)
    // })

    // db.collection('users').find({ name: 'Tom' }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({ name: 'Tom' }).count((error, count) => {
    //     console.log(count)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID("5ca3514d1e5d050e5a68dca6") }, (error, task) => {
    //     if (error) {
    //         return console.log('Unable to find task')
    //     }
    //     console.log(task)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(tasks)
    // })
})


