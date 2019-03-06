import {movies, getById} from './db.js'
 
const resolvers = {
    Query:{
        movies: () => movies,
        movie:(_,{id})=>getById(id)
    },
    // Mutation:{
    //     addMovie: (_,{name, score})=>
    // }
};

export default resolvers;