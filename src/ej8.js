import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from './modules/omdb-wrapper.js'
let resultado = null;


resultado  = await OMDBSearchByPage("Orgulloso", 1);
console.log("OMDBSearchByPage", resultado);

resultado = await OMDBSearchComplete("Moana");
console.log("OMDBSearchComplete", resultado);

resultado = await OMDBGetByImdbID("tt0903747"); 
console.log("OMDBGetByImdbID", resultado);

