package com.TDSE_commerce.rest_TDS.model;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class HelloWorld {

	public HelloWorld(String userName, String email, String passwordHash, String message) {
		super();
		this.userName = userName;
		this.email = email;
		this.passwordHash = passwordHash;
		this.message = message;
	}

	private String userName;
	private String email;
	private String passwordHash; 
	private String message;


	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPasswordHash() {
		return passwordHash;
	}

	public void setPasswordHash(String passwordHash) {
		this.passwordHash = passwordHash;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}
}
