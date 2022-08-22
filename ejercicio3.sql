SELECT * FROM vgames.videogames;
SELECT * FROM vgames.videogames limit 100;	
SELECT name, platform, genre, global_sales FROM vgames.videogames order by global_sales desc limit 10 ;
SELECT name, genre, platform FROM vgames.videogames order by name desc limit 10;
SELECT count(distinct platform)  FROM vgames.videogames;

SELECT SUM(global_sales) as total_global FROM vgames.videogames where platform like 'psp';
SELECT SUM(eu_sales + NA_sales) from vgames.videogames where platform = 'wii'; 

-- Suma de juegos de playstation vendidos en total en europa, norte américa y japón (por separado)
SELECT SUM(eu_sales) as ventas_europa, SUM(na_sales) as ventas_norteamerica, SUM(jp_sales) as ventas_japon from vgames.videogames where platform like 'ps%' ;

-- Suponiendo la población actual, mostrar las unidades vendidas por cápita en japan, eeuu, na
SELECT sum(na_sales)/325.7 as promedio_na, sum(eu_sales)/741.3 as promedio_eu, sum(jp_sales)/126.8 as promedio_jp from vgames.videogames;

-- La suma de ventas en cada país/continente (eu, na, jp), solo para los géneros: racing, sports y simulation (los 3 sumados en una sola fila, con 3 columnas)
SELECT sum(eu_sales) as suma_eu, sum(na_sales) as suma_na, sum(jp_sales) as suma_jp, genre from vgames.videogames where genre in ('racing','sports','simulation');
-- where otra forma (genre='sports' or genre='racing')

-- La suma de ventas en cada continente, solo para los géneros: racing, sports y simulation SEPARANDO LOS 3 GÉNEROS en 3 filas (group by)
SELECT sum(eu_sales) as suma_eu, sum(na_sales) as suma_na, sum(jp_sales) as suma_jp, genre from vgames.videogames where genre in ('racing','sports','simulation') group by genre;

-- Suma total de ventas por plataforma en los años 2008-2010
SELECT platform, SUM(global_sales) from vgames.videogames where year between 2008 and 2010 group by platform;

-- Suma de ventas por año para el género “Sports”
SELECT 
    SUM(global_sales), year, genre
FROM
    vgames.videogames
WHERE
    genre = 'sports'
GROUP BY year;

-- Suma de ventas por año para el género “Strategy”
SELECT SUM(global_sales),year, genre from vgames.videogames where genre='strategy' group by year;

-- Los 10 juegos más vendidos de la historia, en volumen de ventas totales (eu+na+jp)
SELECT SUM(eu_sales + na_sales + jp_sales), name from vgames.videogames group by name order by (SUM(eu_sales + na_sales + jp_sales)) desc limit 10; 

-- El año en que se vendieron más videojuegos de estrategia
SELECT sum(global_sales), genre,year from vgames.videogames where genre='strategy' group by genre, year order by (sum(global_sales)) desc limit 1;

-- Los 10 juegos más vendidos de la historia, en volumen de ventas totales (eu+na+jp)
-- columnas: titulo, nombre de género
SELECT name,genre, SUM(eu_sales + na_sales + jp_sales)as volumen_venta_totales  from vgames.videogames group by name,genre order by (SUM(eu_sales + na_sales + jp_sales)) desc limit 10; 

-- Mostrar las 5 plataformas con mayor número de ventas en período 2010-2015
-- columnas: nombre de plataforma, suma de ventas total (eu+na+jp)
SELECT name, SUM(global_sales) from vgames.videogames where year between 2010 and 2015 group by name order by (SUM(global_sales)) desc limit 5; 

-- Mostrar los 5 publishers con mayor número de ventas en período 2010-2015
-- columnas: nombre de publisher, suma de ventas total (eu+na+jp)
SELECT publisher, SUM(global_sales) from vgames.videogames where year between 2010 and 2015 group by publisher order by (SUM(global_sales)) desc limit 5; 

-- Mostrar evolución de ventas para las playstation en todos los años
-- columnas: año, nombre de plataforma, suma de ventas total  (eu+na+jp)
-- orden ascendente por año
-- plataformas: PS, PS2, PS3, PS4
SELECT  year, platform,  SUM(global_sales) from vgames.videogames where platform like 'PS%' group by year, platform order by year asc;

-- El año en que se vendieron más juegos de "pokemon" (en todas sus variantes)
SELECT SUM(global_sales) as suma,year from vgames.videogames where name like '%pokemon%' group by year order by suma desc limit 1;






