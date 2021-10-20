// Funciones para tabla client
//funcion para mostrar en pantalla la informacion de la tabla Client

function traerInformacion(){
    $.ajax({
        url:"http://150.136.106.94/:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }
    });

}

function pintarRespuesta(respuesta){
    let myTable="<table>";
    for (i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";  
        myTable+="<td>"+respuesta[i].age+"</td>";      
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";         
        
        
        //myTable+="<td> <button onclick='borrarElemento("+respuesta[i].id+")'>Borrar cliente</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").html(myTable);
}

//Funcion para guardar nueva informacion en tabla Games
function guardarInformacion(){
    let myData={
        name:$("#name").val(),   
        age:$("#age").val(),      
        email:$("#email").val(),
        password:$("#password").val(),        
                      
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.136.106.94:8080/api/Client/save",
        type:"POST",
        data:dataToSend,
        //datatype:"JSON",
        contentType:"application/JSON",
        success:function(respuesta){
            $("#resultado").empty();            
            $("#name").val("");
            $("#age").val("");
            $("#email").val("");
            $("#password").val("");

            traerInformacion();
            alert("Se ha guardado el dato en la tabla Client    ")
        }

    });
}
//funcion para actualizar la informacion de la tabla client
function editarInformacion(){
    let myData={
        name:$("#name").val(),
        age:$("#age").val(),
        email:$("#email").val(),
        password:$("#password").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.136.106.94:8080/api/Client/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#name").val("");
            $("#age").val("");
            $("#email").val("");
            $("#password").val("");
            traerInformacion();
            alert("Se ha actualizado el dato en la tabla client")
        }

    });
}
//funcion para borrar informacion de la tabla client
function borrarElemento(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.136.106.94:8080/api/Client/{id}",
        type:"DELETE",
        data:dataToSend,
        contentType: "application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();            
            alert("Se ha eliminado el dato de la tabla client")
        }
    })
}
//*********************************************************************************************************** */
//funcion para mostrar en pantalla la informacion de la tabla Games

function traerInformacionGames(){
    $.ajax({
        url:"http://150.136.106.94:8080/api/Game/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuestaGames){
            console.log(respuestaGames);
            pintarRespuestaGames(respuestaGames);
        }
    });

}

function pintarRespuestaGames(respuestaGames){
    let myTable="<table>";
    for (i=0;i<respuestaGames.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuestaGames[i].name+"</td>";        
        myTable+="<td>"+respuestaGames[i].developer+"</td>";
        myTable+="<td>"+respuestaGames[i].description+"</td>";
        myTable+="<td>"+respuestaGames[i].year+"</td>";     
        
        
        //myTable+="<td> <button onclick='borrarElementogames("+respuestaGames[i].id+")'>Borrar juego</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoGames").html(myTable);
}

//Funcion para guardar nueva informacion en tabla Games
function guardarInformacionGames(){
    let myData={
        name:$("#nameGames").val(),         
        developer:$("#developer").val(),
        description:$("#description").val(),
        year:$("#year").val(),
                      
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.136.106.94:8080/api/Game/save",
        type:"POST",
        data:dataToSend,
        //datatype:"JSON",
        contentType:"application/JSON",
        success:function(respuestaGames){
            $("#resultadoGames").empty();            
            $("#nameGames").val("");
            $("#developer").val("");
            $("#description").val("");
            $("#year").val("");

            traerInformacionCategory();
            alert("Se ha guardado el dato en la tabla Games")
        }

    });
}
//funcion para actualizar la informacion de la tabla games
function editarInformaciong(){
    let myData={
        id:$("#id1").val(),
        developer:$("#developer").val(),
        minage:$("#minage").val(),
        category_id:$("#category_id").val(),
        name:$("#name1").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.136.106.94:8080/api/Game/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestag){
            $("#resultadog").empty();
            $("#id1").val("");
            $("#developer").val("");
            $("#minage").val("");
            $("#category_id").val("");
            $("#name1").val("");
            traerInformaciong();
            alert("Se ha actualizado el dato en la tabla games")
        }

    });
}
//funcion para borrar informacion de la tabla message
function borrarElementogames(idElementogames){
    let myData={
        id:idElementogames
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.136.106.94:8080/api/Game/delete",
        type:"DELETE",
        data:dataToSend,
        contentType: "application/JSON",
        datatype:"JSON",
        success:function(respuestag){
            $("#resultadog").empty();            
            alert("Se ha eliminado el dato de la tabla games")
        }
    })
}
//********************************************************************************************************** */

//funcion para mostrar en pantalla la informacion de la tabla Message

function traerInformacionm(){
    $.ajax({
        url:"http://150.136.106.94:8080/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuestam){
            console.log(respuestam);
            pintarRespuestam(respuestam);
        }
    });

}

function pintarRespuestam(respuestam){
    let myTable="<table>";
    for (i=0;i<respuestam.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuestam[i].idMessage+"</td>";        
        myTable+="<td>"+respuestam[i].messageText+"</td>";    
        
        
       // myTable+="<td> <button onclick='borrarElementomessage("+respuestam[i].id+")'>Borrar Mensaje</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadom").html(myTable);
}

//Funcion para guardar nueva informacion en tabla message
function guardarInformacionm(){
    let myData={
        idMessage:$("#idMessage").val(),         
        messageText:$("#messageText").val(),
                      
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.136.106.94:8080/api/Message/save",
        type:"POST",
        data:dataToSend,
        //datatype:"JSON",
        contentType:"application/JSON",
        success:function(respuestam){
            $("#resultadom").empty();            
            $("#idMessage").val("");
            $("#messageText").val("");

            traerInformacionm();
            alert("Se ha guardado el dato en la tabla Message")
        }

    });
}

//funcion para actualizar la informacion de la tabla message
function editarInformacionm(){
    let myData={
        idMessage:$("#idMessage").val(),
        messageText:$("#messageText").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.136.106.94:8080/api/Message/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestam){
            $("#resultadom").empty();
            $("#idMessage").val("");
            $("#messageText").val("");
            traerInformacionm();
            alert("Se ha actualizado el dato en la tabla message")
        }

    });
}
//funcion para borrar informacion de la tabla message
function borrarElementomessage(idElementomessage){
    let myData={
        id:idElementomessage
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.136.106.94:8080/api/Message/delete",
        type:"DELETE",
        data:dataToSend,
        contentType: "application/JSON",
        datatype:"JSON",
        success:function(respuestam){
            $("#resultadom").empty();            
            alert("Se ha eliminado el dato de la tabla message")
        }
    })
}


//*********************************************************************************************************** */
//funcion para mostrar en pantalla la informacion de la tabla Category

function traerInformacionCategory(){
    $.ajax({
        url:"http://150.136.106.94:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuestaCategory){
            console.log(respuestaCategory);
            pintarRespuestaCategory(respuestaCategory);
        }
    });

}

function pintarRespuestaCategory(respuestaCategory){
    let myTable="<table>";
    for (i=0;i<respuestaCategory.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuestaCategory[i].name+"</td>";        
        myTable+="<td>"+respuestaCategory[i].description+"</td>";       
        
        
       // myTable+="<td> <button onclick='borrarElementogames("+respuestaCategory[i].id+")'>Borrar juego</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoCategory").html(myTable);
}

//Funcion para guardar nueva informacion en tabla Category
function guardarInformacionCategory(){
    let myData={
        name:$("#nameCategory").val(),         
        description:$("#descriptionCategory").val(),  
                      
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.136.106.94:8080/api/Category/save",
        type:"POST",
        data:dataToSend,
        //datatype:"JSON",
        contentType:"application/JSON",
        success:function(respuestaGames){
            $("#resultadoCategory").empty();            
            $("#nameCategory").val("");
            $("#descriptionCategory").val("");
            traerInformacionCategory();
            alert("Se ha guardado el dato en la tabla Category")
        }

    });
}
//**************************************************************************************************** */
//funcion para mostrar en pantalla la informacion de la tabla Reservation

function traerInformacionReservation(){
    $.ajax({
        url:"http://150.136.106.94:8080/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuestaReservation){
            console.log(respuestaReservation);
            pintarRespuestaReservation(respuestaReservation);
        }
    });

}

function pintarRespuestaReservation(respuestaReservation){
    let myTable="<table>";
    for (i=0;i<respuestaReservation.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuestaReservation[i].idReservation+"</td>";        
        myTable+="<td>"+respuestaReservation[i].startDate+"</td>";    
        myTable+="<td>"+respuestaReservation[i].devolutionDate+"</td>";  
        myTable+="<td>"+respuestaReservation[i].name+"</td>";     
        
        
       // myTable+="<td> <button onclick='borrarElementoReservation("+respuestaReservation[i].id+")'>Borrar reservacion</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoReservation").html(myTable);
}

//Funcion para guardar nueva informacion en tabla Reservation
function guardarInformacionReservation(){
    let myData={
        idReservation:$("#idReservation").val(),         
        startDate:$("#startDate").val(),  
        devolutionDate:$("#devolutionDate").val(), 
        name:$("#name").val(), 
                      
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.136.106.94:8080/api/Reservation/save",
        type:"POST",
        data:dataToSend,
        //datatype:"JSON",
        contentType:"application/JSON",
        success:function(respuestaReservation){
            $("#resultadoReservation").empty();            
            $("#idReservation").val("");
            $("#startDate").val("");
            $("#devolutionDate").val("");
            $("#name").val("");

            traerInformacionReservation();
            alert("Se ha guardado el dato en la tabla Reservation")
        }

    });
}
