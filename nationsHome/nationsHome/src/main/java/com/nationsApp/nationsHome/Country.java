package com.nationsApp.nationsHome;

public class Country {
	private String name;
	private int country_id;
	private double area;
	private String country_code2;
	
	public Country() {
		
	}

	public String getCountryName() {
		return name;
	}

	public void setCountryName(String name) {
		this.name = name;
	}

	public int getCountry_id() {
		return country_id;
	}

	public void setCountry_id(int country_id) {
		this.country_id = country_id;
	}

	public double getArea() {
		return area;
	}

	public void setArea(double area) {
		this.area = area;
	}

	public String getCountry_code2() {
		return country_code2;
	}

	public void setCountry_code2(String country_code2) {
		this.country_code2 = country_code2;
	}
	
}
