package com.TDSE_commerce.rest_TDS.resource;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.TDSE_commerce.rest_TDS.model.HelloWorld;

@Path("helloWorld")
public class HelloWorldResource {
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response helloWorld() {
		HelloWorld helloworld = new HelloWorld("Achraf", "achraf.affes@supcom.tn", "PASSWORDHASHHERE", "hello world");
		return Response.ok(helloworld).build();
	}
}
