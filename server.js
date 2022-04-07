const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const fs = require('fs');

const schema = buildSchema(fs.readFileSync('./graphql/user.gql', 'utf8'));
const User = require('./models/User');


const readUsers = async () => {
    const users = await User.query().select();
    return users;
};

const createUser = async ({name, age}) => {
    const user = await User.query().insert({name: name, age: age});
    return user;
};

const updateUser = async ({id, name, age}) => {
    await User.query().findById(id).update({name: name, age: age});
    return User.query().findById(id);
};

const deleteUser = async ({id}) => {
    await User.query().findById(id).delete();
};

const root = {
    readUsers: readUsers,
    createUser: createUser,
    updateUser: updateUser,
    deleteUser: deleteUser,
};


const app = express();
app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
);
app.listen(4000, () => {
    console.log('Running a GraphQL API server at localhost:4000/graphql')
})
