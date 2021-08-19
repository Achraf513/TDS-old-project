package com.TDSE_commerce.rest_TDS.resource;
 
import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

@ApplicationPath("/restApi")
public class RestEasyServices extends Application{
		public Set<Object> singletons = new HashSet<>();
		
		public RestEasyServices() {
			this.singletons.add(new HelloWorldResource());
		}
		
		public Set<Object> getSingletons(){
			return singletons;
		}
}
