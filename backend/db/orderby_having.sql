select *
from posts
order by fecha_publicacion ASC -- ASC o DESC
limit 5
;

select monthname(fecha_publicacion) as post_month, count(*) as post_quantity
from posts
group by estatus, post_month
having post_quantity > 1 --  use it instead of where when using group by
order by post_month
;