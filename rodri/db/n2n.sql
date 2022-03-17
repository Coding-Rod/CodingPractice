select titulo , count(*) num_etiquetas
from posts
	inner join posts_etiquetas on posts.id = posts_etiquetas.posts_id
    inner join etiquetas on etiquetas.id = posts_etiquetas.etiquetas_id
group by posts.id
order by num_etiquetas desc
;

select titulo , group_concat(nombre_etiqueta)
from posts
	inner join posts_etiquetas on posts.id = posts_etiquetas.posts_id
    inner join etiquetas on etiquetas.id = posts_etiquetas.etiquetas_id
group by posts.id
;