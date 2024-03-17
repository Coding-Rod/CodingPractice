select *
from posts
-- where id>50;
--  where estatus != 'activo';
-- where titulo like '%escandalo%' --  % es un comodin
-- where fecha_publicacion >'2025-01-01' 
-- where fecha_publicacion between '2023-01-01' and '2025-12-31'
-- where year(fecha_publicacion) between 2023 and 2024
where month(fecha_publicacion) = '04' and day(fecha_publicacion) = '05'
;

select *
from posts_etiquetas
where posts_id is null
;