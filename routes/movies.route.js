import express from 'express';
const router = express.Router();
import { getAllMovie, postMovies, getMovieById, deleteMovieById, putMovieById } from '../services/movies.service.js';

router.get("/",async function (request, response) {
    const dataD=await getAllMovie()
    console.log('working');
    response.send(dataD);
  });
  

router.post('/',express.json(),async function(request, response){
    const data = request.body;
    const idData = await postMovies(data);
    response.send(idData) //Js object -->json
  })

router.get("/:id",express.json(),async function (request, response) {
    const {id}=request.params;
    const movie = await getMovieById(id)
    response.send(movie);
});

router.delete("/:id",express.json(),async function (request, response) {
    const id=request.params.id;
    //find always gives you cursor (pagination)
    const data= getMovieById(id);
    const idData = await deleteMovieById(id)
    response.send(idData.deletedCount ==0? {message:'no data found'}: data);
});

router.put("/:id",express.json(),async function (request, response) {
    const id=request.params.id;
    const dataOne =request.body;
    //find always gives you cursor (pagination)
    console.log(dataOne);
    const data= await putMovieById(id, dataOne)
    response.send(data)
});

export default router;


