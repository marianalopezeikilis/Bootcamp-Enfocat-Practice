select name, platform, year, global_sales from vgames.videogames order by global_sales desc limit 10;
select name from vgames.videogames order by name desc limit 10;
select count(distinct platform) from vgames.videogames;  