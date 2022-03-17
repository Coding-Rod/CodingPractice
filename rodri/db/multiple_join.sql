use platziblog;
select posts.titulo, group_concat(nombre_etiqueta)
from posts
	inner join posts_etiquetas on posts.id = posts_etiquetas.posts_id
    inner join etiquetas on etiquetas.id = posts_etiquetas.etiquetas_id
group by posts.id
order by num_etiquetas desc
;

select *
from etiquetas
	left join posts_etiquetas on etiquetas.id = posts_etiquetas.etiquetas_id
where posts_etiquetas.etiquetas_id is null
;