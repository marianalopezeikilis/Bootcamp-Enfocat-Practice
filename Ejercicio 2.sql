SELECT * FROM vgames.videogames;
SELECT count(*) FROM vgames.videogames where platform like "%ps%"; 
SELECT count(genre) FROM vgames.videogames where genre="sports" and year between 0 and 2000;
SELECT count(genre) FROM vgames.videogames where genre="sports" and year<=2000;
SELECT name, year, global_sales FROM vgames.videogames where genre='sports' order by global_sales desc limit 1;
SELECT name, year, global_sales FROM vgames.videogames order by global_sales desc limit 10;
SELECT name, year, global_sales FROM vgames.videogames where global_sales>25 order by year desc, global_sales desc; 