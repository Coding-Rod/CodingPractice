select estatus, count(*) post_quantity
from posts
group by estatus
;

select year(fecha_publicacion) as post_year, count(*) post_quantity
from posts
group by post_year
;

select monthname(fecha_publicacion) as post_month, count(*) post_quantity
from posts
where year(fecha_publicacion) > '2025'
group by post_month
;

select estatus,monthname(fecha_publicacion) as post_month, count(*) post_quantity
from posts
group by estatus, post_month
;