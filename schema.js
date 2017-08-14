const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

const customers = [
    { id: '1', name: 'Jonh Doe', email: 'jonh@jonh', age: 24 },
    { id: '2', name: 'Diogo Almeida', email: 'diogo@diogo', age: 24 },
    { id: '3', name: 'Wagner Santos', email: 'wagner@wagner', age: 24 }
]


const CustomerType = new GraphQLObjectType({
    name:'Customer',
    fields:() => ({
        id: {type:GraphQLString},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        age: {type: GraphQLInt},
    })
});

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        customer:{
            type:CustomerType,
            args:{
                id:{type:GraphQLString}
            },
            resolve(parentValue, args) {
                for(let i = 0;i < customers.length;i++){
                    if(customers[i].id == args.id){
                        return customers[i];
                    }
                }
            }
        }
    }

});

module.exports = new GraphQLSchema({
    query: RootQuery
})