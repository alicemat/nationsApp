package com.nationsApp.nationsHome;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface NationsMapper {
    
    @Select("SELECT country_id, name, area, country_code2 from countries")
    List<Country> getAllCountries();
   
    @Select("SELECT\r\n"
    		+ " languages.language, countries.name\r\n"
    		+ "FROM countries\r\n"
    		+ "JOIN country_languages\r\n"
    		+ "  ON countries.country_id = country_languages.country_id\r\n"
    		+ "JOIN languages\r\n"
    		+ "  ON country_languages.language_id = languages.language_id WHERE countries.country_id=#{id};")

    List<Language> listLanguages(int id);
    
    @Select("with maxResult as(\r\n"
    		+ "	WITH ratioResults AS(\r\n"
    		+ "		Select country_id, year,population, gdp,\r\n"
    		+ "		gdp/population as ratio\r\n"
    		+ "		from country_stats\r\n"
    		+ "	)\r\n"
    		+ "	Select country_id, year,population, gdp,ratio\r\n"
    		+ "	from ratioResults\r\n"
    		+ "	where ratio in (SELECT max(ratio) from ratioResults group by country_id)\r\n"
    		+ ")\r\n"
    		+ "select countries.name, countries.country_code3, maxResult.year, maxResult.population, maxResult.gdp, maxResult.ratio\r\n"
    		+ "from countries\r\n"
    		+ "join maxResult\r\n"
    		+ "where countries.country_id=maxResult.country_id;\r\n"
    		+ "")
    List<CountryStats> listStats();
    
    @Select("WITH countryStats as(select countries.name, countries.country_id, countries.region_id, country_stats.year, country_stats.population, country_stats.gdp\r\n"
    		+ "from countries\r\n"
    		+ "JOIN country_stats\r\n"
    		+ "ON countries.country_id = country_stats.country_id)\r\n"
    		+ "select countryStats.name, countryStats.country_id, countryStats.region_id, countryStats.year, \r\n"
    		+ "countryStats.population, countryStats.gdp, regions.name as regionName,\r\n"
    		+ "continents.continent_id, continents.name as continentName\r\n"
    		+ "from countryStats\r\n"
    		+ "JOIN regions \r\n"
    		+ "	ON countryStats.region_id=regions.region_id\r\n"
    		+ "JOIN continents\r\n"
    		+ "	on continents.continent_id=regions.region_id;")
    List<RegionsStats> listRegionsStats();
    
 
 }